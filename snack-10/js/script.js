//Crea due array che hanno un numero di elementi diversi. 
//Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const array1 = [1, 2, 3]
const array2 = [1, 2, 3, 4, 5, 6]
let arrayLong
let arrayShort

if (array1.length < array2.length) {
    arrayShort = array1
    arrayLong = array2
} else {
    arrayLong = array1
    arrayShort = array2
}

console.log(array1, array2, arrayShort, arrayLong)

while (arrayShort < arrayLong) {
    let casualNumber = Math.floor(Math.random() * 10) + 1;
    arrayShort.push(casualNumber)
}

console.log(arrayShort, arrayLong)