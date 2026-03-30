// Math Grid Questions Set 10 — answer key
// grid: row-major array. blank:true cells need user input.
// row_ops[r][i]: operator between col i and col i+1 in row r
// col_ops[c][i]: operator between row i and row i+1 in col c
// answers: {"row_col": value} using 0-based indices
const MATH_QUESTIONS = [
    {
        // Q1. [2x2, 2 blanks]
        //  9 + [?] = 17
        //  ×    +
        //  2 + [?] = 6
        //  =    =
        // 18   12
        rows: 2, cols: 2,
        grid: [
            [{value: 9, blank: false}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['+']],
        row_results: [17, 6],
        col_results: [18, 12],
        answers: {"0_1": 8, "1_1": 4}
    },
    {
        // Q2. [2x2, 2 blanks]
        // [?] - 7 = 4
        //  ×   +
        //  5 - [?] = 2
        //  =   =
        // 55   10
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 7, blank: false}],
            [{value: 5, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['-']],
        col_ops: [['*'], ['+']],
        row_results: [4, 2],
        col_results: [55, 10],
        answers: {"0_0": 11, "1_1": 3}
    },
    {
        // Q3. [2x2, 2 blanks]
        // 18 : [?] = 6
        //  +   ×
        // [?] +  2 = 5
        //  =   =
        // 21  14
        rows: 2, cols: 2,
        grid: [
            [{value: 18, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['/'], ['+']],
        col_ops: [['+'], ['*']],
        row_results: [6, 5],
        col_results: [21, 6],
        answers: {"0_1": 3, "1_0": 3}
    },
    {
        // Q4. [2x2, 2 blanks]
        // [?] × 4 = 24
        //  +   -
        //  7 × [?] = 21
        //  =   =
        // 13    1
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 4, blank: false}],
            [{value: 7, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['-']],
        row_results: [24, 21],
        col_results: [13, 1],
        answers: {"0_0": 6, "1_1": 3}
    },
    {
        // Q5. [2x2, 2 blanks]
        // 20 - [?] = 8
        //  :   +
        //  4 + [?] = 9
        //  =   =
        //  5  17
        rows: 2, cols: 2,
        grid: [
            [{value: 20, blank: false}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['/'], ['+']],
        row_results: [8, 9],
        col_results: [5, 17],
        answers: {"0_1": 12, "1_1": 5}
    },
    {
        // Q6. [2x2, 2 blanks]
        // [?] + 6 = 13
        //  ×   ×
        //  3 + [?] = 10
        //  =   =
        // 21  42
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 6, blank: false}],
            [{value: 3, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['*']],
        row_results: [13, 10],
        col_results: [21, 42],
        answers: {"0_0": 7, "1_1": 7}
    },
    {
        // Q7. [2x2, 2 blanks]
        // [?] - 5 = 7
        //  +   +
        // 10 - [?] = 4
        //  =   =
        // 22   8
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 5, blank: false}],
            [{value: 10, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['-']],
        col_ops: [['+'], ['+']],
        row_results: [7, 4],
        col_results: [22, 11],
        answers: {"0_0": 12, "1_1": 6}
    },
    {
        // Q8. [2x2, 2 blanks]
        //  5 × [?] = 15
        //  +   :
        // [?] ×  1 = 7
        //  =   =
        // 12    3
        rows: 2, cols: 2,
        grid: [
            [{value: 5, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['/']],
        row_results: [15, 7],
        col_results: [12, 3],
        answers: {"0_1": 3, "1_0": 7}
    },
    {
        // Q9. [2x3, 3 blanks]
        //  6 × [?] + [?] = 16
        //  +   ×    +
        //  4 × [?] +  2 = 22
        //  =   =    =
        // 10  15    7
        rows: 2,
        cols: 3,
        grid: [
            [{value: 6, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['*', '+'], ['*', '+']],
        col_ops: [['+'], ['*'], ['+']],
        row_results: [16, 22],
        col_results: [10, 15, 7],
        answers: {"0_1": 2, "0_2": 4, "1_1": 5}
    },
    {
        // Q10. [2x3, 4 blanks]
        // [?] + [?] - 4 = 9
        //  ×   +    ×
        //  2 + [?] × [?] = 30
        //  =   =    =
        // 14  15    8
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 4, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['+', '*']],
        col_ops: [['*'], ['+'], ['*']],
        row_results: [9, 30],
        col_results: [14, 15, 8],
        answers: {"0_0": 7, "0_1": 6, "1_1": 9, "1_2": 4}
    },
    {
        // Q11. [2x3, 3 blanks]
        //  3 × [?] + 2 = 14
        //  +   ×    ×
        // [?] ×  2 + [?] = 22
        //  =   =    =
        //  9  16   20
        rows: 2,
        cols: 3,
        grid: [
            [{value: 3, blank: false}, {value: null, blank: true}, {value: 2, blank: false}],
            [{value: null, blank: true}, {value: 2, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*', '+'], ['*', '+']],
        col_ops: [['+'], ['*'], ['*']],
        row_results: [14, 22],
        col_results: [9, 16, 20],
        answers: {"0_1": 4, "1_0": 6, "1_2": 10}
    },
    {
        // Q12. [2x3, 4 blanks]
        // [?] - 5 + [?] = 8
        //  ×   +    ×
        //  2 + [?] × [?] = 28
        //  =   =    =
        // 26  13   14
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 5, blank: false}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['-', '+'], ['+', '*']],
        col_ops: [['*'], ['+'], ['*']],
        row_results: [8, 28],
        col_results: [26, 13, 14],
        answers: {"0_0": 13, "0_2": 0, "1_1": 8, "1_2": 2}
    },
    {
        // Q13. [2x3, 3 blanks]
        // [?] + 4 × [?] = 16
        //  +   ×    -
        //  9 + [?] ×  2 = 28
        //  =   =    =
        // 13  12    5
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 4, blank: false}, {value: null, blank: true}],
            [{value: 9, blank: false}, {value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['+', '*'], ['+', '*']],
        col_ops: [['+'], ['*'], ['-']],
        row_results: [16, 28],
        col_results: [13, 12, 5],
        answers: {"0_0": 4, "0_2": 3, "1_1": 3}
    },
    {
        // Q14. [2x3, 3 blanks]
        //  8 × [?] - 6 = 10
        //  :   +    ×
        //  2 + [?] + [?] = 16
        //  =   =    =
        //  4  13   12
        rows: 2,
        cols: 3,
        grid: [
            [{value: 8, blank: false}, {value: null, blank: true}, {value: 6, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['*', '-'], ['+', '+']],
        col_ops: [['/'], ['+'], ['*']],
        row_results: [10, 16],
        col_results: [4, 13, 12],
        answers: {"0_1": 2, "1_1": 11, "1_2": 3}
    },
    {
        // Q15. [2x3, 4 blanks]
        // [?] + [?] × 2 = 20
        //  ×   -    +
        //  4 + [?] × [?] = 15
        //  =   =    =
        // 24   6   21
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 2, blank: false}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '*'], ['+', '*']],
        col_ops: [['*'], ['-'], ['+']],
        row_results: [20, 15],
        col_results: [24, 6, 21],
        answers: {"0_0": 6, "0_1": 4, "1_1": -2, "1_2": 3}
    },
    {
        // Q16. [2x3, 3 blanks]
        //  5 - [?] + [?] = 8
        //  ×   ×    +
        //  3 × [?] +  4 = 22
        //  =   =    =
        // 15   6   14
        rows: 2,
        cols: 3,
        grid: [
            [{value: 5, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: 4, blank: false}]
        ],
        row_ops: [['-', '+'], ['*', '+']],
        col_ops: [['*'], ['*'], ['+']],
        row_results: [8, 22],
        col_results: [15, 6, 14],
        answers: {"0_1": 1, "0_2": 4, "1_1": 6}
    },
    {
        // Q17. [3x3, 5 blanks]
        // [?] + 3 - [?] = 5
        //  ×   ×    +
        //  4 + [?] +  2 = 13
        //  +   -    ×
        // [?] + 1 + [?] = 8
        //  =   =    =
        // 28   8   14
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 3, blank: false}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: 2, blank: false}],
            [{value: null, blank: true}, {value: 1, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['+', '+'], ['+', '+']],
        col_ops: [['*', '+'], ['*', '-'], ['+', '*']],
        row_results: [5, 13, 8],
        col_results: [28, 8, 14],
        answers: {"0_0": 4, "0_2": 2, "1_1": 7, "2_0": 8, "2_2": -1}
    },
    {
        // Q18. [3x3, 5 blanks]
        //  2 + [?] × [?] = 14
        //  ×   ×    ×
        //  3 + [?] + [?] = 18
        //  +   -    +
        //  5 + [?] + 1 = 9
        //  =   =    =
        // 10  20   36
        rows: 3,
        cols: 3,
        grid: [
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 5, blank: false}, {value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['+', '*'], ['+', '+'], ['+', '+']],
        col_ops: [['*', '+'], ['*', '-'], ['*', '+']],
        row_results: [14, 18, 9],
        col_results: [10, 20, 36],
        answers: {"0_1": 4, "0_2": 3, "1_1": 5, "1_2": 12, "2_1": 3}
    },
    {
        // Q19. [3x3, 6 blanks]
        // [?] × [?] + [?] = 11
        //  +   :    +
        //  8 + [?] × [?] = 18
        //  +   ×    +
        //  2 + [?] +  1 = 7
        //  =   =    =
        // 12   4    8
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 8, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['*', '+'], ['+', '*'], ['+', '+']],
        col_ops: [['+', '+'], ['/', '*'], ['+', '+']],
        row_results: [11, 18, 7],
        col_results: [12, 4, 8],
        answers: {"0_0": 2, "0_1": 2, "0_2": 7, "1_1": 2, "1_2": 1, "2_1": 4}
    },
    {
        // Q20. [3x3, 5 blanks]
        // [?] + 4 - [?] = 7
        //  ×   +    ×
        //  3 + [?] + [?] = 14
        //  +   ×    -
        //  4 × [?] - 2 = 14
        //  =   =    =
        // 16  28   14
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 4, blank: false}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '+'], ['*', '-']],
        col_ops: [['*', '+'], ['+', '*'], ['*', '-']],
        row_results: [7, 14, 14],
        col_results: [16, 28, 14],
        answers: {"0_0": 8, "0_2": 5, "1_1": 4, "1_2": 7, "2_1": 4}
    }
];
