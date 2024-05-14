const fruit = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
fruit.push('pesca')

for (let i = 0; i <= fruit.length; i++) {

    if (fruit[i] === 'cocomero') {
        console.log("Trovato! Devo solo preparare il cocktail.")
        break;
    } else if (i === fruit.length) {
        console.log("Oh no, devo uscire a comprare il cocomero!")
    }

}