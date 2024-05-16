// Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

function invertNumber(number) {


    let invertedNumber = number.reverse()
    return invertedNumber
}

const userNumber = Number.parseInt(prompt('insert your number'), 10);
console.log(invertNumber(userNumber))
