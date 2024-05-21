// Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

function invertNumber(number) {
    const string = number.toString();
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]
    }
    return Number.parseInt(reversedString, 10);
}

const userNumber = Number.parseInt(prompt('insert your number'), 10);
console.log(invertNumber(userNumber))
