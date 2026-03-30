// Math Grid Questions Set 6 — answer key
// grid: row-major array. blank:true cells need user input.
// row_ops[r][i]: operator between col i and col i+1 in row r
// col_ops[c][i]: operator between row i and row i+1 in col c
// answers: {"row_col": value} using 0-based indices
const MATH_QUESTIONS = [
    {
        // Q1. [2x2, 2 blanks]
        //  8 + [?] = 14
        //  ×    +
        // [?] +  5 = 11
        //  =    =
        // 48   11
        rows: 2, cols: 2,
        grid: [
            [{value: 8, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 5, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['+']],
        row_results: [14, 11],
        col_results: [48, 11],
        answers: {"0_1": 6, "1_0": 6}
    },
    {
        // Q2. [2x2, 2 blanks]
        // [?] - 8 = 4
        //  +    +
        //  5 + [?] = 14
        //  =    =
        // 17   13
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 8, blank: false}],
            [{value: 5, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['+'], ['+']],
        row_results: [4, 14],
        col_results: [17, 17],
        answers: {"0_0": 12, "1_1": 9}
    },
    {
        // Q3. [2x2, 2 blanks]
        //  5 × [?] = 30
        //  +    -
        //  7 × [?] = 21
        //  =    =
        // 12    3
        rows: 2, cols: 2,
        grid: [
            [{value: 5, blank: false}, {value: null, blank: true}],
            [{value: 7, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['-']],
        row_results: [30, 21],
        col_results: [12, 3],
        answers: {"0_1": 6, "1_1": 3}
    },
    {
        // Q4. [2x2, 2 blanks]
        // [?] + [?] = 14
        //  -    +
        //  6 +  3 = 9
        //  =    =
        //  5   16
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}],
            [{value: 6, blank: false}, {value: 3, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['-'], ['+']],
        row_results: [14, 9],
        col_results: [5, 6],
        answers: {"0_0": 11, "0_1": 3}
    },
    {
        // Q5. [2x2, 2 blanks]
        // [?] +  4 = 13
        //  ×    +
        //  3 + [?] = 10
        //  =    =
        // 27   11
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 4, blank: false}],
            [{value: 3, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['+']],
        row_results: [13, 10],
        col_results: [27, 11],
        answers: {"0_0": 9, "1_1": 7}
    },
    {
        // Q6. [2x2, 2 blanks]
        // 16 - [?] = 9
        //  +    ×
        // [?] +  2 = 9
        //  =    =
        // 23   14
        rows: 2, cols: 2,
        grid: [
            [{value: 16, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['+'], ['*']],
        row_results: [9, 9],
        col_results: [23, 14],
        answers: {"0_1": 7, "1_0": 7}
    },
    {
        // Q7. [2x2, 2 blanks]
        // [?] ×  4 = 32
        //  +    -
        //  6 × [?] = 18
        //  =    =
        // 14    6
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 4, blank: false}],
            [{value: 6, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['-']],
        row_results: [32, 18],
        col_results: [14, 1],
        answers: {"0_0": 8, "1_1": 3}
    },
    {
        // Q8. [2x2, 2 blanks]
        // 12 + [?] = 20
        //  ×    ×
        // [?] +  5 = 11
        //  =    =
        // 72   48
        rows: 2, cols: 2,
        grid: [
            [{value: 12, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 5, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['*']],
        row_results: [20, 11],
        col_results: [72, 40],
        answers: {"0_1": 8, "1_0": 6}
    },
    {
        // Q9. [2x3, 3 blanks]
        // [?] : [?] + [?] = 7
        //  -    +    -
        //  7 + 14 :  1 = 21
        //  =    =    =
        //  7   21    4
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 7, blank: false}, {value: 14, blank: false}, {value: 1, blank: false}]
        ],
        row_ops: [['/', '+'], ['+', '/']],
        col_ops: [['-'], ['+'], ['-']],
        row_results: [7, 21],
        col_results: [7, 21, 4],
        answers: {"0_0": 14, "0_1": 7, "0_2": 5}
    },
    {
        // Q10. [2x3, 3 blanks]
        // 11 × [?] : 11 = 8
        //  +    -    :
        // [?] × [?] -  1 = 11
        //  =    =    =
        // 14    4   11
        rows: 2,
        cols: 3,
        grid: [
            [{value: 11, blank: false}, {value: null, blank: true}, {value: 11, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['*', '/'], ['*', '-']],
        col_ops: [['+'], ['-'], ['/']],
        row_results: [8, 11],
        col_results: [14, 4, 11],
        answers: {"0_1": 8, "1_0": 3, "1_1": 4}
    },
    {
        // Q11. [2x3, 3 blanks]
        //  4 × [?] - [?] = 36
        //  +    -    ×
        //  4 ×  2 : [?] = 4
        //  =    =    =
        //  8    8    8
        rows: 2,
        cols: 3,
        grid: [
            [{value: 4, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: 2, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*', '-'], ['*', '/']],
        col_ops: [['+'], ['-'], ['*']],
        row_results: [36, 4],
        col_results: [8, 8, 8],
        answers: {"0_1": 10, "0_2": 4, "1_2": 2}
    },
    {
        // Q12. [2x3, 4 blanks]
        // [?] + [?] -  8 = 7
        //  +    :    +
        // [?] + [?] :  5 = 2
        //  =    =    =
        // 16    2   13
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 8, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 5, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '/']],
        col_ops: [['+'], ['/'], ['+']],
        row_results: [7, 2],
        col_results: [16, 2, 13],
        answers: {"0_0": 9, "0_1": 6, "1_0": 7, "1_1": 3}
    },
    {
        // Q13. [2x3, 4 blanks]
        // [?] ×  7 - [?] = 23
        //  ×    -    ×
        // [?] - [?] +  1 = 6
        //  =    =    =
        // 36    3    5
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 7, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['*', '-'], ['-', '+']],
        col_ops: [['*'], ['-'], ['*']],
        row_results: [23, 6],
        col_results: [36, 3, 5],
        answers: {"0_0": 4, "0_2": 5, "1_0": 9, "1_1": 4}
    },
    {
        // Q14. [2x3, 4 blanks]
        // [?] : [?] × [?] = 1
        //  +    ×    ×
        // 11 ×  4 - [?] = 36
        //  =    =    =
        // 16   20    8
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 11, blank: false}, {value: 4, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['/', '*'], ['*', '-']],
        col_ops: [['+'], ['*'], ['*']],
        row_results: [1, 36],
        col_results: [16, 20, 8],
        answers: {"0_0": 5, "0_1": 5, "0_2": 1, "1_2": 8}
    },
    {
        // Q15. [2x3, 3 blanks]
        //  6 ×  5 + [?] = 33
        //  +    ×    ×
        // [?] - [?] ×  4 = 8
        //  =    =    =
        //  9    5   12
        rows: 2,
        cols: 3,
        grid: [
            [{value: 6, blank: false}, {value: 5, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 4, blank: false}]
        ],
        row_ops: [['*', '+'], ['-', '*']],
        col_ops: [['+'], ['*'], ['*']],
        row_results: [33, 8],
        col_results: [9, 5, 12],
        answers: {"0_2": 3, "1_0": 3, "1_1": 1}
    },
    {
        // Q16. [2x3, 4 blanks]
        //  8 × [?] - [?] = 6
        //  +    +    :
        //  8 : [?] : [?] = 1
        //  =    =    =
        // 16    9    2
        rows: 2,
        cols: 3,
        grid: [
            [{value: 8, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 8, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['*', '-'], ['/', '/']],
        col_ops: [['+'], ['+'], ['/']],
        row_results: [6, 1],
        col_results: [16, 9, 2],
        answers: {"0_1": 1, "0_2": 2, "1_1": 8, "1_2": 1}
    },
    {
        // Q17. [3x3, 5 blanks]
        // [?] +  2 + [?] = 9
        //  :    +    +
        //  5 × [?] ×  1 = 20
        //  ×    +    +
        // [?] : [?] × 10 = 10
        //  =    =    =
        //  0   18   18
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 2, blank: false}, {value: null, blank: true}],
            [{value: 5, blank: false}, {value: null, blank: true}, {value: 1, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 10, blank: false}]
        ],
        row_ops: [['+', '+'], ['*', '*'], ['/', '*']],
        col_ops: [['/', '*'], ['+', '+'], ['+', '+']],
        row_results: [9, 20, 10],
        col_results: [0, 18, 18],
        answers: {"0_0": 0, "0_2": 7, "1_1": 4, "2_0": 12, "2_1": 12}
    },
    {
        // Q18. [3x3, 5 blanks]
        //  2 : [?] ×  8 = 8
        //  ×    -    ×
        // [?] - [?] -  1 = 7
        //  +    ×    ×
        // [?] +  9 + [?] = 21
        //  =    =    =
        // 29    9    8
        rows: 3,
        cols: 3,
        grid: [
            [{value: 2, blank: false}, {value: null, blank: true}, {value: 8, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 1, blank: false}],
            [{value: null, blank: true}, {value: 9, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['/', '*'], ['-', '-'], ['+', '+']],
        col_ops: [['*', '+'], ['-', '*'], ['*', '*']],
        row_results: [8, 7, 21],
        col_results: [29, 9, 8],
        answers: {"0_1": 2, "1_0": 9, "1_1": 1, "2_0": 11, "2_2": 1}
    },
    {
        // Q19. [3x3, 6 blanks]
        //  0 + [?] +  1 = 1
        //  :    +    ×
        // [?] × [?] + [?] = 29
        //  :    -    ×
        // [?] -  3 × [?] = 8
        //  =    =    =
        //  0    9   40
        rows: 3,
        cols: 3,
        grid: [
            [{value: 0, blank: false}, {value: null, blank: true}, {value: 1, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 3, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '+'], ['*', '+'], ['-', '*']],
        col_ops: [['/', '/'], ['+', '-'], ['*', '*']],
        row_results: [1, 29, 8],
        col_results: [0, 9, 40],
        answers: {"0_1": 0, "1_0": 2, "1_1": 12, "1_2": 5, "2_0": 4, "2_2": 8}
    },
    {
        // Q20. [3x3, 5 blanks]
        //  8 : [?] + 10 = 11
        //  ×    :    -
        //  2 ×  4 + [?] = 17
        //  +    -    +
        // [?] × [?] × [?] = 0
        //  =    =    =
        // 26    2    5
        rows: 3,
        cols: 3,
        grid: [
            [{value: 8, blank: false}, {value: null, blank: true}, {value: 10, blank: false}],
            [{value: 2, blank: false}, {value: 4, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['/', '+'], ['*', '+'], ['*', '*']],
        col_ops: [['*', '+'], ['/', '-'], ['-', '+']],
        row_results: [11, 17, 0],
        col_results: [26, 2, 5],
        answers: {"0_1": 8, "1_2": 9, "2_0": 10, "2_1": 0, "2_2": 4}
    }
];
