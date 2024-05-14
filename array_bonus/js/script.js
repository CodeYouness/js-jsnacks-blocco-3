const firstArray = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
const secondArray = ['pesca', 'cocomero'];
const comparationLenght = Math.abs(firstArray.length - secondArray.length);

for (let i = 0; i < comparationLenght; i++) {
    if (firstArray.length < secondArray.length) {
        firstArray.push('sugo')
    } else if (firstArray.length > secondArray.length) {
        secondArray.push('sughissimo')
    }

}

console.log(firstArray, firstArray.length, secondArray, secondArray.length)