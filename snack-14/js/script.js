//Chiedi all'utente un numero di secondi da attendere
//e fai partire un timer da quel momento a zero secondi, interrompendo il timer

const userSecond = Number.parseInt(prompt('define your timer'), 10)

const startTimer = setInterval(timer, 1000, userSecond);

function timer(usertime) {
    usertime--;
    console.log(usertime)
    if (usertime === 0) {
        clearInterval(startTimer)
    }
}