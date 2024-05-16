// Dare la possibilità di inserire due parole.
//Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
//Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const firstWord = prompt('dimmi una parola')
const secondWord = prompt('dimmi un altra parola')

function result(primaParola, secondaParola) {
    if (primaParola.length < secondaParola.length) {
        console.log(secondaParola)
    } else if (primaParola.length > secondaParola.length) {
        console.log(primaParola)
    } else {
        console.log(primaParola, secondaParola)
    }
}
let risultato = result(firstWord, secondWord)