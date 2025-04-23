class Area {//area class
    #div //property letrehozása

    get div() {//getter a propertyhoz
        return this.#div;//visszaadja a propertyt
    }


    constructor(ClassName) {//osztály neve
        let divcontainer = document.querySelector('.containeroop');//lekérdezi a container osztályú elemet
        if (!divcontainer) {//ha nem létezik
            divcontainer = document.createElement('div');//létrehoz egy divet
            divcontainer.className = 'containeroop';//beállítja az osztálynevet
            document.body.appendChild(divcontainer);//hozzáadja a bodyhoz
        }
        this.#div = document.createElement('div');//létrehoz egy divet
        this.#div.className = ClassName;//beállítja az osztálynevet
        divcontainer.appendChild(this.#div);//hozzáadja a divcontainerhez
    }
}

class Table extends Area {//table class
    constructor(cssClass) {//osztály neve
        super(cssClass);//hívja a szülő osztály konstruktorát
        const table = document.createElement('table');//létrehoz egy táblázatot
        this.div.appendChild(table);//hozzáadja a divhez
        const tablehead = document.createElement('thead');//létrehoz egy thead elemet
        table.appendChild(tablehead);//hozzáadja a táblázathoz
        const fejlecsor = document.createElement('tr');//létrehoz egy tr elemet
        tablehead.appendChild(fejlecsor);//hozzáadja a theadhez
        const fejleccella = ['szerzo', 'mufaj', 'cimm'];//létrehoz egy tömböt a fejléc celláinak
        for (const cellatartalom of fejleccella) {//végigmegy a cellatartalmon
            const thcella = document.createElement('th');//létrehoz egy th elemet
            thcella.innerText = cellatartalom;//beállítja a cella tartalmát
            fejlecsor.appendChild(thcella);//hozzáadja a trhez
        }
        const tbody = document.createElement('tbody');//létrehoz egy tbody elemet
        table.appendChild(tbody);//hozzáadja a táblázathoz
    }
}

