// Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

function invertNumber(number) {
    let invertedNumber = []
    let numberString = number.toString();
    for (let i = 0; i < numberString.length; i++) {
        invertedNumber.push(numberString[i])
        console.log(numberString[i])
    }
    return invertedNumber
}

const userNumber = Number.parseInt(prompt('insert your number'), 10);
console.log(invertNumber(userNumber))
