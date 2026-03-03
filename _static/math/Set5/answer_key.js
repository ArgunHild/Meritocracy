// Math Grid Questions Set 5 — answer key
// grid: row-major array. blank:true cells need user input.
// row_ops[r][i]: operator between col i and col i+1 in row r
// col_ops[c][i]: operator between row i and row i+1 in col c
// answers: {"row_col": value} using 0-based indices
const MATH_QUESTIONS = [
    {
        // Q1. [2x2, 2 blanks]
        //  3 × [?] = 21
        //  ×    +
        // [?] ×  2 = 24
        //  =    =
        // 36    9
        rows: 2,
        cols: 2,
        grid: [
            [{value: 3, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['*'], ['+']],
        row_results: [21, 24],
        col_results: [36, 9],
        answers: {"0_1": 7, "1_0": 12}
    },
    {
        // Q2. [2x2, 2 blanks]
        // [?] - [?] = 15
        //  -    ×
        //  4 ×  1 = 4
        //  =    =
        // 13    2
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: 1, blank: false}]
        ],
        row_ops: [['-'], ['*']],
        col_ops: [['-'], ['*']],
        row_results: [15, 4],
        col_results: [13, 2],
        answers: {"0_0": 17, "0_1": 2}
    },
    {
        // Q3. [2x2, 2 blanks]
        // [?] - [?] = 0
        //  +    ×
        //  1 + 19 = 20
        //  =    =
        //  2   19
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}],
            [{value: 1, blank: false}, {value: 19, blank: false}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['+'], ['*']],
        row_results: [0, 20],
        col_results: [2, 19],
        answers: {"0_0": 1, "0_1": 1}
    },
    {
        // Q4. [2x2, 2 blanks]
        // [?] - 12 = 5
        //  +    ×
        // [?] ×  0 = 0
        //  =    =
        // 25    0
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 12, blank: false}],
            [{value: null, blank: true}, {value: 0, blank: false}]
        ],
        row_ops: [['-'], ['*']],
        col_ops: [['+'], ['*']],
        row_results: [5, 0],
        col_results: [25, 0],
        answers: {"0_0": 17, "1_0": 8}
    },
    {
        // Q5. [2x2, 2 blanks]
        //  5 + 12 = 17
        //  -    ×
        // [?] : [?] = 4
        //  =    =
        //  1   12
        rows: 2,
        cols: 2,
        grid: [
            [{value: 5, blank: false}, {value: 12, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['/']],
        col_ops: [['-'], ['*']],
        row_results: [17, 4],
        col_results: [1, 12],
        answers: {"1_0": 4, "1_1": 1}
    },
    {
        // Q6. [2x2, 2 blanks]
        //  0 : 20 = 0
        //  +    +
        // [?] : [?] = 9
        //  =    =
        //  9   21
        rows: 2,
        cols: 2,
        grid: [
            [{value: 0, blank: false}, {value: 20, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['/'], ['/']],
        col_ops: [['+'], ['+']],
        row_results: [0, 9],
        col_results: [9, 21],
        answers: {"1_0": 9, "1_1": 1}
    },
    {
        // Q7. [2x2, 2 blanks]
        // [?] + 16 = 32
        //  +    -
        //  0 + [?] = 2
        //  =    =
        // 16   14
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 16, blank: false}],
            [{value: 0, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['+'], ['-']],
        row_results: [32, 2],
        col_results: [16, 14],
        answers: {"0_0": 16, "1_1": 2}
    },
    {
        // Q8. [2x2, 2 blanks]
        // [?] - 14 = 1
        //  -    :
        //  9 + [?] = 16
        //  =    =
        //  6    2
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 14, blank: false}],
            [{value: 9, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['-'], ['/']],
        row_results: [1, 16],
        col_results: [6, 2],
        answers: {"0_0": 15, "1_1": 7}
    },
    {
        // Q9. [2x3, 3 blanks]
        //  6 : [?] ×  1 = 6
        //  ×    ×    ×
        //  5 : [?] × [?] = 10
        //  =    =    =
        // 30    1    2
        rows: 2,
        cols: 3,
        grid: [
            [{value: 6, blank: false}, {value: null, blank: true}, {value: 1, blank: false}],
            [{value: 5, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['/', '*'], ['/', '*']],
        col_ops: [['*'], ['*'], ['*']],
        row_results: [6, 10],
        col_results: [30, 1, 2],
        answers: {"0_1": 1, "1_1": 1, "1_2": 2}
    },
    {
        // Q10. [2x3, 4 blanks]
        //  4 × [?] : [?] = 4
        //  :    +    :
        // [?] + 13 × [?] = 30
        //  =    =    =
        //  2   21    4
        rows: 2,
        cols: 3,
        grid: [
            [{value: 4, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 13, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*', '/'], ['+', '*']],
        col_ops: [['/'], ['+'], ['/']],
        row_results: [4, 30],
        col_results: [2, 21, 4],
        answers: {"0_1": 8, "0_2": 8, "1_0": 2, "1_2": 2}
    },
    {
        // Q11. [2x3, 3 blanks]
        //  2 × [?] - [?] = 16
        //  +    -    -
        // [?] +  2 -  4 = 3
        //  =    =    =
        //  7    9    2
        rows: 2,
        cols: 3,
        grid: [
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 2, blank: false}, {value: 4, blank: false}]
        ],
        row_ops: [['*', '-'], ['+', '-']],
        col_ops: [['+'], ['-'], ['-']],
        row_results: [16, 3],
        col_results: [7, 9, 2],
        answers: {"0_1": 11, "0_2": 6, "1_0": 5}
    },
    {
        // Q12. [2x3, 3 blanks]
        // [?] + 14 + 11 = 26
        //  ×    +    -
        // [?] × [?] -  7 = 5
        //  =    =    =
        //  1   26    4
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 14, blank: false}, {value: 11, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 7, blank: false}]
        ],
        row_ops: [['+', '+'], ['*', '-']],
        col_ops: [['*'], ['+'], ['-']],
        row_results: [26, 5],
        col_results: [1, 26, 4],
        answers: {"0_0": 1, "1_0": 1, "1_1": 12}
    },
    {
        // Q13. [2x3, 4 blanks]
        //  9 × [?] : [?] = 18
        //  -    ×    ×
        //  8 + [?] - [?] = 3
        //  =    =    =
        //  1   48   39
        rows: 2,
        cols: 3,
        grid: [
            [{value: 9, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 8, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['*', '/'], ['+', '-']],
        col_ops: [['-'], ['*'], ['*']],
        row_results: [18, 3],
        col_results: [1, 48, 39],
        answers: {"0_1": 6, "0_2": 3, "1_1": 8, "1_2": 13}
    },
    {
        // Q14. [2x3, 3 blanks]
        // 11 + [?] + 11 = 33
        //  -    :    :
        //  2 + [?] + [?] = 24
        //  =    =    =
        //  9    1    1
        rows: 2,
        cols: 3,
        grid: [
            [{value: 11, blank: false}, {value: null, blank: true}, {value: 11, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '+'], ['+', '+']],
        col_ops: [['-'], ['/'], ['/']],
        row_results: [33, 24],
        col_results: [9, 1, 1],
        answers: {"0_1": 11, "1_1": 11, "1_2": 11}
    },
    {
        // Q15. [2x3, 3 blanks]
        // [?] × [?] - 10 = 4
        //  +    +    +
        // 13 ×  1 + [?] = 26
        //  =    =    =
        // 14   15   23
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 10, blank: false}],
            [{value: 13, blank: false}, {value: 1, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*', '-'], ['*', '+']],
        col_ops: [['+'], ['+'], ['+']],
        row_results: [4, 26],
        col_results: [14, 15, 23],
        answers: {"0_0": 1, "0_1": 14, "1_2": 13}
    },
    {
        // Q16. [2x3, 3 blanks]
        // [?] +  3 + 13 = 28
        //  :    ×    -
        //  2 - [?] + [?] = 7
        //  =    =    =
        //  6    3    7
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 3, blank: false}, {value: 13, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '+'], ['-', '+']],
        col_ops: [['/'], ['*'], ['-']],
        row_results: [28, 7],
        col_results: [6, 3, 7],
        answers: {"0_0": 12, "1_1": 1, "1_2": 6}
    },
    {
        // Q17. [3x3, 6 blanks]
        // 11 + [?] - [?] = 16
        //  ×    +    ×
        // [?] -  9 + [?] = 13
        //  :    +    :
        // [?] +  6 × [?] = 20
        //  =    =    =
        // 33   25   25
        rows: 3,
        cols: 3,
        grid: [
            [{value: 11, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 9, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 6, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['-', '+'], ['+', '*']],
        col_ops: [['*', '/'], ['+', '+'], ['*', '/']],
        row_results: [16, 13, 20],
        col_results: [33, 25, 25],
        answers: {"0_1": 10, "0_2": 5, "1_0": 12, "1_2": 10, "2_0": 4, "2_2": 2}
    },
    {
        // Q18. [3x3, 6 blanks]
        // [?] × [?] :  6 = 20
        //  +    :    +
        // [?] ×  2 + [?] = 13
        //  -    ×    -
        // [?] :  1 - [?] = 4
        //  =    =    =
        //  7    5    6
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 6, blank: false}],
            [{value: null, blank: true}, {value: 2, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 1, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*', '/'], ['*', '+'], ['/', '-']],
        col_ops: [['+', '-'], ['/', '*'], ['+', '-']],
        row_results: [20, 13, 4],
        col_results: [7, 5, 6],
        answers: {"0_0": 12, "0_1": 10, "1_0": 4, "1_2": 5, "2_0": 9, "2_2": 5}
    },
    {
        // Q19. [3x3, 6 blanks]
        // [?] + [?] + [?] = 14
        //  ×    ×    +
        //  8 : [?] +  3 = 11
        //  :    ×    -
        // [?] :  1 × [?] = 0
        //  =    =    =
        // 22    2    4
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 8, blank: false}, {value: null, blank: true}, {value: 3, blank: false}],
            [{value: null, blank: true}, {value: 1, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '+'], ['/', '+'], ['/', '*']],
        col_ops: [['*', '/'], ['*', '*'], ['+', '-']],
        row_results: [14, 11, 0],
        col_results: [22, 2, 4],
        answers: {"0_0": 11, "0_1": 2, "0_2": 1, "1_1": 1, "2_0": 4, "2_2": 0}
    },
    {
        // Q20. [3x3, 5 blanks]
        // [?] × [?] -  8 = 16
        //  +    -    +
        // [?] × [?] × [?] = 0
        //  +    ×    -
        // 11 +  2 - 12 = 1
        //  =    =    =
        // 28    4    7
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 8, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 11, blank: false}, {value: 2, blank: false}, {value: 12, blank: false}]
        ],
        row_ops: [['*', '-'], ['*', '*'], ['+', '-']],
        col_ops: [['+', '+'], ['-', '*'], ['+', '-']],
        row_results: [16, 0, 1],
        col_results: [28, 4, 7],
        answers: {"0_0": 12, "0_1": 2, "1_0": 5, "1_1": 0, "1_2": 11}
    }
];
