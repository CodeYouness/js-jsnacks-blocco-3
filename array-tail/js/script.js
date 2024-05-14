const userNumber = Number.parseInt(prompt('how many number to generate inside the array?'));
const lastUserNumber = Number.parseInt(prompt('how many numbers you want to see of your array?'));
const numberContainer = []
const lastFiveNumber = []
for (let i = 0; i < userNumber; i++) {
    const casualNumber = Math.floor(Math.random() * 100) + 1;
    numberContainer.push(casualNumber);
    if ((userNumber - i) <= lastUserNumber) {
        lastFiveNumber.push(casualNumber)
    }
}

console.log(numberContainer, lastFiveNumber)