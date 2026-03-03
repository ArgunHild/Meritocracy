// Math Grid Questions Set 4 — answer key
// grid: row-major array. blank:true cells need user input.
// row_ops[r][i]: operator between col i and col i+1 in row r
// col_ops[c][i]: operator between row i and row i+1 in col c
// answers: {"row_col": value} using 0-based indices
const MATH_QUESTIONS = [
    {
        // Q1. [2x2, 2 blanks]
        // [?] -  1 = 5
        //  +    +
        // [?] -  2 = 1
        //  =    =
        //  9    3
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 1, blank: false}],
            [{value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['-'], ['-']],
        col_ops: [['+'], ['+']],
        row_results: [5, 1],
        col_results: [9, 3],
        answers: {"0_0": 6, "1_0": 3}
    },
    {
        // Q2. [2x2, 2 blanks]
        // 13 + [?] = 20
        //  ×    +
        //  3 × [?] = 48
        //  =    =
        // 39   23
        rows: 2,
        cols: 2,
        grid: [
            [{value: 13, blank: false}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['*']],
        col_ops: [['*'], ['+']],
        row_results: [20, 48],
        col_results: [39, 23],
        answers: {"0_1": 7, "1_1": 16}
    },
    {
        // Q3. [2x2, 2 blanks]
        //  0 + 10 = 10
        //  -    +
        // [?] × [?] = 0
        //  =    =
        //  0   23
        rows: 2,
        cols: 2,
        grid: [
            [{value: 0, blank: false}, {value: 10, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['*']],
        col_ops: [['-'], ['+']],
        row_results: [10, 0],
        col_results: [0, 23],
        answers: {"1_0": 0, "1_1": 13}
    },
    {
        // Q4. [2x2, 2 blanks]
        //  4 + [?] = 6
        //  +    +
        // 14 - [?] = 14
        //  =    =
        // 18    2
        rows: 2,
        cols: 2,
        grid: [
            [{value: 4, blank: false}, {value: null, blank: true}],
            [{value: 14, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['-']],
        col_ops: [['+'], ['+']],
        row_results: [6, 14],
        col_results: [18, 2],
        answers: {"0_1": 2, "1_1": 0}
    },
    {
        // Q5. [2x2, 2 blanks]
        //  1 × 10 = 10
        //  ×    :
        // [?] - [?] = 3
        //  =    =
        //  4   10
        rows: 2,
        cols: 2,
        grid: [
            [{value: 1, blank: false}, {value: 10, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['-']],
        col_ops: [['*'], ['/']],
        row_results: [10, 3],
        col_results: [4, 10],
        answers: {"1_0": 4, "1_1": 1}
    },
    {
        // Q6. [2x2, 2 blanks]
        // [?] × [?] = 48
        //  +    :
        // 14 ×  1 = 14
        //  =    =
        // 17   16
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}],
            [{value: 14, blank: false}, {value: 1, blank: false}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['/']],
        row_results: [48, 14],
        col_results: [17, 16],
        answers: {"0_0": 3, "0_1": 16}
    },
    {
        // Q7. [2x2, 2 blanks]
        // [?] × [?] = 24
        //  ×    ×
        //  7 -  1 = 6
        //  =    =
        // 21    8
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}],
            [{value: 7, blank: false}, {value: 1, blank: false}]
        ],
        row_ops: [['*'], ['-']],
        col_ops: [['*'], ['*']],
        row_results: [24, 6],
        col_results: [21, 8],
        answers: {"0_0": 3, "0_1": 8}
    },
    {
        // Q8. [2x2, 2 blanks]
        // [?] - [?] = 3
        //  +    ×
        //  2 +  1 = 3
        //  =    =
        // 12    7
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: 1, blank: false}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['+'], ['*']],
        row_results: [3, 3],
        col_results: [12, 7],
        answers: {"0_0": 10, "0_1": 7}
    },
    {
        // Q9. [2x3, 3 blanks]
        // [?] +  1 + [?] = 24
        //  +    ×    -
        //  4 - [?] +  7 = 10
        //  =    =    =
        // 14    1    6
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 1, blank: false}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: 7, blank: false}]
        ],
        row_ops: [['+', '+'], ['-', '+']],
        col_ops: [['+'], ['*'], ['-']],
        row_results: [24, 10],
        col_results: [14, 1, 6],
        answers: {"0_0": 10, "0_2": 13, "1_1": 1}
    },
    {
        // Q10. [2x3, 4 blanks]
        // [?] + 15 + [?] = 19
        //  +    +    -
        //  4 + [?] - [?] = 10
        //  =    =    =
        //  7   22    0
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 15, blank: false}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '+'], ['+', '-']],
        col_ops: [['+'], ['+'], ['-']],
        row_results: [19, 10],
        col_results: [7, 22, 0],
        answers: {"0_0": 3, "0_2": 1, "1_1": 7, "1_2": 1}
    },
    {
        // Q11. [2x3, 4 blanks]
        // [?] × [?] : 15 = 5
        //  ×    +    +
        // [?] + [?] ×  1 = 9
        //  =    =    =
        // 25   19   16
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 15, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['*', '/'], ['+', '*']],
        col_ops: [['*'], ['+'], ['+']],
        row_results: [5, 9],
        col_results: [25, 19, 16],
        answers: {"0_0": 5, "0_1": 15, "1_0": 5, "1_1": 4}
    },
    {
        // Q12. [2x3, 3 blanks]
        //  2 × [?] +  1 = 31
        //  +    +    ×
        //  2 × [?] × [?] = 18
        //  =    =    =
        //  4   16    9
        rows: 2,
        cols: 3,
        grid: [
            [{value: 2, blank: false}, {value: null, blank: true}, {value: 1, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['*', '+'], ['*', '*']],
        col_ops: [['+'], ['+'], ['*']],
        row_results: [31, 18],
        col_results: [4, 16, 9],
        answers: {"0_1": 15, "1_1": 1, "1_2": 9}
    },
    {
        // Q13. [2x3, 4 blanks]
        // [?] + [?] - 11 = 13
        //  -    -    ×
        //  7 + [?] + [?] = 18
        //  =    =    =
        //  8    2   44
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 11, blank: false}],
            [{value: 7, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['+', '+']],
        col_ops: [['-'], ['-'], ['*']],
        row_results: [13, 18],
        col_results: [8, 2, 44],
        answers: {"0_0": 15, "0_1": 9, "1_1": 7, "1_2": 4}
    },
    {
        // Q14. [2x3, 4 blanks]
        //  2 + [?] : 14 = 1
        //  +    :    -
        // [?] + [?] - [?] = 4
        //  =    =    =
        // 13    4    4
        rows: 2,
        cols: 3,
        grid: [
            [{value: 2, blank: false}, {value: null, blank: true}, {value: 14, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '/'], ['+', '-']],
        col_ops: [['+'], ['/'], ['-']],
        row_results: [1, 4],
        col_results: [13, 4, 4],
        answers: {"0_1": 12, "1_0": 11, "1_1": 3, "1_2": 10}
    },
    {
        // Q15. [2x3, 4 blanks]
        // 10 -  9 + [?] = 13
        //  +    -    :
        // [?] + [?] + [?] = 12
        //  =    =    =
        // 15    8    2
        rows: 2,
        cols: 3,
        grid: [
            [{value: 10, blank: false}, {value: 9, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['-', '+'], ['+', '+']],
        col_ops: [['+'], ['-'], ['/']],
        row_results: [13, 12],
        col_results: [15, 8, 2],
        answers: {"0_2": 12, "1_0": 5, "1_1": 1, "1_2": 6}
    },
    {
        // Q16. [2x3, 4 blanks]
        // [?] +  8 - [?] = 14
        //  :    :    :
        // [?] + [?] ×  1 = 4
        //  =    =    =
        //  7    4    8
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 8, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '*']],
        col_ops: [['/'], ['/'], ['/']],
        row_results: [14, 4],
        col_results: [7, 4, 8],
        answers: {"0_0": 14, "0_2": 8, "1_0": 2, "1_1": 2}
    },
    {
        // Q17. [3x3, 5 blanks]
        // 11 × [?] + [?] = 46
        //  ×    ×    +
        // [?] -  1 + [?] = 9
        //  +    +    ×
        // 12 - [?] -  3 = 5
        //  =    =    =
        // 34    8   30
        rows: 3,
        cols: 3,
        grid: [
            [{value: 11, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 1, blank: false}, {value: null, blank: true}],
            [{value: 12, blank: false}, {value: null, blank: true}, {value: 3, blank: false}]
        ],
        row_ops: [['*', '+'], ['-', '+'], ['-', '-']],
        col_ops: [['*', '+'], ['*', '+'], ['+', '*']],
        row_results: [46, 9, 5],
        col_results: [34, 8, 30],
        answers: {"0_1": 4, "0_2": 2, "1_0": 2, "1_2": 8, "2_1": 4}
    },
    {
        // Q18. [3x3, 6 blanks]
        //  9 ×  0 + [?] = 0
        //  +    +    +
        // [?] × 11 - [?] = 12
        //  +    +    -
        // [?] : [?] × [?] = 0
        //  =    =    =
        // 22   12   10
        rows: 3,
        cols: 3,
        grid: [
            [{value: 9, blank: false}, {value: 0, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 11, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['*', '+'], ['*', '-'], ['/', '*']],
        col_ops: [['+', '+'], ['+', '+'], ['+', '-']],
        row_results: [0, 12, 0],
        col_results: [22, 12, 10],
        answers: {"0_2": 0, "1_0": 2, "1_2": 10, "2_0": 11, "2_1": 1, "2_2": 0}
    },
    {
        // Q19. [3x3, 5 blanks]
        //  7 × [?] × [?] = 35
        //  ×    ×    +
        //  3 × [?] - [?] = 8
        //  -    -    -
        //  9 × [?] +  3 = 48
        //  =    =    =
        // 12    0    9
        rows: 3,
        cols: 3,
        grid: [
            [{value: 7, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 9, blank: false}, {value: null, blank: true}, {value: 3, blank: false}]
        ],
        row_ops: [['*', '*'], ['*', '-'], ['*', '+']],
        col_ops: [['*', '-'], ['*', '-'], ['+', '-']],
        row_results: [35, 8, 48],
        col_results: [12, 0, 9],
        answers: {"0_1": 1, "0_2": 5, "1_1": 5, "1_2": 7, "2_1": 5}
    },
    {
        // Q20. [3x3, 6 blanks]
        // [?] - [?] × 12 = 36
        //  ×    ×    -
        //  4 × [?] : [?] = 1
        //  -    +    -
        // [?] × [?] +  3 = 24
        //  =    =    =
        // 37   19    1
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 12, blank: false}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 3, blank: false}]
        ],
        row_ops: [['-', '*'], ['*', '/'], ['*', '+']],
        col_ops: [['*', '-'], ['*', '+'], ['-', '-']],
        row_results: [36, 1, 24],
        col_results: [37, 19, 1],
        answers: {"0_0": 11, "0_1": 8, "1_1": 2, "1_2": 8, "2_0": 7, "2_1": 3}
    }
];
