// Math Grid Questions Set 8 — answer key
// grid: row-major array. blank:true cells need user input.
// row_ops[r][i]: operator between col i and col i+1 in row r
// col_ops[c][i]: operator between row i and row i+1 in col c
// answers: {"row_col": value} using 0-based indices
const MATH_QUESTIONS = [
    {
        // Q1. [2x2, 2 blanks]
        //  8 -  6 = 2
        //  :    ×
        // [?] + [?] = 10
        //  =    =
        //  1   12
        rows: 2,
        cols: 2,
        grid: [
            [{value: 8, blank: false}, {value: 6, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['/'], ['*']],
        row_results: [2, 10],
        col_results: [1, 12],
        answers: {"1_0": 8, "1_1": 2}
    },
    {
        // Q2. [2x2, 2 blanks]
        // 14 + [?] = 19
        //  +    +
        // [?] +  2 = 3
        //  =    =
        // 15    7
        rows: 2,
        cols: 2,
        grid: [
            [{value: 14, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['+'], ['+']],
        row_results: [19, 3],
        col_results: [15, 7],
        answers: {"0_1": 5, "1_0": 1}
    },
    {
        // Q3. [2x2, 2 blanks]
        // 20 : [?] = 10
        //  +    +
        // 20 : [?] = 4
        //  =    =
        // 40    7
        rows: 2,
        cols: 2,
        grid: [
            [{value: 20, blank: false}, {value: null, blank: true}],
            [{value: 20, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['/'], ['/']],
        col_ops: [['+'], ['+']],
        row_results: [10, 4],
        col_results: [40, 7],
        answers: {"0_1": 2, "1_1": 5}
    },
    {
        // Q4. [2x2, 2 blanks]
        //  0 + [?] = 11
        //  :    -
        // [?] -  2 = 12
        //  =    =
        //  0    9
        rows: 2,
        cols: 2,
        grid: [
            [{value: 0, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['+'], ['-']],
        col_ops: [['/'], ['-']],
        row_results: [11, 12],
        col_results: [0, 9],
        answers: {"0_1": 11, "1_0": 14}
    },
    {
        // Q5. [2x2, 2 blanks]
        // [?] +  3 = 21
        //  +    ×
        //  4 × [?] = 40
        //  =    =
        // 22   30
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 3, blank: false}],
            [{value: 4, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['*']],
        col_ops: [['+'], ['*']],
        row_results: [21, 40],
        col_results: [22, 30],
        answers: {"0_0": 18, "1_1": 10}
    },
    {
        // Q6. [2x2, 2 blanks]
        //  6 + 19 = 25
        //  -    +
        // [?] + [?] = 5
        //  =    =
        //  5   23
        rows: 2,
        cols: 2,
        grid: [
            [{value: 6, blank: false}, {value: 19, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['+']],
        col_ops: [['-'], ['+']],
        row_results: [25, 5],
        col_results: [5, 23],
        answers: {"1_0": 1, "1_1": 4}
    },
    {
        // Q7. [2x2, 2 blanks]
        // [?] ×  6 = 42
        //  +    :
        // [?] ×  1 = 9
        //  =    =
        // 16    6
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 6, blank: false}],
            [{value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['*'], ['*']],
        col_ops: [['+'], ['/']],
        row_results: [42, 9],
        col_results: [16, 6],
        answers: {"0_0": 7, "1_0": 9}
    },
    {
        // Q8. [2x2, 2 blanks]
        // [?] × 15 = 30
        //  +    :
        // [?] -  1 = 12
        //  =    =
        // 15   15
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 15, blank: false}],
            [{value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['*'], ['-']],
        col_ops: [['+'], ['/']],
        row_results: [30, 12],
        col_results: [15, 15],
        answers: {"0_0": 2, "1_0": 13}
    },
    {
        // Q9. [2x3, 3 blanks]
        // [?] ×  7 : [?] = 6
        //  ×    ×    :
        //  1 + [?] ×  7 = 21
        //  =    =    =
        // 12   14    2
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 7, blank: false}, {value: null, blank: true}],
            [{value: 1, blank: false}, {value: null, blank: true}, {value: 7, blank: false}]
        ],
        row_ops: [['*', '/'], ['+', '*']],
        col_ops: [['*'], ['*'], ['/']],
        row_results: [6, 21],
        col_results: [12, 14, 2],
        answers: {"0_0": 12, "0_2": 14, "1_1": 2}
    },
    {
        // Q10. [2x3, 3 blanks]
        // [?] × [?] -  3 = 2
        //  +    +    ×
        // [?] + 11 -  7 = 15
        //  =    =    =
        // 12   16   21
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 3, blank: false}],
            [{value: null, blank: true}, {value: 11, blank: false}, {value: 7, blank: false}]
        ],
        row_ops: [['*', '-'], ['+', '-']],
        col_ops: [['+'], ['+'], ['*']],
        row_results: [2, 15],
        col_results: [12, 16, 21],
        answers: {"0_0": 1, "0_1": 5, "1_0": 11}
    },
    {
        // Q11. [2x3, 3 blanks]
        //  2 + [?] -  2 = 6
        //  ×    +    +
        // [?] + [?] +  2 = 27
        //  =    =    =
        // 28   17    4
        rows: 2,
        cols: 3,
        grid: [
            [{value: 2, blank: false}, {value: null, blank: true}, {value: 2, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '+']],
        col_ops: [['*'], ['+'], ['+']],
        row_results: [6, 27],
        col_results: [28, 17, 4],
        answers: {"0_1": 6, "1_0": 14, "1_1": 11}
    },
    {
        // Q12. [2x3, 3 blanks]
        // 15 - [?] +  2 = 6
        //  -    -    ×
        // [?] ×  5 - [?] = 43
        //  =    =    =
        //  4    6   24
        rows: 2,
        cols: 3,
        grid: [
            [{value: 15, blank: false}, {value: null, blank: true}, {value: 2, blank: false}],
            [{value: null, blank: true}, {value: 5, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-', '+'], ['*', '-']],
        col_ops: [['-'], ['-'], ['*']],
        row_results: [6, 43],
        col_results: [4, 6, 24],
        answers: {"0_1": 11, "1_0": 11, "1_2": 12}
    },
    {
        // Q13. [2x3, 3 blanks]
        // [?] + [?] -  1 = 5
        //  +    :    ×
        // 11 ×  1 + [?] = 25
        //  =    =    =
        // 16    1   14
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 1, blank: false}],
            [{value: 11, blank: false}, {value: 1, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '-'], ['*', '+']],
        col_ops: [['+'], ['/'], ['*']],
        row_results: [5, 25],
        col_results: [16, 1, 14],
        answers: {"0_0": 5, "0_1": 1, "1_2": 14}
    },
    {
        // Q14. [2x3, 4 blanks]
        //  9 × [?] : [?] = 18
        //  +    +    +
        // 10 + [?] + [?] = 35
        //  =    =    =
        // 19   14   17
        rows: 2,
        cols: 3,
        grid: [
            [{value: 9, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 10, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['*', '/'], ['+', '+']],
        col_ops: [['+'], ['+'], ['+']],
        row_results: [18, 35],
        col_results: [19, 14, 17],
        answers: {"0_1": 4, "0_2": 2, "1_1": 10, "1_2": 15}
    },
    {
        // Q15. [2x3, 3 blanks]
        // [?] + 15 +  5 = 30
        //  :    -    -
        //  5 + [?] + [?] = 24
        //  =    =    =
        //  2    1    0
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 15, blank: false}, {value: 5, blank: false}],
            [{value: 5, blank: false}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '+'], ['+', '+']],
        col_ops: [['/'], ['-'], ['-']],
        row_results: [30, 24],
        col_results: [2, 1, 0],
        answers: {"0_0": 10, "1_1": 14, "1_2": 5}
    },
    {
        // Q16. [2x3, 3 blanks]
        // [?] +  2 + [?] = 25
        //  -    ×    -
        //  4 + [?] +  7 = 24
        //  =    =    =
        //  4   26    8
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 2, blank: false}, {value: null, blank: true}],
            [{value: 4, blank: false}, {value: null, blank: true}, {value: 7, blank: false}]
        ],
        row_ops: [['+', '+'], ['+', '+']],
        col_ops: [['-'], ['*'], ['-']],
        row_results: [25, 24],
        col_results: [4, 26, 8],
        answers: {"0_0": 8, "0_2": 15, "1_1": 13}
    },
    {
        // Q17. [3x3, 5 blanks]
        // [?] + [?] - [?] = 4
        //  ×    -    -
        //  6 +  0 -  5 = 1
        //  +    ×    +
        // [?] + [?] -  4 = 2
        //  =    =    =
        // 14   28    4
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 6, blank: false}, {value: 0, blank: false}, {value: 5, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 4, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '-'], ['+', '-']],
        col_ops: [['*', '+'], ['-', '*'], ['-', '+']],
        row_results: [4, 1, 2],
        col_results: [14, 28, 4],
        answers: {"0_0": 2, "0_1": 7, "0_2": 5, "2_0": 2, "2_1": 4}
    },
    {
        // Q18. [3x3, 5 blanks]
        // [?] :  1 + [?] = 8
        //  ×    ×    ×
        // [?] : [?] × [?] = 12
        //  ×    :    +
        // 12 :  3 -  1 = 3
        //  =    =    =
        //  0    1   25
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 1, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 12, blank: false}, {value: 3, blank: false}, {value: 1, blank: false}]
        ],
        row_ops: [['/', '+'], ['/', '*'], ['/', '-']],
        col_ops: [['*', '*'], ['*', '/'], ['*', '+']],
        row_results: [8, 12, 3],
        col_results: [0, 1, 25],
        answers: {"0_0": 0, "0_2": 8, "1_0": 12, "1_1": 3, "1_2": 3}
    },
    {
        // Q19. [3x3, 5 blanks]
        // 12 : [?] +  0 = 3
        //  :    ×    ×
        // [?] × [?] + [?] = 36
        //  +    :    ×
        //  3 +  4 - [?] = 4
        //  =    =    =
        //  6    8    0
        rows: 3,
        cols: 3,
        grid: [
            [{value: 12, blank: false}, {value: null, blank: true}, {value: 0, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: 4, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['/', '+'], ['*', '+'], ['+', '-']],
        col_ops: [['/', '+'], ['*', '/'], ['*', '*']],
        row_results: [3, 36, 4],
        col_results: [6, 8, 0],
        answers: {"0_1": 4, "1_0": 4, "1_1": 8, "1_2": 4, "2_2": 3}
    },
    {
        // Q20. [3x3, 5 blanks]
        //  3 × [?] : 12 = 1
        //  ×    -    +
        // [?] × [?] - [?] = 20
        //  :    :    -
        //  6 +  8 : [?] = 14
        //  =    =    =
        //  3    0   15
        rows: 3,
        cols: 3,
        grid: [
            [{value: 3, blank: false}, {value: null, blank: true}, {value: 12, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 6, blank: false}, {value: 8, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*', '/'], ['*', '-'], ['+', '/']],
        col_ops: [['*', '/'], ['-', '/'], ['+', '-']],
        row_results: [1, 20, 14],
        col_results: [3, 0, 15],
        answers: {"0_1": 4, "1_0": 6, "1_1": 4, "1_2": 4, "2_2": 1}
    }
];
