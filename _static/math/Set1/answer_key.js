// Math Grid Questions Set 1 — answer key
// grid: row-major array. blank:true cells need user input.
// row_ops[r][i]: operator between col i and col i+1 in row r
// col_ops[c][i]: operator between row i and row i+1 in col c
// answers: {"row_col": value} using 0-based indices
const MATH_QUESTIONS = [
    {
        // Q1. [2x2, 2 blanks]
        //  4 + [?] = 9
        //  *    +
        // [?] +  8 = 11
        //  =    =
        // 12   13
        rows: 2, cols: 2,
        grid: [
            [{value: 4, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 8, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['+']],
        row_results: [9, 11],
        col_results: [12, 13],
        answers: {"0_1": 5, "1_0": 3},
        explanation: 'Use the row and column equations together to find the two missing values.'
    },
    {
        // Q2. [2x2, 2 blanks]
        // [?] -  3 = 5
        //  +    +
        //  6 + [?] = 14
        //  =    =
        // 14   11
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 3, blank: false}],
            [{value: 6, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['+'], ['+']],
        row_results: [5, 14],
        col_results: [14, 11],
        answers: {"0_0": 8, "1_1": 8}
    },
    {
        // Q3. [2x2, 2 blanks]
        //  5 × [?] = 15
        //  +    -
        //  7 × [?] = 14
        //  =    =
        // 12    1
        rows: 2, cols: 2,
        grid: [
            [{value: 5, blank: false}, {value: null, blank: true}],
            [{value: 7, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['-']],
        row_results: [15, 14],
        col_results: [12, 1],
        answers: {"0_1": 3, "1_1": 2}
    },
    {
        // Q4. [2x2, 2 blanks]
        // [?] + [?] = 10
        //  -    +
        //  2 +  3 = 5
        //  =    =
        //  5   10
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: 3, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['-'], ['+']],
        row_results: [10, 5],
        col_results: [5, 6],
        answers: {"0_0": 7, "0_1": 3}
    },
    {
        // Q5. [2x2, 2 blanks]
        // [?] +  6 = 14
        //  ×    +
        //  3 + [?] = 10
        //  =    =
        // 24   13
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 6, blank: false}],
            [{value: 3, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['+']],
        row_results: [14, 10],
        col_results: [24, 13],
        answers: {"0_0": 8, "1_1": 7}
    },
    {
        // Q6. [2x2, 2 blanks]
        //  9 - [?] = 5
        //  +    ×
        // [?] +  2 = 6
        //  =    =
        // 13    8
        rows: 2, cols: 2,
        grid: [
            [{value: 9, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['+'], ['*']],
        row_results: [5, 6],
        col_results: [13, 8],
        answers: {"0_1": 4, "1_0": 4}
    },
    {
        // Q7. [2x2, 2 blanks]
        // [?] ×  3 = 18
        //  +    -
        //  4 × [?] = 8
        //  =    =
        // 10    1
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 3, blank: false}],
            [{value: 4, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['-']],
        row_results: [18, 8],
        col_results: [10, 1],
        answers: {"0_0": 6, "1_1": 2}
    },
    {
        // Q8. [2x2, 2 blanks]
        //  8 + [?] = 13
        //  ×    ×
        // [?] +  4 = 9
        //  =    =
        // 40   20
        rows: 2, cols: 2,
        grid: [
            [{value: 8, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 4, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['*']],
        row_results: [13, 9],
        col_results: [40, 20],
        answers: {"0_1": 5, "1_0": 5}
    },
    {
        // Q9. [2x3, 4 blanks]
        // [?] -  8 - [?] = 4
        //  +    +    ×
        // 10 × [?] - [?] = 48
        //  =    =    =
        // 23   14   12
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 8, blank: false}, {value: null, blank: true}],
            [{value: 10, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['-', '-'], ['*', '-']],
        col_ops: [['+'], ['+'], ['*']],
        row_results: [4, 48],
        col_results: [23, 14, 12],
        answers: {"0_0": 13, "0_2": 1, "1_1": 6, "1_2": 12}
    },
    {
        // Q10. [2x3, 4 blanks]
        // [?] + 13 + [?] = 36
        //  -    -    +
        // [?] × 10 - [?] = 36
        //  =    =    =
        // 10    3   13
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 13, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 10, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '+'], ['*', '-']],
        col_ops: [['-'], ['-'], ['+']],
        row_results: [36, 36],
        col_results: [10, 3, 13],
        answers: {"0_0": 14, "0_2": 9, "1_0": 4, "1_2": 4}
    },
    {
        // Q11. [2x3, 3 blanks]
        // [?] : [?] +  6 = 7
        //  +    :    +
        // 13 + [?] +  9 = 25
        //  =    =    =
        // 25    4   15
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 6, blank: false}],
            [{value: 13, blank: false}, {value: null, blank: true}, {value: 9, blank: false}]
        ],
        row_ops: [['/', '+'], ['+', '+']],
        col_ops: [['+'], ['/'], ['+']],
        row_results: [7, 25],
        col_results: [25, 4, 15],
        answers: {"0_0": 12, "0_1": 12, "1_1": 3}
    },
    {
        // Q12. [2x3, 3 blanks]
        //  5 + [?] :  9 = 1
        //  +    +    +
        // [?] × [?] :  9 = 12
        //  =    =    =
        // 17   13   18
        rows: 2,
        cols: 3,
        grid: [
            [{value: 5, blank: false}, {value: null, blank: true}, {value: 9, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 9, blank: false}]
        ],
        row_ops: [['+', '/'], ['*', '/']],
        col_ops: [['+'], ['+'], ['+']],
        row_results: [1, 12],
        col_results: [17, 13, 18],
        answers: {"0_1": 4, "1_0": 12, "1_1": 9}
    },
    {
        // Q13. [2x3, 3 blanks]
        // 14 × [?] : 12 = 14
        //  +    -    ×
        // [?] × [?] +  4 = 14
        //  =    =    =
        // 24   11   48
        rows: 2,
        cols: 3,
        grid: [
            [{value: 14, blank: false}, {value: null, blank: true}, {value: 12, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 4, blank: false}]
        ],
        row_ops: [['*', '/'], ['*', '+']],
        col_ops: [['+'], ['-'], ['*']],
        row_results: [14, 14],
        col_results: [24, 11, 48],
        answers: {"0_1": 12, "1_0": 10, "1_1": 1}
    },
    {
        // Q14. [2x3, 3 blanks]
        // [?] + 15 - [?] = 16
        //  -    -    ×
        //  2 + [?] ×  2 = 28
        //  =    =    =
        // 10    3   22
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 15, blank: false}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '*']],
        col_ops: [['-'], ['-'], ['*']],
        row_results: [16, 28],
        col_results: [10, 3, 22],
        answers: {"0_0": 12, "0_2": 11, "1_1": 12}
    },
    {
        // Q15. [2x3, 4 blanks]
        // [?] ×  9 - [?] = 30
        //  +    +    +
        // [?] -  6 × [?] = 15
        //  =    =    =
        // 13   15   11
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 9, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 6, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*', '-'], ['-', '*']],
        col_ops: [['+'], ['+'], ['+']],
        row_results: [30, 15],
        col_results: [13, 15, 11],
        answers: {"0_0": 4, "0_2": 6, "1_0": 9, "1_2": 5}
    },
    {
        // Q16. [2x3, 3 blanks]
        //  7 + 11 + [?] = 31
        //  +    +    -
        // 15 - [?] + [?] = 14
        //  =    =    =
        // 22   22    3
        rows: 2,
        cols: 3,
        grid: [
            [{value: 7, blank: false}, {value: 11, blank: false}, {value: null, blank: true}],
            [{value: 15, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '+'], ['-', '+']],
        col_ops: [['+'], ['+'], ['-']],
        row_results: [31, 14],
        col_results: [22, 22, 3],
        answers: {"0_2": 13, "1_1": 11, "1_2": 10}
    },
    {
        // Q17. [3x3, 5 blanks]
        // [?] + 12 + [?] = 12
        //  :    :    +
        // [?] :  1 × [?] = 45
        //  +    -    -
        // 12 :  6 + [?] = 3
        //  =    =    =
        // 12    6    4
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 12, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 1, blank: false}, {value: null, blank: true}],
            [{value: 12, blank: false}, {value: 6, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '+'], ['/', '*'], ['/', '+']],
        col_ops: [['/', '+'], ['/', '-'], ['+', '-']],
        row_results: [12, 45, 3],
        col_results: [12, 6, 4],
        answers: {"0_0": 0, "0_2": 0, "1_0": 9, "1_2": 5, "2_2": 1}
    },
    {
        // Q18. [3x3, 5 blanks]
        // [?] + [?] - [?] = 8
        //  ×    +    +
        // 11 +  7 : [?] = 6
        //  -    +    ×
        // [?] -  5 +  7 = 10
        //  =    =    =
        // 36   20   49
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 11, blank: false}, {value: 7, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 5, blank: false}, {value: 7, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '/'], ['-', '+']],
        col_ops: [['*', '-'], ['+', '+'], ['+', '*']],
        row_results: [8, 6, 10],
        col_results: [36, 20, 49],
        answers: {"0_0": 4, "0_1": 8, "0_2": 4, "1_2": 3, "2_0": 8}
    },
    {
        // Q19. [3x3, 5 blanks]
        // [?] × [?] +  1 = 1
        //  +    -    ×
        //  6 + [?] + [?] = 20
        //  :    ×    :
        //  2 × [?] :  2 = 6
        //  =    =    =
        //  3   36    5
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 1, blank: false}],
            [{value: 6, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['*', '+'], ['+', '+'], ['*', '/']],
        col_ops: [['+', '/'], ['-', '*'], ['*', '/']],
        row_results: [1, 20, 6],
        col_results: [3, 36, 5],
        answers: {"0_0": 0, "0_1": 10, "1_1": 4, "1_2": 10, "2_1": 6}
    },
    {
        // Q20. [3x3, 6 blanks]
        // [?] + [?] × [?] = 28
        //  ×    +    ×
        //  1 + [?] × [?] = 9
        //  +    -    -
        // [?] :  7 +  4 = 4
        //  =    =    =
        //  7    0   14
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 1, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 7, blank: false}, {value: 4, blank: false}]
        ],
        row_ops: [['+', '*'], ['+', '*'], ['/', '+']],
        col_ops: [['*', '+'], ['+', '-'], ['*', '-']],
        row_results: [28, 9, 4],
        col_results: [7, 0, 14],
        answers: {"0_0": 7, "0_1": 7, "0_2": 2, "1_1": 0, "1_2": 9, "2_0": 0}
    }
];
