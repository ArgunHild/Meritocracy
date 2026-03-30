// Math Grid Questions Set 12 — answer key
// grid: row-major array. blank:true cells need user input.
// row_ops[r][i]: operator between col i and col i+1 in row r
// col_ops[c][i]: operator between row i and row i+1 in col c
// answers: {"row_col": value} using 0-based indices
const MATH_QUESTIONS = [
    {
        // Q1. [2x2, 2 blanks]
        // [?] + 8 = 15
        //  ×   +
        //  3 + [?] = 6
        //  =   =
        // 21  11
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 8, blank: false}],
            [{value: 3, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['+']],
        row_results: [15, 6],
        col_results: [21, 11],
        answers: {"0_0": 7, "1_1": 3}
    },
    {
        // Q2. [2x2, 2 blanks]
        // 16 - [?] = 9
        //  +   ×
        //  4 × [?] = 12
        //  =   =
        // 20   21
        rows: 2, cols: 2,
        grid: [
            [{value: 16, blank: false}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['*']],
        col_ops: [['+'], ['*']],
        row_results: [9, 12],
        col_results: [20, 21],
        answers: {"0_1": 7, "1_1": 3}
    },
    {
        // Q3. [2x2, 2 blanks]
        // [?] × 4 = 36
        //  +   -
        //  6 × [?] = 54
        //  =   =
        // 15    5
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 4, blank: false}],
            [{value: 6, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['-']],
        row_results: [36, 54],
        col_results: [15, -5],
        answers: {"0_0": 9, "1_1": 9}
    },
    {
        // Q4. [2x2, 2 blanks]
        //  8 + [?] = 19
        //  :   +
        // [?] +  5 = 6
        //  =   =
        //  4   16
        rows: 2, cols: 2,
        grid: [
            [{value: 8, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 5, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['/'], ['+']],
        row_results: [19, 6],
        col_results: [8, 16],
        answers: {"0_1": 11, "1_0": 1}
    },
    {
        // Q5. [2x2, 2 blanks]
        // [?] - 3 = 10
        //  ×   +
        //  2 + [?] = 4
        //  =   =
        // 26    5
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 3, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['*'], ['+']],
        row_results: [10, 4],
        col_results: [26, 5],
        answers: {"0_0": 13, "1_1": 2}
    },
    {
        // Q6. [2x2, 2 blanks]
        // 21 : [?] = 7
        //  +   ×
        // [?] +  4 = 9
        //  =   =
        // 26   16
        rows: 2, cols: 2,
        grid: [
            [{value: 21, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 4, blank: false}]
        ],
        row_ops: [['/'], ['+']],
        col_ops: [['+'], ['*']],
        row_results: [7, 9],
        col_results: [26, 12],
        answers: {"0_1": 3, "1_0": 5}
    },
    {
        // Q7. [2x2, 2 blanks]
        // [?] + 6 = 10
        //  -   ×
        //  2 + [?] = 7
        //  =   =
        //  2   30
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 6, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['-'], ['*']],
        row_results: [10, 7],
        col_results: [2, 30],
        answers: {"0_0": 4, "1_1": 5}
    },
    {
        // Q8. [2x2, 2 blanks]
        //  9 × [?] = 27
        //  +   :
        // [?] ×  2 = 18
        //  =   =
        // 18    3
        rows: 2, cols: 2,
        grid: [
            [{value: 9, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['/']],
        row_results: [27, 18],
        col_results: [18, 1.5],
        answers: {"0_1": 3, "1_0": 9}
    },
    {
        // Q9. [2x3, 3 blanks]
        //  7 + [?] × [?] = 27
        //  ×   +    ×
        //  3 × [?] + 1 = 19
        //  =   =    =
        // 21  13   18
        rows: 2,
        cols: 3,
        grid: [
            [{value: 7, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['+', '*'], ['*', '+']],
        col_ops: [['*'], ['+'], ['*']],
        row_results: [27, 19],
        col_results: [21, 13, 18],
        answers: {"0_1": 4, "0_2": 5, "1_1": 6}
    },
    {
        // Q10. [2x3, 4 blanks]
        // [?] × [?] - 2 = 10
        //  +   +    +
        //  3 + [?] + [?] = 14
        //  =   =    =
        //  9  11    8
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 2, blank: false}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['*', '-'], ['+', '+']],
        col_ops: [['+'], ['+'], ['+']],
        row_results: [10, 14],
        col_results: [9, 11, 8],
        answers: {"0_0": 6, "0_1": 2, "1_1": 9, "1_2": 2}
    },
    {
        // Q11. [2x3, 3 blanks]
        //  4 × [?] + 3 = 23
        //  +   ×    +
        // [?] +  5 + [?] = 13
        //  =   =    =
        // 10  25   10
        rows: 2,
        cols: 3,
        grid: [
            [{value: 4, blank: false}, {value: null, blank: true}, {value: 3, blank: false}],
            [{value: null, blank: true}, {value: 5, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*', '+'], ['+', '+']],
        col_ops: [['+'], ['*'], ['+']],
        row_results: [23, 13],
        col_results: [10, 25, 10],
        answers: {"0_1": 5, "1_0": 6, "1_2": 2}
    },
    {
        // Q12. [2x3, 4 blanks]
        // [?] + 3 - [?] = 4
        //  ×   +    ×
        //  2 + [?] × [?] = 30
        //  =   =    =
        // 18  15   20
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 3, blank: false}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['+', '*']],
        col_ops: [['*'], ['+'], ['*']],
        row_results: [4, 30],
        col_results: [18, 15, 20],
        answers: {"0_0": 9, "0_2": 8, "1_1": 12, "1_2": 4}
    },
    {
        // Q13. [2x3, 3 blanks]
        // [?] × 3 - 6 = 9
        //  +   +    ×
        //  4 + [?] + [?] = 18
        //  =   =    =
        //  9  12   12
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 3, blank: false}, {value: 6, blank: false}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['*', '-'], ['+', '+']],
        col_ops: [['+'], ['+'], ['*']],
        row_results: [9, 18],
        col_results: [9, 12, 12],
        answers: {"0_0": 5, "1_1": 9, "1_2": 5}
    },
    {
        // Q14. [2x3, 4 blanks]
        // [?] + [?] × 3 = 21
        //  ×   +    +
        //  2 + [?] × [?] = 20
        //  =   =    =
        // 16  11    9
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 3, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '*'], ['+', '*']],
        col_ops: [['*'], ['+'], ['+']],
        row_results: [21, 20],
        col_results: [16, 11, 9],
        answers: {"0_0": 8, "0_1": 3, "1_1": 8, "1_2": 6}
    },
    {
        // Q15. [2x3, 3 blanks]
        //  9 - [?] + [?] = 8
        //  +   ×    ×
        //  6 × [?] + 5 = 17
        //  =   =    =
        // 15  12   21
        rows: 2,
        cols: 3,
        grid: [
            [{value: 9, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 6, blank: false}, {value: null, blank: true}, {value: 5, blank: false}]
        ],
        row_ops: [['-', '+'], ['*', '+']],
        col_ops: [['+'], ['*'], ['*']],
        row_results: [8, 17],
        col_results: [15, 12, 21],
        answers: {"0_1": 4, "0_2": 3, "1_1": 2}
    },
    {
        // Q16. [2x3, 3 blanks]
        // [?] + 7 - [?] = 5
        //  ×   ×    +
        //  3 + [?] +  2 = 12
        //  =   =    =
        // 24  49   10
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 7, blank: false}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '+']],
        col_ops: [['*'], ['*'], ['+']],
        row_results: [5, 12],
        col_results: [24, 49, 10],
        answers: {"0_0": 8, "0_2": 10, "1_1": 7}
    },
    {
        // Q17. [3x3, 5 blanks]
        // [?] + [?] - 4 = 5
        //  ×   +    +
        //  3 + [?] + 2 = 8
        //  +   ×    ×
        //  6 + [?] + [?] = 12
        //  =   =    =
        // 24  16   12
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 4, blank: false}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: 2, blank: false}],
            [{value: 6, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['+', '+'], ['+', '+']],
        col_ops: [['*', '+'], ['+', '*'], ['+', '*']],
        row_results: [5, 8, 12],
        col_results: [24, 16, 12],
        answers: {"0_0": 6, "0_1": 3, "1_1": 3, "2_1": 2, "2_2": 4}
    },
    {
        // Q18. [3x3, 6 blanks]
        // [?] × [?] + [?] = 22
        //  +   :    +
        //  4 + [?] × [?] = 40
        //  ×   +    ×
        //  2 + [?] + 3 = 8
        //  =   =    =
        // 10   6   18
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: 3, blank: false}]
        ],
        row_ops: [['*', '+'], ['+', '*'], ['+', '+']],
        col_ops: [['+', '*'], ['/', '+'], ['+', '*']],
        row_results: [22, 40, 8],
        col_results: [10, 6, 18],
        answers: {"0_0": 4, "0_1": 4, "0_2": 6, "1_1": 2, "1_2": 8, "2_1": 3}
    },
    {
        // Q19. [3x3, 5 blanks]
        //  5 + [?] × [?] = 18
        //  ×   ×    +
        //  2 + [?] + [?] = 11
        //  +   -    ×
        // [?] +  4 + 2 = 11
        //  =   =    =
        // 15   8   16
        rows: 3,
        cols: 3,
        grid: [
            [{value: 5, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 4, blank: false}, {value: 2, blank: false}]
        ],
        row_ops: [['+', '*'], ['+', '+'], ['+', '+']],
        col_ops: [['*', '+'], ['*', '-'], ['+', '*']],
        row_results: [18, 11, 11],
        col_results: [15, 8, 16],
        answers: {"0_1": 2, "0_2": 4, "1_1": 4, "1_2": 5, "2_0": 5}
    },
    {
        // Q20. [3x3, 6 blanks]
        // [?] + [?] - [?] = 4
        //  ×   ×    +
        //  3 + [?] × [?] = 27
        //  +   -    +
        // [?] + 1 + 2 = 6
        //  =   =    =
        // 12  14   10
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 1, blank: false}, {value: 2, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '*'], ['+', '+']],
        col_ops: [['*', '+'], ['*', '-'], ['+', '+']],
        row_results: [4, 27, 6],
        col_results: [12, 14, 10],
        answers: {"0_0": 4, "0_1": 3, "0_2": 3, "1_1": 7, "1_2": 3, "2_0": 3}
    }
];
