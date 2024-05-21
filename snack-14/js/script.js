//Chiedi all'utente un numero di secondi da attendere
//e fai partire un timer da quel momento a zero secondi, interrompendo il timer

const userSecond = Number.parseInt(prompt('define your timer'), 10);
let remainingTime = userSecond

const startTimer = setInterval(timer, 1000, userSecond);

function timer() {
    remainingTime--;
    console.log(remainingTime)
    if (remainingTime === 0) {
        clearInterval(startTimer)
    }
}