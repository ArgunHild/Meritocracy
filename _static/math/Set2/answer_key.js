// Math Grid Questions Set 2 — answer key
// grid: row-major array. blank:true cells need user input.
// row_ops[r][i]: operator between col i and col i+1 in row r
// col_ops[c][i]: operator between row i and row i+1 in col c
// answers: {"row_col": value} using 0-based indices
const MATH_QUESTIONS = [
    {
        // Q1. [2x2, 2 blanks]
        // [?] + 10 = 28
        //  :    ×
        // [?] -  2 = 4
        //  =    =
        //  3   20
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 10, blank: false}],
            [{value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['+'], ['-']],
        col_ops: [['/'], ['*']],
        row_results: [28, 4],
        col_results: [3, 20],
        answers: {"0_0": 18, "1_0": 6}
    },
    {
        // Q2. [2x2, 2 blanks]
        // [?] +  0 = 8
        //  +    +
        //  6 × [?] = 36
        //  =    =
        // 14    6
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 0, blank: false}],
            [{value: 6, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['*']],
        col_ops: [['+'], ['+']],
        row_results: [8, 36],
        col_results: [14, 6],
        answers: {"0_0": 8, "1_1": 6}
    },
    {
        // Q3. [2x2, 2 blanks]
        // [?] :  4 = 0
        //  ×    :
        // [?] :  2 = 10
        //  =    =
        //  0    2
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 4, blank: false}],
            [{value: null, blank: true}, {value: 2, blank: false}]
        ],
        row_ops: [['/'], ['/']],
        col_ops: [['*'], ['/']],
        row_results: [0, 10],
        col_results: [0, 2],
        answers: {"0_0": 0, "1_0": 20}
    },
    {
        // Q4. [2x2, 2 blanks]
        // [?] + 19 = 37
        //  +    ×
        // 11 - [?] = 10
        //  =    =
        // 29   19
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 19, blank: false}],
            [{value: 11, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['-']],
        col_ops: [['+'], ['*']],
        row_results: [37, 10],
        col_results: [29, 19],
        answers: {"0_0": 18, "1_1": 1}
    },
    {
        // Q5. [2x2, 2 blanks]
        //  4 : [?] = 1
        //  ×    -
        // [?] -  0 = 7
        //  =    =
        // 28    4
        rows: 2,
        cols: 2,
        grid: [
            [{value: 4, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 0, blank: false}]
        ],
        row_ops: [['/'], ['-']],
        col_ops: [['*'], ['-']],
        row_results: [1, 7],
        col_results: [28, 4],
        answers: {"0_1": 4, "1_0": 7}
    },
    {
        // Q6. [2x2, 2 blanks]
        //  9 + [?] = 29
        //  +    +
        // 18 - [?] = 4
        //  =    =
        // 27   34
        rows: 2,
        cols: 2,
        grid: [
            [{value: 9, blank: false}, {value: null, blank: true}],
            [{value: 18, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+'], ['-']],
        col_ops: [['+'], ['+']],
        row_results: [29, 4],
        col_results: [27, 34],
        answers: {"0_1": 20, "1_1": 14}
    },
    {
        // Q7. [2x2, 2 blanks]
        // 17 - [?] = 6
        //  +    +
        //  1 + [?] = 17
        //  =    =
        // 18   27
        rows: 2,
        cols: 2,
        grid: [
            [{value: 17, blank: false}, {value: null, blank: true}],
            [{value: 1, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-'], ['+']],
        col_ops: [['+'], ['+']],
        row_results: [6, 17],
        col_results: [18, 27],
        answers: {"0_1": 11, "1_1": 16}
    },
    {
        // Q8. [2x2, 2 blanks]
        // [?] × 10 = 0
        //  +    ×
        // 20 - [?] = 20
        //  =    =
        // 20    0
        rows: 2,
        cols: 2,
        grid: [
            [{value: null, blank: true}, {value: 10, blank: false}],
            [{value: 20, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['*'], ['-']],
        col_ops: [['+'], ['*']],
        row_results: [0, 20],
        col_results: [20, 0],
        answers: {"0_0": 0, "1_1": 0}
    },
    {
        // Q9. [2x3, 4 blanks]
        // [?] +  2 + [?] = 22
        //  ×    ×    ×
        // [?] ×  7 + [?] = 34
        //  =    =    =
        // 48   14   48
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 2, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 7, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['+', '+'], ['*', '+']],
        col_ops: [['*'], ['*'], ['*']],
        row_results: [22, 34],
        col_results: [48, 14, 48],
        answers: {"0_0": 12, "0_2": 8, "1_0": 4, "1_2": 6}
    },
    {
        // Q10. [2x3, 4 blanks]
        //  3 +  4 + [?] = 14
        //  :    ×    +
        // [?] + [?] : [?] = 12
        //  =    =    =
        //  1   36    8
        rows: 2,
        cols: 3,
        grid: [
            [{value: 3, blank: false}, {value: 4, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '+'], ['+', '/']],
        col_ops: [['/'], ['*'], ['+']],
        row_results: [14, 12],
        col_results: [1, 36, 8],
        answers: {"0_2": 7, "1_0": 3, "1_1": 9, "1_2": 1}
    },
    {
        // Q11. [2x3, 4 blanks]
        // [?] - [?] : [?] = 1
        //  ×    +    :
        //  9 +  5 - [?] = 13
        //  =    =    =
        // 27    7    1
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: 9, blank: false}, {value: 5, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-', '/'], ['+', '-']],
        col_ops: [['*'], ['+'], ['/']],
        row_results: [1, 13],
        col_results: [27, 7, 1],
        answers: {"0_0": 3, "0_1": 2, "0_2": 1, "1_2": 1}
    },
    {
        // Q12. [2x3, 3 blanks]
        // [?] +  4 -  6 = 4
        //  +    +    :
        // [?] - [?] +  1 = 3
        //  =    =    =
        // 19   15    6
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 4, blank: false}, {value: 6, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 1, blank: false}]
        ],
        row_ops: [['+', '-'], ['-', '+']],
        col_ops: [['+'], ['+'], ['/']],
        row_results: [4, 3],
        col_results: [19, 15, 6],
        answers: {"0_0": 6, "1_0": 13, "1_1": 11}
    },
    {
        // Q13. [2x3, 4 blanks]
        //  6 × [?] : [?] = 3
        //  +    +    ×
        // [?] + [?] + 12 = 33
        //  =    =    =
        // 21    7   24
        rows: 2,
        cols: 3,
        grid: [
            [{value: 6, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 12, blank: false}]
        ],
        row_ops: [['*', '/'], ['+', '+']],
        col_ops: [['+'], ['+'], ['*']],
        row_results: [3, 33],
        col_results: [21, 7, 24],
        answers: {"0_1": 1, "0_2": 2, "1_0": 15, "1_1": 6}
    },
    {
        // Q14. [2x3, 3 blanks]
        // [?] - [?] :  6 = 1
        //  +    ×    +
        //  9 :  1 + [?] = 11
        //  =    =    =
        // 16    1    8
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: null, blank: true}, {value: 6, blank: false}],
            [{value: 9, blank: false}, {value: 1, blank: false}, {value: null, blank: true}]
        ],
        row_ops: [['-', '/'], ['/', '+']],
        col_ops: [['+'], ['*'], ['+']],
        row_results: [1, 11],
        col_results: [16, 1, 8],
        answers: {"0_0": 7, "0_1": 1, "1_2": 2}
    },
    {
        // Q15. [2x3, 3 blanks]
        // [?] +  5 - [?] = 1
        //  +    +    -
        //  3 - [?] + 11 = 12
        //  =    =    =
        // 10    7    0
        rows: 2,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 5, blank: false}, {value: null, blank: true}],
            [{value: 3, blank: false}, {value: null, blank: true}, {value: 11, blank: false}]
        ],
        row_ops: [['+', '-'], ['-', '+']],
        col_ops: [['+'], ['+'], ['-']],
        row_results: [1, 12],
        col_results: [10, 7, 0],
        answers: {"0_0": 7, "0_2": 11, "1_1": 2}
    },
    {
        // Q16. [2x3, 3 blanks]
        // 13 : [?] : [?] = 1
        //  -    +    +
        // [?] ×  3 +  8 = 11
        //  =    =    =
        // 12    4   21
        rows: 2,
        cols: 3,
        grid: [
            [{value: 13, blank: false}, {value: null, blank: true}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 3, blank: false}, {value: 8, blank: false}]
        ],
        row_ops: [['/', '/'], ['*', '+']],
        col_ops: [['-'], ['+'], ['+']],
        row_results: [1, 11],
        col_results: [12, 4, 21],
        answers: {"0_1": 1, "0_2": 13, "1_0": 1}
    },
    {
        // Q17. [3x3, 6 blanks]
        //  0 + [?] ×  9 = 36
        //  :    -    -
        // [?] ×  3 + [?] = 27
        //  +    ×    -
        // [?] + [?] + [?] = 21
        //  =    =    =
        // 11    6    5
        rows: 3,
        cols: 3,
        grid: [
            [{value: 0, blank: false}, {value: null, blank: true}, {value: 9, blank: false}],
            [{value: null, blank: true}, {value: 3, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['+', '*'], ['*', '+'], ['+', '+']],
        col_ops: [['/', '+'], ['-', '*'], ['-', '-']],
        row_results: [36, 27, 21],
        col_results: [11, 6, 5],
        answers: {"0_1": 4, "1_0": 9, "1_2": 0, "2_0": 11, "2_1": 6, "2_2": 4}
    },
    {
        // Q18. [3x3, 6 blanks]
        //  5 -  5 × [?] = 0
        //  -    ×    ×
        // [?] +  4 + [?] = 9
        //  -    :    -
        // [?] × [?] × [?] = 20
        //  =    =    =
        //  3   10   14
        rows: 3,
        cols: 3,
        grid: [
            [{value: 5, blank: false}, {value: 5, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: 4, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: null, blank: true}]
        ],
        row_ops: [['-', '*'], ['+', '+'], ['*', '*']],
        col_ops: [['-', '-'], ['*', '/'], ['*', '-']],
        row_results: [0, 9, 20],
        col_results: [3, 10, 14],
        answers: {"0_2": 6, "1_0": 1, "1_2": 4, "2_0": 1, "2_1": 2, "2_2": 10}
    },
    {
        // Q19. [3x3, 5 blanks]
        // [?] +  3 - [?] = 0
        //  +    -    ×
        // 11 +  2 + [?] = 13
        //  -    :    +
        // [?] - [?] × 10 = 20
        //  =    =    =
        // 15    1   10
        rows: 3,
        cols: 3,
        grid: [
            [{value: null, blank: true}, {value: 3, blank: false}, {value: null, blank: true}],
            [{value: 11, blank: false}, {value: 2, blank: false}, {value: null, blank: true}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 10, blank: false}]
        ],
        row_ops: [['+', '-'], ['+', '+'], ['-', '*']],
        col_ops: [['+', '-'], ['-', '/'], ['*', '+']],
        row_results: [0, 13, 20],
        col_results: [15, 1, 10],
        answers: {"0_0": 7, "0_2": 10, "1_2": 0, "2_0": 3, "2_1": 1}
    },
    {
        // Q20. [3x3, 5 blanks]
        // 10 - [?] + 11 = 20
        //  -    ×    +
        // [?] + [?] ×  2 = 34
        //  ×    -    +
        // [?] - [?] +  7 = 10
        //  =    =    =
        //  6    9   20
        rows: 3,
        cols: 3,
        grid: [
            [{value: 10, blank: false}, {value: null, blank: true}, {value: 11, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 2, blank: false}],
            [{value: null, blank: true}, {value: null, blank: true}, {value: 7, blank: false}]
        ],
        row_ops: [['-', '+'], ['+', '*'], ['-', '+']],
        col_ops: [['-', '*'], ['*', '-'], ['+', '+']],
        row_results: [20, 34, 10],
        col_results: [6, 9, 20],
        answers: {"0_1": 1, "1_0": 8, "1_1": 9, "2_0": 3, "2_1": 0}
    }
];
