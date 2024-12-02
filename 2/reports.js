const fs = require('node:fs')

const data = fs.readFileSync('./input.txt', 'utf-8')
const lines = data.trim().split("\n")

let safeCount = 0

const isSafe = (levels) => {
    let increasing = true
    let decreasing = true


    for (let i = 1; i < levels.length; i++) {
        const diff = levels[i] - levels[i - 1]

        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            return false
        }

        if (diff < 0)
            increasing = false

        if (diff > 0)
            decreasing = false
    }

    return increasing || decreasing
}

//Split the line into 2 numbers and add to respective arrays
for (const line of lines) {
    let safe = true
    let canBeSafe = false

    //Trim the spaces and convert to numbers
    const levels = line.trim().split(/\s+/).map(Number)

    if (isSafe(levels)) {
        safeCount++
        continue
    }

    for (let i = 0; i < levels.length; i++) {
        //remove index i from each level and check if it would be safe w/o the current number
        const updatedLevels = levels.slice(0, i).concat(levels.slice(i + 1))
        if (isSafe(updatedLevels)) {
            canBeSafe = true
            break
        }
    }


    if (canBeSafe) {
        safeCount++
    }

}

console.log("Report Safe Count: ", safeCount)



