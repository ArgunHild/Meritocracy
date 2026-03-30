// Math Grid Questions Set 9 — answer key
// grid: row-major array. blank:true cells need user input.
// row_ops[r][i]: operator between col i and col i+1 in row r
// col_ops[c][i]: operator between row i and row i+1 in col c
// answers: {"row_col": value} using 0-based indices
const MATH_QUESTIONS = [
    {
        // Q1. [2x2, 2 blanks]
        //  5 + [?] = 14
        //  ×    +
        //  3 + [?] = 9
        //  =    =
        // 15   15
        rows: 2, cols: 2,
        grid: [
            [{value: 5, blank: false}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['+']],
        row_results: [14, 9],
        col_results: [15, 15],
        answers: {"0_1": 9, "1_1": 6}
    },
    {
        // Q2. [2x2, 2 blanks]
        // [?] - 4 = 6
        //  +   +
        //  8 - [?] = 1
        //  =   =
        // 18   11
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 4, blank: false}],
            [{value: 8, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['-']],
        col_ops: [['+'], ['+']],
        row_results: [6, 1],
        col_results: [18, 11],
        answers: {"0_0": 10, "1_1": 7}
    },
    {
        // Q3. [2x2, 2 blanks]
        // [?] × 3 = 18
        //  :   +
        //  2 + [?] = 7
        //  =   =
        //  3   8
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 3, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['+']],
        col_ops: [['/'], ['+']],
        row_results: [18, 7],
        col_results: [3, 8],
        answers: {"0_0": 6, "1_1": 5}
    },
    {
        // Q4. [2x2, 2 blanks]
        // 12 + [?] = 20
        //  -   ×
        // [?] +  4 = 8
        //  =   =
        //  8  32
        rows: 2, cols: 2,
        grid: [
            [{value: 12, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 4, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['-'], ['*']],
        row_results: [20, 8],
        col_results: [8, 32],
        answers: {"0_1": 8, "1_0": 4}
    },
    {
        // Q5. [2x2, 2 blanks]
        // [?] × 4 = 28
        //  +   +
        //  3 × [?] = 18
        //  =   =
        // 10  10
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 4, blank: false}],
            [{value: 3, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['+']],
        row_results: [28, 18],
        col_results: [10, 10],
        answers: {"0_0": 7, "1_1": 6}
    },
    {
        // Q6. [2x2, 2 blanks]
        // 16 : [?] = 8
        //  +   ×
        //  4 × [?] = 8
        //  =   =
        // 20   4
        rows: 2, cols: 2,
        grid: [
            [{value: 16, blank: false}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['/'], ['*']],
        col_ops: [['+'], ['*']],
        row_results: [8, 8],
        col_results: [20, 4],
        answers: {"0_1": 2, "1_1": 2}
    },
    {
        // Q7. [2x2, 2 blanks]
        // [?] + 11 = 20
        //  ×    -
        //  2 +  [?] = 8
        //  =    =
        // 18    9
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 11, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['-']],
        row_results: [20, 8],
        col_results: [18, 5],
        answers: {"0_0": 9, "1_1": 6}
    },
    {
        // Q8. [2x2, 2 blanks]
        //  6 × [?] = 24
        //  +   :
        // [?] +  1 = 5
        //  =   =
        // 10   5
        rows: 2, cols: 2,
        grid: [
            [{value: 6, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['*'], ['+']],
        col_ops: [['+'], ['/']],
        row_results: [24, 5],
        col_results: [10, 4],
        answers: {"0_1": 4, "1_0": 4}
    },
    {
        // Q9. [2x3, 3 blanks]
        //  4 + [?] × [?] = 24
        //  +   ×    ×
        //  8 + [?] ×  3 = 33
        //  =   =    =
        // 12  20   21
        rows: 2,
        cols: 3,
        grid: [
            [{value: 4, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 8, blank: false}, {value: null, blank: true}, {value: 3, blank: false}]
        ],
        row_ops: [['+', '*'], ['+', '*']],
        col_ops: [['+'], ['*'], ['*']],
        row_results: [24, 33],
        col_results: [12, 20, 21],
        answers: {"0_1": 4, "0_2": 5, "1_1": 5}
    },
    {
        // Q10. [2x3, 3 blanks]
        // [?] + [?] - 3 = 10
        //  +   +    +
        //  5 +  4 - [?] = 4
        //  =   =    =
        // 15  11    8
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 3, blank: false}],
            [{value: 5, blank: false}, {value: 4, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['+', '-']],
        col_ops: [['+'], ['+'], ['+']],
        row_results: [10, 4],
        col_results: [15, 11, 8],
        answers: {"0_0": 10, "0_1": 3, "1_2": 5}
    },
    {
        // Q11. [2x3, 3 blanks]
        //  9 × [?] -  3 = 33
        //  ×   ×    +
        // [?] ×  5 - [?] = 14
        //  =   =    =
        // 18  20    4
        rows: 2,
        cols: 3,
        grid: [
            [{value: 9, blank: false}, {value: null, blank: true}, {value: 3, blank: false}],
            [{value: null, blank: true}, {value: 5, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*', '-'], ['*', '-']],
        col_ops: [['*'], ['*'], ['+']],
        row_results: [33, 14],
        col_results: [18, 20, 4],
        answers: {"0_1": 4, "1_0": 2, "1_2": -4}
    },
    {
        // Q12. [2x3, 4 blanks]
        // [?] + [?] - 2 = 11
        //  ×   +    ×
        //  3 + [?] × [?] = 14
        //  =   =    =
        // 15  13   10
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 2, blank: false}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['+', '*']],
        col_ops: [['*'], ['+'], ['*']],
        row_results: [11, 14],
        col_results: [15, 13, 10],
        answers: {"0_0": 5, "0_1": 8, "1_1": 5, "1_2": 2}
    },
    {
        // Q13. [2x3, 3 blanks]
        // [?] - 3 × [?] = 10
        //  +   ×    +
        //  4 × [?] + 2 = 18
        //  =   =    =
        //  9  12   12
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 3, blank: false}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['-', '*'], ['*', '+']],
        col_ops: [['+'], ['*'], ['+']],
        row_results: [10, 18],
        col_results: [9, 12, 12],
        answers: {"0_0": 5, "0_2": 2, "1_1": 4}
    },
    {
        // Q14. [2x3, 4 blanks]
        // 10 + [?] : [?] = 12
        //  +   ×    +
        // [?] +  6 + [?] = 14
        //  =   =    =
        // 14  16    6
        rows: 2,
        cols: 3,
        grid: [
            [{value: 10, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 6, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '/'], ['+', '+']],
        col_ops: [['+'], ['*'], ['+']],
        row_results: [12, 14],
        col_results: [14, 16, 6],
        answers: {"0_1": 8, "0_2": 4, "1_0": 4, "1_2": 2}
    },
    {
        // Q15. [2x3, 4 blanks]
        // [?] × [?] - 6 = 12
        //  +   ×    +
        //  2 × [?] + [?] = 14
        //  =   =    =
        //  5  18   14
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 6, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['*', '-'], ['*', '+']],
        col_ops: [['+'], ['*'], ['+']],
        row_results: [12, 14],
        col_results: [5, 18, 14],
        answers: {"0_0": 3, "0_1": 6, "1_1": 3, "1_2": 8}
    },
    {
        // Q16. [2x3, 3 blanks]
        //  7 + [?] - [?] = 4
        //  ×   +    +
        //  3 +  5 +  [?] = 14
        //  =   =    =
        // 21  16   12
        rows: 2,
        cols: 3,
        grid: [
            [{value: 7, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: 5, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['+', '+']],
        col_ops: [['*'], ['+'], ['+']],
        row_results: [4, 14],
        col_results: [21, 16, 12],
        answers: {"0_1": 8, "0_2": 11, "1_2": 6}
    },
    {
        // Q17. [3x3, 6 blanks]
        // [?] + [?] + [?] = 15
        //  ×   +    -
        //  4 + [?] -  2 = 9
        //  +   -    ×
        // [?] +  3 + [?] = 11
        //  =   =    =
        // 20   8    4
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: 2, blank: false}],
            [{value: null, blank: true}, {value: 3, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '+'], ['+', '-'], ['+', '+']],
        col_ops: [['*', '+'], ['+', '-'], ['-', '*']],
        row_results: [15, 9, 11],
        col_results: [20, 8, 4],
        answers: {"0_0": 4, "0_1": 4, "0_2": 7, "1_1": 7, "2_0": 8, "2_2": 0}
    },
    {
        // Q18. [3x3, 5 blanks]
        // [?] - 2 + [?] = 9
        //  +   ×    ×
        //  6 - [?] +  4 = 6
        //  +   ×    ×
        //  3 +  4 + [?] = 11
        //  =   =    =
        // 14  16    8
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 2, blank: false}, {value: null, blank: true}],
            [{value: 6, blank: false}, {value: null, blank: true}, {value: 4, blank: false}],
            [{value: 3, blank: false}, {value: 4, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-', '+'], ['-', '+'], ['+', '+']],
        col_ops: [['+', '+'], ['*', '*'], ['*', '*']],
        row_results: [9, 6, 11],
        col_results: [14, 16, 8],
        answers: {"0_0": 5, "0_2": 6, "1_1": 4, "2_2": 4}
    },
    {
        // Q19. [3x3, 6 blanks]
        //  8 + [?] - [?] = 5
        //  :   +    +
        // [?] × [?] -  3 = 21
        //  +   -    +
        //  5 + [?] + [?] = 14
        //  =   =    =
        // 13  14    9
        rows: 3,
        cols: 3,
        grid: [
            [{value: 8, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 3, blank: false}],
            [{value: 5, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['*', '-'], ['+', '+']],
        col_ops: [['/', '+'], ['+', '-'], ['+', '+']],
        row_results: [5, 21, 14],
        col_results: [13, 14, 9],
        answers: {"0_1": 6, "0_2": 9, "1_0": 8, "1_1": 3, "2_1": 5, "2_2": 4}
    },
    {
        // Q20. [3x3, 5 blanks]
        // [?] × 2 + [?] = 12
        //  +   ×    ×
        //  3 + [?] × [?] = 36
        //  ×   -    +
        //  2 + [?] +  1 = 7
        //  =   =    =
        //  8  10   16
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 2, blank: false}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['*', '+'], ['+', '*'], ['+', '+']],
        col_ops: [['+', '*'], ['*', '-'], ['*', '+']],
        row_results: [12, 36, 7],
        col_results: [8, 10, 16],
        answers: {"0_0": 4, "0_2": 4, "1_1": 4, "1_2": 9, "2_1": 4}
    }
];
