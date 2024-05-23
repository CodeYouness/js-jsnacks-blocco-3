// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.
const automobili = [{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'benzina'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'benzina'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'benzina'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'diesel'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'diesel'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'diesel'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'diesel'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'gpl'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'gpl'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'gpl'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'gpl'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'elettrico'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'elettrico'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'metano'
},
{
    marca: 'mercedes',
    modello: 'supercar',
    alimentazione: 'metano'
}];


const benzina = automobili.filter((auto) => {
    return (auto.alimentazione === 'benzina')
})

const diesel = automobili.filter((auto) => {
    return (auto.alimentazione === 'diesel')
})





console.log(benzina, diesel)




