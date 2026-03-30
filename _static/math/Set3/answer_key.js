// Math Grid Questions Set 3 — answer key
// grid: row-major array. blank:true cells need user input.
// row_ops[r][i]: operator between col i and col i+1 in row r
// col_ops[c][i]: operator between row i and row i+1 in col c
// answers: {"row_col": value} using 0-based indices
const MATH_QUESTIONS = [
    {
        // Q1. [2x2, 2 blanks]
        //  2 + [?] = 9
        //  ×    +
        // [?] +  7 = 13
        //  =    =
        // 12   13
        rows: 2, cols: 2,
        grid: [
            [{value: 2, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 7, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['+']],
        row_results: [9, 13],
        col_results: [12, 14],
        answers: {"0_1": 7, "1_0": 6}
    },
    {
        // Q2. [2x2, 2 blanks]
        // [?] - 5 = 8
        //  +    +
        //  9 + [?] = 15
        //  =    =
        // 22   11
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 5, blank: false}],
            [{value: 9, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['+'], ['+']],
        row_results: [8, 15],
        col_results: [22, 11],
        answers: {"0_0": 13, "1_1": 6}
    },
    {
        // Q3. [2x2, 2 blanks]
        //  4 × [?] = 24
        //  +    -
        //  6 × [?] = 18
        //  =    =
        // 10    3
        rows: 2, cols: 2,
        grid: [
            [{value: 4, blank: false}, {value: null, blank: true}],
            [{value: 6, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['-']],
        row_results: [24, 18],
        col_results: [10, 3],
        answers: {"0_1": 6, "1_1": 3}
    },
    {
        // Q4. [2x2, 2 blanks]
        // [?] + [?] = 12
        //  -    +
        //  4 +  3 = 7
        //  =    =
        //  3   14
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: 3, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['-'], ['+']],
        row_results: [12, 7],
        col_results: [3, 8],
        answers: {"0_0": 7, "0_1": 5}
    },
    {
        // Q5. [2x2, 2 blanks]
        // [?] +  8 = 17
        //  ×    +
        //  3 + [?] = 9
        //  =    =
        // 27   14
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 8, blank: false}],
            [{value: 3, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['+']],
        row_results: [17, 9],
        col_results: [27, 14],
        answers: {"0_0": 9, "1_1": 6}
    },
    {
        // Q6. [2x2, 2 blanks]
        // 12 - [?] = 7
        //  +    ×
        // [?] +  2 = 8
        //  =    =
        // 18   10
        rows: 2, cols: 2,
        grid: [
            [{value: 12, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['+'], ['*']],
        row_results: [7, 8],
        col_results: [18, 10],
        answers: {"0_1": 5, "1_0": 6}
    },
    {
        // Q7. [2x2, 2 blanks]
        // [?] ×  2 = 14
        //  +    -
        //  5 × [?] = 15
        //  =    =
        // 12    1
        rows: 2, cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 2, blank: false}],
            [{value: 5, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['-']],
        row_results: [14, 15],
        col_results: [12, -1],
        answers: {"0_0": 7, "1_1": 3}
    },
    {
        // Q8. [2x2, 2 blanks]
        //  6 + [?] = 14
        //  ×    ×
        // [?] +  3 = 8
        //  =    =
        // 30   40
        rows: 2, cols: 2,
        grid: [
            [{value: 6, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 3, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['*'], ['*']],
        row_results: [14, 8],
        col_results: [30, 24],
        answers: {"0_1": 8, "1_0": 5}
    },
    {
        // Q9. [2x3, 3 blanks]
        //  7 - [?] - [?] = 4
        //  -    +    ×
        //  1 × [?] × 10 = 50
        //  =    =    =
        //  6    7   10
        rows: 2,
        cols: 3,
        grid: [
            [{value: 7, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 1, blank: false}, {value: null, blank: true}, {value: 10, blank: false}]
        ],
        row_ops: [['-', '-'], ['*', '*']],
        col_ops: [['-'], ['+'], ['*']],
        row_results: [4, 50],
        col_results: [6, 7, 10],
        answers: {"0_1": 2, "0_2": 1, "1_1": 5}
    },
    {
        // Q10. [2x3, 3 blanks]
        // [?] + 13 + 12 = 33
        //  +    +    ×
        // [?] × [?] ×  3 = 27
        //  =    =    =
        //  9   22   36
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 13, blank: false}, {value: 12, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 3, blank: false}]
        ],
        row_ops: [['+', '+'], ['*', '*']],
        col_ops: [['+'], ['+'], ['*']],
        row_results: [33, 27],
        col_results: [9, 22, 36],
        answers: {"0_0": 8, "1_0": 1, "1_1": 9}
    },
    {
        // Q11. [2x3, 3 blanks]
        // 13 - [?] + 11 = 17
        //  -    +    +
        // [?] -  6 × [?] = 44
        //  =    =    =
        //  3   13   22
        rows: 2,
        cols: 3,
        grid: [
            [{value: 13, blank: false}, {value: null, blank: true}, {value: 11, blank: false}],
            [{value: null, blank: true}, {value: 6, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-', '+'], ['-', '*']],
        col_ops: [['-'], ['+'], ['+']],
        row_results: [17, 44],
        col_results: [3, 13, 22],
        answers: {"0_1": 7, "1_0": 10, "1_2": 11}
    },
    {
        // Q12. [2x3, 4 blanks]
        // [?] + [?] × [?] = 44
        //  ×    ×    ×
        //  7 + [?] - 10 = 5
        //  =    =    =
        // 35   48   40
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 7, blank: false}, {value: null, blank: true}, {value: 10, blank: false}]
        ],
        row_ops: [['+', '*'], ['+', '-']],
        col_ops: [['*'], ['*'], ['*']],
        row_results: [44, 5],
        col_results: [35, 48, 40],
        answers: {"0_0": 5, "0_1": 6, "0_2": 4, "1_1": 8}
    },
    {
        // Q13. [2x3, 3 blanks]
        // [?] +  8 - 14 = 6
        //  ×    +    +
        // [?] ×  8 + [?] = 30
        //  =    =    =
        // 24   16   28
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 8, blank: false}, {value: 14, blank: false}],
            [{value: null, blank: true}, {value: 8, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['*', '+']],
        col_ops: [['*'], ['+'], ['+']],
        row_results: [6, 30],
        col_results: [24, 16, 28],
        answers: {"0_0": 12, "1_0": 2, "1_2": 14}
    },
    {
        // Q14. [2x3, 3 blanks]
        // [?] × 15 - [?] = 0
        //  ×    +    +
        // [?] -  9 +  2 = 4
        //  =    =    =
        // 11   24   17
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 15, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 9, blank: false}, {value: 2, blank: false}]
        ],
        row_ops: [['*', '-'], ['-', '+']],
        col_ops: [['*'], ['+'], ['+']],
        row_results: [0, 4],
        col_results: [11, 24, 17],
        answers: {"0_0": 1, "0_2": 15, "1_0": 11}
    },
    {
        // Q15. [2x3, 4 blanks]
        // [?] -  9 ×  4 = 16
        //  -    +    :
        // [?] : [?] + [?] = 4
        //  =    =    =
        // 10   10    4
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 9, blank: false}, {value: 4, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['-', '*'], ['/', '+']],
        col_ops: [['-'], ['+'], ['/']],
        row_results: [16, 4],
        col_results: [10, 10, 4],
        answers: {"0_0": 13, "1_0": 3, "1_1": 1, "1_2": 1}
    },
    {
        // Q16. [2x3, 4 blanks]
        // [?] -  8 × [?] = 10
        //  +    +    ×
        //  9 × [?] - [?] = 14
        //  =    =    =
        // 22   11   26
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 8, blank: false}, {value: null, blank: true}],
            [{value: 9, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['-', '*'], ['*', '-']],
        col_ops: [['+'], ['+'], ['*']],
        row_results: [10, 14],
        col_results: [22, 11, 26],
        answers: {"0_0": 13, "0_2": 2, "1_1": 3, "1_2": 13}
    },
    {
        // Q17. [3x3, 5 blanks]
        // [?] ×  0 + [?] = 3
        //  :    ×    ×
        //  5 × [?] +  2 = 47
        //  ×    -    +
        // [?] - [?] +  5 = 15
        //  =    =    =
        // 20    0   11
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 0, blank: false}, {value: null, blank: true}],
            [{value: 5, blank: false}, {value: null, blank: true}, {value: 2, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 5, blank: false}]
        ],
        row_ops: [['*', '+'], ['*', '+'], ['-', '+']],
        col_ops: [['/', '*'], ['*', '-'], ['*', '+']],
        row_results: [3, 47, 15],
        col_results: [20, 0, 11],
        answers: {"0_0": 10, "0_2": 3, "1_1": 9, "2_0": 10, "2_1": 0}
    },
    {
        // Q18. [3x3, 5 blanks]
        // [?] + [?] -  8 = 7
        //  -    +    ×
        //  2 ×  5 - [?] = 7
        //  -    :    +
        // [?] +  6 + [?] = 17
        //  =    =    =
        //  2    2   31
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 8, blank: false}],
            [{value: 2, blank: false}, {value: 5, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 6, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['*', '-'], ['+', '+']],
        col_ops: [['-', '-'], ['+', '/'], ['*', '+']],
        row_results: [7, 7, 17],
        col_results: [2, 2, 31],
        answers: {"0_0": 8, "0_1": 7, "1_2": 3, "2_0": 4, "2_2": 7}
    },
    {
        // Q19. [3x3, 5 blanks]
        // [?] +  9 + [?] = 17
        //  +    ×    -
        // [?] - [?] + [?] = 12
        //  +    :    ×
        //  9 +  3 +  9 = 21
        //  =    =    =
        // 18   12    9
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 9, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 9, blank: false}, {value: 3, blank: false}, {value: 9, blank: false}]
        ],
        row_ops: [['+', '+'], ['-', '+'], ['+', '+']],
        col_ops: [['+', '+'], ['*', '/'], ['-', '*']],
        row_results: [17, 12, 21],
        col_results: [18, 12, 9],
        answers: {"0_0": 0, "0_2": 8, "1_0": 9, "1_1": 4, "1_2": 7}
    },
    {
        // Q20. [3x3, 5 blanks]
        // [?] + [?] -  0 = 3
        //  ×    +    ×
        // [?] :  4 ×  6 = 18
        //  :    +    ×
        // 12 - [?] + [?] = 17
        //  =    =    =
        //  2    5    0
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 0, blank: false}],
            [{value: null, blank: true}, {value: 4, blank: false}, {value: 6, blank: false}],
            [{value: 12, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['/', '*'], ['-', '+']],
        col_ops: [['*', '/'], ['+', '+'], ['*', '*']],
        row_results: [3, 18, 17],
        col_results: [2, 5, 0],
        answers: {"0_0": 2, "0_1": 1, "1_0": 12, "2_1": 0, "2_2": 5}
    }
];
