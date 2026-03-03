// Math Grid Questions Set 7 — answer key
// grid: row-major array. blank:true cells need user input.
// row_ops[r][i]: operator between col i and col i+1 in row r
// col_ops[c][i]: operator between row i and row i+1 in col c
// answers: {"row_col": value} using 0-based indices
const MATH_QUESTIONS = [
    {
        // Q1. [2x2, 2 blanks]
        //  0 × 11 = 0
        //  ×    +
        // [?] - [?] = 1
        //  =    =
        //  0   20
        rows: 2,
        cols: 2,
        grid: [
            [{value: 0, blank: false}, {value: 11, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['-']],
        col_ops: [['*'], ['+']],
        row_results: [0, 1],
        col_results: [0, 20],
        answers: {"1_0": 10, "1_1": 9}
    },
    {
        // Q2. [2x2, 2 blanks]
        // [?] - 10 = 0
        //  :    +
        //  2 × [?] = 12
        //  =    =
        //  5   16
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 10, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['*']],
        col_ops: [['/'], ['+']],
        row_results: [0, 12],
        col_results: [5, 16],
        answers: {"0_0": 10, "1_1": 6}
    },
    {
        // Q3. [2x2, 2 blanks]
        // 20 - [?] = 0
        //  +    +
        // 13 × [?] = 39
        //  =    =
        // 33   23
        rows: 2,
        cols: 2,
        grid: [
            [{value: 20, blank: false}, {value: null, blank: true}],
            [{value: 13, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['*']],
        col_ops: [['+'], ['+']],
        row_results: [0, 39],
        col_results: [33, 23],
        answers: {"0_1": 20, "1_1": 3}
    },
    {
        // Q4. [2x2, 2 blanks]
        // [?] + 10 = 13
        //  +    +
        // 20 + [?] = 36
        //  =    =
        // 23   26
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 10, blank: false}],
            [{value: 20, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['+'], ['+']],
        row_results: [13, 36],
        col_results: [23, 26],
        answers: {"0_0": 3, "1_1": 16}
    },
    {
        // Q5. [2x2, 2 blanks]
        // [?] +  5 = 15
        //  +    +
        //  8 + [?] = 23
        //  =    =
        // 18   20
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 5, blank: false}],
            [{value: 8, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['+'], ['+']],
        row_results: [15, 23],
        col_results: [18, 20],
        answers: {"0_0": 10, "1_1": 15}
    },
    {
        // Q6. [2x2, 2 blanks]
        // [?] + [?] = 23
        //  -    ×
        // 12 +  6 = 18
        //  =    =
        //  4   42
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}],
            [{value: 12, blank: false}, {value: 6, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['-'], ['*']],
        row_results: [23, 18],
        col_results: [4, 42],
        answers: {"0_0": 16, "0_1": 7}
    },
    {
        // Q7. [2x2, 2 blanks]
        // [?] :  1 = 11
        //  ×    +
        //  1 + [?] = 5
        //  =    =
        // 11    5
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 1, blank: false}],
            [{value: 1, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['/'], ['+']],
        col_ops: [['*'], ['+']],
        row_results: [11, 5],
        col_results: [11, 5],
        answers: {"0_0": 11, "1_1": 4}
    },
    {
        // Q8. [2x2, 2 blanks]
        // [?] + 17 = 21
        //  ×    ×
        //  9 × [?] = 9
        //  =    =
        // 36   17
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 17, blank: false}],
            [{value: 9, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['*']],
        col_ops: [['*'], ['*']],
        row_results: [21, 9],
        col_results: [36, 17],
        answers: {"0_0": 4, "1_1": 1}
    },
    {
        // Q9. [2x3, 4 blanks]
        // 10 - [?] × [?] = 27
        //  -    ×    ×
        // [?] × [?] ×  1 = 45
        //  =    =    =
        //  1    5    3
        rows: 2,
        cols: 3,
        grid: [
            [{value: 10, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['-', '*'], ['*', '*']],
        col_ops: [['-'], ['*'], ['*']],
        row_results: [27, 45],
        col_results: [1, 5, 3],
        answers: {"0_1": 1, "0_2": 3, "1_0": 9, "1_1": 5}
    },
    {
        // Q10. [2x3, 3 blanks]
        // [?] - [?] : [?] = 4
        //  +    ×    +
        // 13 -  9 -  1 = 3
        //  =    =    =
        // 19   18    2
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 13, blank: false}, {value: 9, blank: false}, {value: 1, blank: false}]
        ],
        row_ops: [['-', '/'], ['-', '-']],
        col_ops: [['+'], ['*'], ['+']],
        row_results: [4, 3],
        col_results: [19, 18, 2],
        answers: {"0_0": 6, "0_1": 2, "0_2": 1}
    },
    {
        // Q11. [2x3, 3 blanks]
        // [?] ×  1 - [?] = 2
        //  ×    ×    +
        //  4 ×  7 - [?] = 20
        //  =    =    =
        // 20    7   11
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 1, blank: false}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: 7, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*', '-'], ['*', '-']],
        col_ops: [['*'], ['*'], ['+']],
        row_results: [2, 20],
        col_results: [20, 7, 11],
        answers: {"0_0": 5, "0_2": 3, "1_2": 8}
    },
    {
        // Q12. [2x3, 4 blanks]
        // [?] +  7 - [?] = 9
        //  -    ×    +
        //  6 × [?] : [?] = 18
        //  =    =    =
        //  5   21   10
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 7, blank: false}, {value: null, blank: true}],
            [{value: 6, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['*', '/']],
        col_ops: [['-'], ['*'], ['+']],
        row_results: [9, 18],
        col_results: [5, 21, 10],
        answers: {"0_0": 11, "0_2": 9, "1_1": 3, "1_2": 1}
    },
    {
        // Q13. [2x3, 4 blanks]
        // [?] + [?] - [?] = 3
        //  +    +    +
        // 12 + [?] ×  2 = 38
        //  =    =    =
        // 15   14    9
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 12, blank: false}, {value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '*']],
        col_ops: [['+'], ['+'], ['+']],
        row_results: [3, 38],
        col_results: [15, 14, 9],
        answers: {"0_0": 3, "0_1": 7, "0_2": 7, "1_1": 7}
    },
    {
        // Q14. [2x3, 3 blanks]
        // 13 : [?] -  7 = 6
        //  -    ×    +
        //  2 + [?] : [?] = 2
        //  =    =    =
        // 11   10   13
        rows: 2,
        cols: 3,
        grid: [
            [{value: 13, blank: false}, {value: null, blank: true}, {value: 7, blank: false}],
            [{value: 2, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['/', '-'], ['+', '/']],
        col_ops: [['-'], ['*'], ['+']],
        row_results: [6, 2],
        col_results: [11, 10, 13],
        answers: {"0_1": 1, "1_1": 10, "1_2": 6}
    },
    {
        // Q15. [2x3, 4 blanks]
        // [?] + [?] -  6 = 8
        //  +    -    +
        // 10 × [?] + [?] = 24
        //  =    =    =
        // 14    9   20
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 6, blank: false}],
            [{value: 10, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['*', '+']],
        col_ops: [['+'], ['-'], ['+']],
        row_results: [8, 24],
        col_results: [14, 9, 20],
        answers: {"0_0": 4, "0_1": 10, "1_1": 1, "1_2": 14}
    },
    {
        // Q16. [2x3, 4 blanks]
        // [?] × [?] : [?] = 7
        //  -    +    -
        //  3 × 15 - [?] = 33
        //  =    =    =
        //  4   27    0
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: 15, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*', '/'], ['*', '-']],
        col_ops: [['-'], ['+'], ['-']],
        row_results: [7, 33],
        col_results: [4, 27, 0],
        answers: {"0_0": 7, "0_1": 12, "0_2": 12, "1_2": 12}
    },
    {
        // Q17. [3x3, 6 blanks]
        // [?] : [?] + [?] = 12
        //  ×    :    +
        //  9 - [?] -  6 = 0
        //  +    ×    +
        // [?] + 12 + [?] = 23
        //  =    =    =
        //  5   12   24
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 9, blank: false}, {value: null, blank: true}, {value: 6, blank: false}],
            [{value: null, blank: true}, {value: 12, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['/', '+'], ['-', '-'], ['+', '+']],
        col_ops: [['*', '+'], ['/', '*'], ['+', '+']],
        row_results: [12, 0, 23],
        col_results: [5, 12, 24],
        answers: {"0_0": 0, "0_1": 3, "0_2": 12, "1_1": 3, "2_0": 5, "2_2": 6}
    },
    {
        // Q18. [3x3, 5 blanks]
        // [?] +  1 × [?] = 24
        //  +    ×    +
        // 10 + [?] + [?] = 25
        //  +    ×    :
        //  6 +  8 - [?] = 10
        //  =    =    =
        // 23   48    3
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 1, blank: false}, {value: null, blank: true}],
            [{value: 10, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 6, blank: false}, {value: 8, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '*'], ['+', '+'], ['+', '-']],
        col_ops: [['+', '+'], ['*', '*'], ['+', '/']],
        row_results: [24, 25, 10],
        col_results: [23, 48, 3],
        answers: {"0_0": 7, "0_2": 3, "1_1": 6, "1_2": 9, "2_2": 4}
    },
    {
        // Q19. [3x3, 6 blanks]
        //  3 +  2 + [?] = 12
        //  ×    ×    -
        // [?] + [?] - [?] = 17
        //  +    -    +
        //  3 + [?] - [?] = 2
        //  =    =    =
        // 30    9   15
        rows: 3,
        cols: 3,
        grid: [
            [{value: 3, blank: false}, {value: 2, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '+'], ['+', '-'], ['+', '-']],
        col_ops: [['*', '+'], ['*', '-'], ['-', '+']],
        row_results: [12, 17, 2],
        col_results: [30, 9, 15],
        answers: {"0_2": 7, "1_0": 9, "1_1": 8, "1_2": 0, "2_1": 7, "2_2": 8}
    },
    {
        // Q20. [3x3, 6 blanks]
        // [?] + [?] - [?] = 7
        //  ×    +    ×
        //  1 + [?] + [?] = 8
        //  +    -    +
        //  4 × [?] +  4 = 4
        //  =    =    =
        //  6   11   34
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 1, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: 4, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '+'], ['*', '+']],
        col_ops: [['*', '+'], ['+', '-'], ['*', '+']],
        row_results: [7, 8, 4],
        col_results: [6, 11, 34],
        answers: {"0_0": 2, "0_1": 10, "0_2": 5, "1_1": 1, "1_2": 6, "2_1": 0}
    }
];
