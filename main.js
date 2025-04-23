const makediv =(className)=>{//függvény ami az osztálynevéből létrehoz egy divet
    const div = document.createElement('div');// létrehoz egy divet
    div.className = className;// beállítja az osztálynevet
    return div;// visszaadja a divet
}
const divcontainer = makediv('container');// létrehoz egy divet a container osztállyal
document.body.appendChild(divcontainer);// hozzáadja a bodyhoz
const asztaldiv = makediv('asztal');// létrehoz egy divet az asztal osztállyal
const tablesima = document.createElement('table');// létrehoz egy táblázatot
asztaldiv.appendChild(tablesima);// hozzáadja a divhez
const tablehead = document.createElement('thead');// létrehoz egy thead elemet
tablesima.appendChild(tablehead);// hozzáadja a táblázathoz
const fejlecsor = document.createElement('tr');// létrehoz egy tr elemet
tablehead.appendChild(fejlecsor);// hozzáadja a theadhez
const fejleccella = ['szerzo','mufaj','cimm'];// létrehoz egy tömböt a fejléc celláinak
for(const cellatartalom of fejleccella){// végigmegy a cellatartalmon
    const thcella = document.createElement('th');// létrehoz egy th elemet
    thcella.innerHTML = cellatartalom;// beállítja a cella tartalmát
    fejlecsor.appendChild(thcella);// hozzáadja a trhez
}
const tablebody = document.createElement('tbody');// létrehoz egy tbody elemet
tablesima.appendChild(tablebody);// hozzáadja a táblázathoz


const formdiv = makediv('form');// létrehoz egy divet a form osztállyal 
divcontainer.appendChild(asztaldiv);// hozzáadja a divcontainerhez  
