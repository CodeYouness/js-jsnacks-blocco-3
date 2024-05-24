// Un oggetto rappresenta una finestra di un browser e contiene due campi:
// un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:

// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.
const variousTab = [
    {
        tab: ["Facebook", "GitHub", "Gmail"],
        activeTab: 0
    },
    {
        tab: ["Twitter", 'Facebook', "GitHub", "Gmail"],
        activeTab: 3
    },
    {
        tab: ["Instagram", "GitHub", "Gmail"],
        activeTab: 0
    },
    {
        tab: ["Facebook", "Chrome", "Gmail"],
        activeTab: 2
    },
    {
        tab: ["Facebook", "GitHub", "Gmail", "Reddit"],
        activeTab: 3
    },
]
// variousTab.forEach((computer, i) => {
//     if (computer.tab.includes('Facebook')) {

//     }
// })

function remover(...variousTab) {
    variousTab.forEach((computer, i) => {
        if (computer.tab.includes("Facebook")) {
            computer.tab.splice(computer.tab.indexOf("Facebook"), 1)
        }

        console.log(computer)
    })

    // return variousTab
}

const removed = remover(...variousTab)
console.log(removed)
