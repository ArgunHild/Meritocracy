// ---------------------------------------------------------------------------
// Math Grid Quiz (Gleichungen) – oTree JavaScript
// ---------------------------------------------------------------------------
// MATH_QUESTIONS is loaded dynamically from the set's answer_key.js before
// this script runs.
//
// Each entry:
// {
//   rows: number,        // 2 or 3 (number of equation rows)
//   cols: number,        // 2 or 3 (number of variable columns)
//   grid: [              // row-major; each row has `cols` cell objects
//     [ {value:2, blank:false}, {value:null, blank:true}, ... ],
//     ...
//   ],
//   row_ops: [           // operators between columns in each row
//     ['+', '-'],        // row 0: between col0-col1, col1-col2
//     ...
//   ],
//   col_ops: [           // operators between rows in each column
//     ['+', '-'],        // col 0: between row0-row1, row1-row2
//     ...
//   ],
//   row_results: [5, 1, ...],   // right-hand side of each row equation
//   col_results: [6, 6, ...],   // bottom of each column equation
//   answers: {                  // correct answers keyed "row_col"
//     "0_1": 3,
//     "1_0": 4
//   }
// }
// ---------------------------------------------------------------------------
// TODO: turn off debugging

const DEBUG_MATH = true;  // set true during development to log scoring

const MATH_TOTAL = Math.min(MATH_QUESTIONS.length, (window.js_vars && window.js_vars.max_questions) ? window.js_vars.max_questions : MATH_QUESTIONS.length);

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------
let mCurrentIndex = 0;
let mScoreValue = 0;
let mAnswersMap = {};  // { "0": {"0_1":3,"1_0":4}, "1": {...}, ... }

let mLsPrefix = 'math_';

// DOM references
let mScoreField = null;
let mAnswersField = null;

// ---------------------------------------------------------------------------
// Initialise
// ---------------------------------------------------------------------------
function initMathQuiz() {
    const jv = window.js_vars || {};
    mLsPrefix = 'math_' + (jv.participant_code || 'x') + '_set' + (jv.math_set || '1') + '_';

    mScoreField   = document.getElementById('id_' + (jv.math_score_field   || 'MathQuiz_score'));
    mAnswersField = document.getElementById('id_' + (jv.math_answers_field || 'MathQuiz_answers'));

    const savedIndex   = localStorage.getItem(mLsPrefix + 'index');
    const savedScore   = localStorage.getItem(mLsPrefix + 'score');
    const savedAnswers = localStorage.getItem(mLsPrefix + 'answers');

    mCurrentIndex = savedIndex  !== null ? parseInt(savedIndex,  10) : 0;
    mScoreValue   = savedScore  !== null ? parseInt(savedScore,  10) : 0;
    mAnswersMap   = savedAnswers !== null ? JSON.parse(savedAnswers)  : {};

    if (isNaN(mCurrentIndex) || mCurrentIndex < 0) mCurrentIndex = 0;
    if (isNaN(mScoreValue)   || mScoreValue   < 0) mScoreValue   = 0;

    mSyncFields();

    if (mCurrentIndex >= MATH_TOTAL) {
        mAutoSubmit();
        return;
    }

    mShowQuestion(mCurrentIndex);
}

