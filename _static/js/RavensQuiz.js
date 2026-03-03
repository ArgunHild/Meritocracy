// ---------------------------------------------------------------------------
// Raven's Matrices Quiz – oTree JavaScript
// ---------------------------------------------------------------------------
// PUZZLES is loaded dynamically from the set's answer_key.js before this
// script runs. Each entry: { puzzle: filename, answers: [...], correct: letter }
// ---------------------------------------------------------------------------

// TODO: set to false
const DEBUG = true;   // set to false to suppress console logging


const OPTION_LETTERS = ['A', 'B', 'C', 'D'];
const TOTAL = Math.min(PUZZLES.length, (window.js_vars && window.js_vars.max_questions) ? window.js_vars.max_questions : PUZZLES.length);

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------
let currentIndex = 0;
let selectedOption = null;  // letter A/B/C/D
let scoreValue = 0;
let answersMap = {};        // { "0": "C", "3": "A", ... }  (key = puzzle index string)

// localStorage key prefix (participant-scoped to avoid collisions across sessions)
let lsPrefix = 'ravens_';

// DOM references (set after DOMContentLoaded)
let imgBase = '';
let scoreField = null;
let answersField = null;

// ---------------------------------------------------------------------------
// Initialise
// ---------------------------------------------------------------------------
function initRavensQuiz() {
    // Read oTree js_vars (injected by oTree into the page as window.js_vars)
    const jv = window.js_vars || {};
    lsPrefix = 'ravens_' + (jv.participant_code || 'x') + '_set' + (jv.puzzle_set || '1') + '_';

    // Derive the image base URL from the sentinel attribute (a real file URL).
    // oTree rejects directory paths in {{ static }}, so we point to puzzle_000.png
    // and strip the filename to get the folder URL.
    const container = document.getElementById('RavensQuiz-container');
    const sentinel = container ? (container.dataset.imgSentinel || '') : '';
    imgBase = sentinel ? sentinel.replace('puzzle_000.png', '') : '';

    // Hidden oTree form fields
    scoreField   = document.getElementById('id_' + (jv.score_field   || 'RavensQuiz_score'));
    answersField = document.getElementById('id_' + (jv.answers_field || 'RavensQuiz_answers'));

    // Restore state from localStorage
    const savedIndex   = localStorage.getItem(lsPrefix + 'index');
    const savedScore   = localStorage.getItem(lsPrefix + 'score');
    const savedAnswers = localStorage.getItem(lsPrefix + 'answers');

    currentIndex = savedIndex  !== null ? parseInt(savedIndex,  10) : 0;
    scoreValue   = savedScore  !== null ? parseInt(savedScore,  10) : 0;
    answersMap   = savedAnswers !== null ? JSON.parse(savedAnswers)  : {};

    // Clamp in case of bad stored value
    if (isNaN(currentIndex) || currentIndex < 0) currentIndex = 0;
    if (isNaN(scoreValue)   || scoreValue   < 0) scoreValue   = 0;

    syncFields();

    if (currentIndex >= TOTAL) {
        // All puzzles already completed on a previous load – just submit
        autoSubmit();
        return;
    }

    showPuzzle(currentIndex);
}

// ---------------------------------------------------------------------------
// Display a puzzle
// ---------------------------------------------------------------------------
function showPuzzle(index) {
    const puzzle = PUZZLES[index];

    // Counter
    const counter = document.getElementById('puzzle-counter');
    if (counter) counter.textContent = 'Question ' + (index + 1) + ' / ' + TOTAL;

    // Puzzle image
    const img = document.getElementById('puzzle-img');
    if (img) img.src = imgBase + puzzle.puzzle;

    // Answer choices
    const choicesDiv = document.getElementById('choices');
    if (choicesDiv) {
        choicesDiv.innerHTML = '';
        puzzle.answers.forEach(function (filename, i) {
            const letter = OPTION_LETTERS[i];
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'choice-btn';
            btn.dataset.letter = letter;

            const ansImg = document.createElement('img');
            ansImg.src = imgBase + filename;
            ansImg.alt = 'Option ' + letter;
            btn.appendChild(ansImg);

            btn.addEventListener('click', function () { selectOption(letter); });
            choicesDiv.appendChild(btn);
        });
    }

    // Reset selection
    selectedOption = null;
    const confirmBtn = document.getElementById('confirm-btn');
    if (confirmBtn) confirmBtn.disabled = true;
}

// ---------------------------------------------------------------------------
// Handle option selection
// ---------------------------------------------------------------------------
function selectOption(letter) {
    selectedOption = letter;

    // Update visual selection state
    document.querySelectorAll('.choice-btn').forEach(function (btn) {
        btn.classList.toggle('selected', btn.dataset.letter === letter);
    });

    // Enable confirm button
    const confirmBtn = document.getElementById('confirm-btn');
    if (confirmBtn) confirmBtn.disabled = false;
}

// ---------------------------------------------------------------------------
// Confirm the selected answer (called from HTML onclick)
// ---------------------------------------------------------------------------
function confirmAnswer() {
    if (selectedOption === null) return;

    const puzzle = PUZZLES[currentIndex];

    // Score if correct
    if (selectedOption === puzzle.correct) {
        scoreValue++;
    }

    // Record answer
    answersMap[String(currentIndex)] = selectedOption;

    if (DEBUG) {
        console.log(
            'Q' + (currentIndex + 1),
            '| correct:', puzzle.correct,
            '| given:', selectedOption,
            '| match:', selectedOption === puzzle.correct,
            '| total correct so far:', scoreValue
        );
    }

    // Persist to localStorage
    saveState();

    // Sync oTree hidden fields immediately
    syncFields();

    // Advance
    currentIndex++;
    saveState();   // persist the incremented index

    if (currentIndex < TOTAL) {
        showPuzzle(currentIndex);
    } else {
        // All done – submit the form
        autoSubmit();
    }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function syncFields() {
    if (scoreField)   scoreField.value   = scoreValue;
    if (answersField) answersField.value = JSON.stringify(answersMap);
}

function saveState() {
    localStorage.setItem(lsPrefix + 'index',   String(currentIndex));
    localStorage.setItem(lsPrefix + 'score',   String(scoreValue));
    localStorage.setItem(lsPrefix + 'answers', JSON.stringify(answersMap));
}

function autoSubmit() {
    // Clear localStorage so a future participant on the same browser starts fresh
    localStorage.removeItem(lsPrefix + 'index');
    localStorage.removeItem(lsPrefix + 'score');
    localStorage.removeItem(lsPrefix + 'answers');

    // Sync fields one final time then submit
    syncFields();
    const form = document.querySelector('form');
    if (form) form.submit();
}

// ---------------------------------------------------------------------------
// DOM-ready entry point
// ---------------------------------------------------------------------------
// This script is loaded dynamically (after DOMContentLoaded may have already
// fired), so we check readyState and call init immediately if the DOM is ready.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRavensQuiz);
} else {
    initRavensQuiz();
}
