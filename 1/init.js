const fs = require('node:fs')

const data = fs.readFileSync('./input.txt', 'utf-8')
const lines = data.trim().split("\n")

const left = []
const right = []
const diff = []

let totalDist = 0
let totalSimilarity = 0

//Split the line into 2 numbers and add to respective arrays
for (const line of lines) {
    const [num1, num2] = line.trim().split(/\s+/).map(Number)
    left.push(num1)
    right.push(num2)
}

//Sorting arrays
left.sort((a, b) => { return a - b })
right.sort((a, b) => { return a - b })

//Methods
const calculateDifference = () => {
    for (let i = 0; i < left.length; i++) {
        let dist = Math.abs(left[i] - right[i])
        totalDist += dist
    }

    console.log(totalDist)
}

const calcualteSimilarity = () => {
    for (let i = 0; i < left.length; i++) {
        let occurences = 0

        for (let j = 0; j < right.length; j++) {
            if (right[j] == left[i]) {
                occurences++
            }
        }

        totalSimilarity += (left[i] * occurences)
    }

    console.log(totalSimilarity)
}

