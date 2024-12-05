const fs = require('node:fs')

const data = fs.readFileSync('./input.txt', 'utf-8')
const regex = /(mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\))/g

let match
let sum = 0
let enabled = true

const getEnabledResults = () => {
    while ((match = regex.exec(data)) !== null) {
        const command = match[0]

        if (command == "do()") {
            enabled = true
        } else if (command == "don't()") {
            enabled = false
        }

        if (command.startsWith("mul(") && enabled) {
            const x = parseInt(match[2])
            const y = parseInt(match[3])
            sum += (x * y)
        }
    }

    console.log("Total Enabled Sum:", sum)
}

const getResults = () => {
    while ((match = regex.exec(data)) !== null) {
        const x = parseInt(match[1])
        const y = parseInt(match[2])
        sum += (x * y)
    }

    console.log("Total Sum:", sum)
}

getEnabledResults()