// ---------------------------------------------------------------------------
// Display a question
// ---------------------------------------------------------------------------
function mShowQuestion(index) {
    const q = MATH_QUESTIONS[index];

    // Counter
    const counter = document.getElementById('math-counter');
    if (counter) counter.textContent = 'Question ' + (index + 1) + ' / ' + MATH_TOTAL;

    // Build grid
    const gridDiv = document.getElementById('math-grid');
    if (!gridDiv) return;
    gridDiv.innerHTML = '';

    // The grid is rendered as a CSS grid.
    // For a grid with R equation rows and C variable columns:
    //   Visual columns = C cells + (C-1) operators + 1 "=" sign + 1 result = 2C + 1
    //   Visual rows    = R cells + (R-1) operator rows + 1 "=" row + 1 result row = 2R + 1
    var visCols = 2 * q.cols + 1;
    var visRows = 2 * q.rows + 1;

    gridDiv.style.gridTemplateColumns = 'repeat(' + visCols + ', auto)';
    gridDiv.style.gridTemplateRows = 'repeat(' + visRows + ', auto)';

    for (var vr = 0; vr < visRows; vr++) {
        for (var vc = 0; vc < visCols; vc++) {
            var cell = document.createElement('div');
            cell.className = 'math-cell';

            var isLastRow = (vr === visRows - 1);           // result row
            var isSecondLastRow = (vr === visRows - 2);     // "=" row
            var isLastCol = (vc === visCols - 1);           // result col
            var isSecondLastCol = (vc === visCols - 2);     // "=" col

            var evenRow = (vr % 2 === 0);  // data rows are even: 0, 2, 4
            var evenCol = (vc % 2 === 0);  // data cols are even: 0, 2, 4

            if (isLastRow && evenCol) {
                // Column result
                var colIdx = vc / 2;
                if (colIdx < q.cols) {
                    cell.textContent = q.col_results[colIdx];
                    cell.classList.add('math-number');
                }
            } else if (isSecondLastRow && evenCol) {
                // "=" sign for columns
                var colIdx2 = vc / 2;
                if (colIdx2 < q.cols) {
                    cell.textContent = '=';
                    cell.classList.add('math-op');
                }
            } else if (isLastRow || isSecondLastRow) {
                // Empty cells in result/= rows for odd columns
                cell.classList.add('math-empty');
            } else if (evenRow && isLastCol) {
                // Row result
                var rowIdx = vr / 2;
                if (rowIdx < q.rows) {
                    cell.textContent = q.row_results[rowIdx];
                    cell.classList.add('math-number');
                }
            } else if (evenRow && isSecondLastCol) {
                // "=" sign for rows
                cell.textContent = '=';
                cell.classList.add('math-op');
            } else if (evenRow && evenCol) {
                // Data cell (number or blank)
                var r = vr / 2;
                var c = vc / 2;
                var cellData = q.grid[r][c];
                if (cellData.blank) {
                    var input = document.createElement('input');
                    input.type = 'number';
                    input.className = 'math-input';
                    input.dataset.row = r;
                    input.dataset.col = c;
                    input.id = 'math-input-' + r + '-' + c;
                    input.setAttribute('min', '0');
                    input.addEventListener('input', mCheckAllFilled);
                    cell.appendChild(input);
                    cell.classList.add('math-blank-cell');
                } else {
                    cell.textContent = cellData.value;
                    cell.classList.add('math-number');
                }
            } else if (evenRow && !evenCol && !isSecondLastCol && !isLastCol) {
                // Horizontal operator (between columns in a data row)
                var rowIdx2 = vr / 2;
                var opIdx = (vc - 1) / 2;
                if (rowIdx2 < q.rows && opIdx < q.row_ops[rowIdx2].length) {
                    cell.textContent = mDisplayOp(q.row_ops[rowIdx2][opIdx]);
                    cell.classList.add('math-op');
                }
            } else if (!evenRow && evenCol) {
                // Vertical operator (between rows in a data column)
                var colIdx3 = vc / 2;
                var opRowIdx = (vr - 1) / 2;
                if (colIdx3 < q.cols && opRowIdx < q.col_ops[colIdx3].length) {
                    cell.textContent = mDisplayOp(q.col_ops[colIdx3][opRowIdx]);
                    cell.classList.add('math-op');
                }
            } else {
                cell.classList.add('math-empty');
            }

            gridDiv.appendChild(cell);
        }
    }

    // Reset confirm button
    var confirmBtn = document.getElementById('math-confirm-btn');
    if (confirmBtn) confirmBtn.disabled = true;

    // Focus first input
    var firstInput = gridDiv.querySelector('.math-input');
    if (firstInput) firstInput.focus();
}

// ---------------------------------------------------------------------------
// Display operator symbol
// ---------------------------------------------------------------------------
function mDisplayOp(op) {
    switch (op) {
        case '+': return '+';
        case '-': return '\u2212';    // minus sign
        case '*': return '\u00D7';    // multiplication sign
        case '/': return ':';         // division shown as colon
        default:  return op;
    }
}

// ---------------------------------------------------------------------------
// Check if all blank fields are filled
// ---------------------------------------------------------------------------
function mCheckAllFilled() {
    var inputs = document.querySelectorAll('.math-input');
    var allFilled = true;
    inputs.forEach(function (inp) {
        if (inp.value === '') allFilled = false;
    });
    var confirmBtn = document.getElementById('math-confirm-btn');
    if (confirmBtn) confirmBtn.disabled = !allFilled;
}

// ---------------------------------------------------------------------------
// Confirm the answer
// ---------------------------------------------------------------------------
function mConfirmAnswer() {
    var q = MATH_QUESTIONS[mCurrentIndex];
    var inputs = document.querySelectorAll('.math-input');
    var playerAnswers = {};
    var allCorrect = true;

    inputs.forEach(function (inp) {
        var key = inp.dataset.row + '_' + inp.dataset.col;
        var val = parseInt(inp.value, 10);
        playerAnswers[key] = val;
        var correctVal = q.answers[key];
        if (val !== correctVal) allCorrect = false;
    });

    if (allCorrect) {
        mScoreValue++;
    }

    mAnswersMap[String(mCurrentIndex)] = playerAnswers;

    if (DEBUG_MATH) {
        console.log(
            'Math Q' + (mCurrentIndex + 1),
            '| correct:', allCorrect,
            '| answers:', JSON.stringify(playerAnswers),
            '| expected:', JSON.stringify(q.answers),
            '| total correct so far:', mScoreValue
        );
    }

    mSaveState();
    mSyncFields();

    mCurrentIndex++;
    mSaveState();

    if (mCurrentIndex < MATH_TOTAL) {
        mShowQuestion(mCurrentIndex);
    } else {
        mAutoSubmit();
    }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function mSyncFields() {
    if (mScoreField)   mScoreField.value   = mScoreValue;
    if (mAnswersField) mAnswersField.value = JSON.stringify(mAnswersMap);
}

function mSaveState() {
    localStorage.setItem(mLsPrefix + 'index',   String(mCurrentIndex));
    localStorage.setItem(mLsPrefix + 'score',   String(mScoreValue));
    localStorage.setItem(mLsPrefix + 'answers', JSON.stringify(mAnswersMap));
}

function mAutoSubmit() {
    localStorage.removeItem(mLsPrefix + 'index');
    localStorage.removeItem(mLsPrefix + 'score');
    localStorage.removeItem(mLsPrefix + 'answers');

    mSyncFields();
    var form = document.querySelector('form');
    if (form) form.submit();
}

// ---------------------------------------------------------------------------
// DOM-ready entry point
// ---------------------------------------------------------------------------
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMathQuiz);
} else {
    initMathQuiz();
}
