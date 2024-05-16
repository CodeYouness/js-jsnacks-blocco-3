// Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

function invertNumber(number) {
    let invertedNumber = []
    for (let i = 0; i < number.length; i++) {
        invertedNumber.push(number[i])
        console.log(number[i])
    }
    return invertedNumber
}

const userNumber = Number.parseInt(prompt('insert your number'), 10);
console.log(invertNumber(userNumber))
