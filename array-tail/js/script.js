const userNumber = Number.parseInt(prompt('give me a number'));
const numberContainer = []

for (let i = 0; i < userNumber; i++) {
    const casualNumber = Math.floor(Math.random() * 100) + 1;
    numberContainer.push(casualNumber)
}

console.log(numberContainer)