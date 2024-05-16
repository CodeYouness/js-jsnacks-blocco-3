// Dare la possibilità di inserire due parole.
//Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
//Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const firstWord = prompt('dimmi una parola')
const secondWord = prompt('dimmi un altra parola')

function result(firstWord, secondWord) {
    if (firstWord.length < secondWord.length) {
        console.log(secondWord)
    } else if (firstWord.length > secondWord.length) {
        console.log(firstWord)
    } else {
        console.log(firstWord, secondWord)
    }
}