/*
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.
*/

let palla = {
    ballName: 'palla',
    weight: 10
}

const userWeight = prompt('what\s the weight of the ball?');

palla.weight = Number(userWeight);

console.log(palla)