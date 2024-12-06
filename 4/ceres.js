const fs = require('node:fs')

const data = fs.readFileSync('./input.txt', 'utf-8')
const puzzle = data.trim().split("\n")

//Turn into 2D Array
const grid = puzzle.map(row => row.trim().split(""))
const rows = grid.length
const columns = grid[0].length

const word = "XMAS"
const directions = [
    [0, 1], //Right
    [0, -1], //Left 
    [-1, 0], //Up
    [1, 0], //Down 
    [1, 1], //Down Right
    [1, -1], //Down Left 
    [-1, 1], //Up Right
    [-1, -1], //Up Left
]

const wordSearch = (row, col, x, y) => {
    for (let i = 0; i < word.length; i++) {
        //Word is length of 4 so it checks up to 4 places from the row/column
        //The x and y offsets are to allow for checking the directions listed
        const r = row + i * x
        const c = col + i * y

        //Check for boundaries and character mismatches
        if (r < 0 || r >= rows || c < 0 || c >= columns || grid[r][c] != word[i])
            return false
    }

    return true
}

const wordCount = () => {
    let count = 0
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            //Check every direction for each iteration
            for (const [x, y] of directions) {
                if (wordSearch(row, col, x, y))
                    count++
            }
        }
    }

    console.log(word, "COUNT: ", count)
}


