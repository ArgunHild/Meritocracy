// Math Grid Questions Set 11 — answer key
// grid: row-major array. blank:true cells need user input.
// row_ops[r][i]: operator between col i and col i+1 in row r
// col_ops[c][i]: operator between row i and row i+1 in col c
// answers: {"row_col": value} using 0-based indices
const MATH_QUESTIONS = [
    {
        // Q1. [2x2, 2 blanks]
        //  6 + [?] = 10
        //  ×    +
        // [?] +  3 = 8
        //  =    =
        // 30   10
        rows: 2, cols: 2,
        grid: [
            [{value: 6, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 3, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['+']],
        row_results: [10, 8],
        col_results: [30, 7],
        answers: {"0_1": 4, "1_0": 5}
    },
    {
        // Q2. [2x2, 2 blanks]
        // [?] - 9 = 5
        //  +    +
        //  7 + [?] = 16
        //  =    =
        // 21   14
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 9, blank: false}],
            [{value: 7, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['+'], ['+']],
        row_results: [5, 16],
        col_results: [21, 18],
        answers: {"0_0": 14, "1_1": 9}
    },
    {
        // Q3. [2x2, 2 blanks]
        //  7 × [?] = 42
        //  +    -
        //  4 × [?] = 12
        //  =    =
        // 11    3
        rows: 2, cols: 2,
        grid: [
            [{value: 7, blank: false}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['-']],
        row_results: [42, 12],
        col_results: [11, 3],
        answers: {"0_1": 6, "1_1": 3}
    },
    {
        // Q4. [2x2, 2 blanks]
        // [?] + [?] = 13
        //  -    +
        //  3 +  6 = 9
        //  =    =
        //  4   16
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: 6, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['-'], ['+']],
        row_results: [13, 9],
        col_results: [4, 12],
        answers: {"0_0": 7, "0_1": 6}
    },
    {
        // Q5. [2x2, 2 blanks]
        // [?] +  6 = 14
        //  ×    +
        //  4 + [?] = 12
        //  =    =
        // 32   14
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 6, blank: false}],
            [{value: 4, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['+']],
        row_results: [14, 12],
        col_results: [32, 14],
        answers: {"0_0": 8, "1_1": 8}
    },
    {
        // Q6. [2x2, 2 blanks]
        // 18 - [?] = 11
        //  +    ×
        // [?] +  2 = 6
        //  =    =
        // 22   14
        rows: 2, cols: 2,
        grid: [
            [{value: 18, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['+'], ['*']],
        row_results: [11, 6],
        col_results: [22, 14],
        answers: {"0_1": 7, "1_0": 4}
    },
    {
        // Q7. [2x2, 2 blanks]
        // [?] ×  3 = 24
        //  +    -
        //  5 × [?] = 20
        //  =    =
        // 13    1
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 3, blank: false}],
            [{value: 5, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['-']],
        row_results: [24, 20],
        col_results: [13, -1],
        answers: {"0_0": 8, "1_1": 4}
    },
    {
        // Q8. [2x2, 2 blanks]
        // 10 + [?] = 17
        //  ×    ×
        // [?] +  4 = 10
        //  =    =
        // 60   42
        rows: 2, cols: 2,
        grid: [
            [{value: 10, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 4, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['*']],
        row_results: [17, 10],
        col_results: [60, 28],
        answers: {"0_1": 7, "1_0": 6}
    },
    {
        // Q9. [2x3, 3 blanks]
        //  5 × [?] - [?] = 7
        //  +   +    ×
        //  3 + [?] ×  2 = 14
        //  =   =    =
        //  8  10   12
        rows: 2,
        cols: 3,
        grid: [
            [{value: 5, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['*', '-'], ['+', '*']],
        col_ops: [['+'], ['+'], ['*']],
        row_results: [7, 14],
        col_results: [8, 10, 12],
        answers: {"0_1": 3, "0_2": 8, "1_1": 7}
    },
    {
        // Q10. [2x3, 4 blanks]
        // [?] + [?] - 5 = 8
        //  ×   +    ×
        //  2 + [?] × [?] = 24
        //  =   =    =
        // 26  15   20
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 5, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['+', '*']],
        col_ops: [['*'], ['+'], ['*']],
        row_results: [8, 24],
        col_results: [26, 15, 20],
        answers: {"0_0": 13, "0_1": 0, "1_1": 15, "1_2": 4}
    },
    {
        // Q11. [2x3, 3 blanks]
        //  6 + [?] × 2 = 22
        //  ×   ×    ×
        // [?] ×  3 + [?] = 13
        //  =   =    =
        // 24  15   10
        rows: 2,
        cols: 3,
        grid: [
            [{value: 6, blank: false}, {value: null, blank: true}, {value: 2, blank: false}],
            [{value: null, blank: true}, {value: 3, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '*'], ['*', '+']],
        col_ops: [['*'], ['*'], ['*']],
        row_results: [22, 13],
        col_results: [24, 15, 10],
        answers: {"0_1": 5, "1_0": 4, "1_2": 5}
    },
    {
        // Q12. [2x3, 4 blanks]
        // [?] - 2 + [?] = 10
        //  +   ×    -
        //  4 × [?] + [?] = 21
        //  =   =    =
        //  7  14    2
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 2, blank: false}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['-', '+'], ['*', '+']],
        col_ops: [['+'], ['*'], ['-']],
        row_results: [10, 21],
        col_results: [7, 14, 2],
        answers: {"0_0": 3, "0_2": 9, "1_1": 7, "1_2": -7}
    },
    {
        // Q13. [2x3, 3 blanks]
        // [?] × 2 + 4 = 16
        //  +   ×    +
        //  5 + [?] + [?] = 17
        //  =   =    =
        // 11  18   10
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 2, blank: false}, {value: 4, blank: false}],
            [{value: 5, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['*', '+'], ['+', '+']],
        col_ops: [['+'], ['*'], ['+']],
        row_results: [16, 17],
        col_results: [11, 18, 10],
        answers: {"0_0": 6, "1_1": 9, "1_2": 3}
    },
    {
        // Q14. [2x3, 4 blanks]
        // [?] + 4 × [?] = 21
        //  ×   +    +
        //  3 + [?] × [?] = 49
        //  =   =    =
        // 12  18   28
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 4, blank: false}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '*'], ['+', '*']],
        col_ops: [['*'], ['+'], ['+']],
        row_results: [21, 49],
        col_results: [12, 18, 28],
        answers: {"0_0": 4, "0_2": 3, "1_1": 14, "1_2": 25}
    },
    {
        // Q15. [2x3, 3 blanks]
        //  8 - [?] × [?] = 4
        //  ×   +    ×
        //  2 + [?] + 3 = 10
        //  =   =    =
        // 16  11   21
        rows: 2,
        cols: 3,
        grid: [
            [{value: 8, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: 3, blank: false}]
        ],
        row_ops: [['-', '*'], ['+', '+']],
        col_ops: [['*'], ['+'], ['*']],
        row_results: [4, 10],
        col_results: [16, 11, 21],
        answers: {"0_1": 4, "0_2": 7, "1_1": 5}
    },
    {
        // Q16. [2x3, 3 blanks]
        // [?] + 6 - [?] = 7
        //  ×   +    ×
        //  2 + [?] + 5 = 11
        //  =   =    =
        // 18  10   20
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 6, blank: false}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: 5, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '+']],
        col_ops: [['*'], ['+'], ['*']],
        row_results: [7, 11],
        col_results: [18, 10, 20],
        answers: {"0_0": 9, "0_2": 8, "1_1": 4}
    },
    {
        // Q17. [3x3, 5 blanks]
        // [?] + 2 × [?] = 16
        //  ×   ×    +
        //  4 + [?] +  3 = 10
        //  +   -    ×
        // [?] + 1 + [?] = 9
        //  =   =    =
        // 28   6   20
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 2, blank: false}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: 3, blank: false}],
            [{value: null, blank: true}, {value: 1, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '*'], ['+', '+'], ['+', '+']],
        col_ops: [['*', '+'], ['*', '-'], ['+', '*']],
        row_results: [16, 10, 9],
        col_results: [28, 6, 20],
        answers: {"0_0": 4, "0_2": 4, "1_1": 3, "2_0": 8, "2_2": 0}
    },
    {
        // Q18. [3x3, 6 blanks]
        // [?] + [?] - [?] = 3
        //  ×   ×    +
        //  2 + [?] + [?] = 12
        //  +   +    ×
        // [?] + 3 +  2 = 10
        //  =   =    =
        // 10  24   14
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 3, blank: false}, {value: 2, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '+'], ['+', '+']],
        col_ops: [['*', '+'], ['*', '+'], ['+', '*']],
        row_results: [3, 12, 10],
        col_results: [10, 24, 14],
        answers: {"0_0": 2, "0_1": 6, "0_2": 5, "1_1": 6, "1_2": 4, "2_0": 5}
    },
    {
        // Q19. [3x3, 5 blanks]
        //  6 × [?] + [?] = 23
        //  +   :    ×
        //  4 + [?] × [?] = 36
        //  ×   ×    +
        //  3 + [?] + 2 = 8
        //  =   =    =
        // 30   6   16
        rows: 3,
        cols: 3,
        grid: [
            [{value: 6, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['*', '+'], ['+', '*'], ['+', '+']],
        col_ops: [['+', '*'], ['/', '*'], ['*', '+']],
        row_results: [23, 36, 8],
        col_results: [30, 6, 16],
        answers: {"0_1": 3, "0_2": 5, "1_1": 6, "1_2": 4, "2_1": 3}
    },
    {
        // Q20. [3x3, 5 blanks]
        // [?] + 5 - [?] = 4
        //  ×   +    ×
        //  2 + [?] + [?] = 11
        //  +   ×    -
        //  3 × [?] - 1 = 11
        //  =   =    =
        // 14  40   14
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 5, blank: false}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '+'], ['*', '-']],
        col_ops: [['*', '+'], ['+', '*'], ['*', '-']],
        row_results: [4, 11, 11],
        col_results: [14, 40, 14],
        answers: {"0_0": 7, "0_2": 8, "1_1": 5, "1_2": 4, "2_1": 8}
    }
];
