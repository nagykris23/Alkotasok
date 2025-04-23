const makediv =(className)=>{//függvény ami az osztálynevéből létrehoz egy divet
    const div = document.createElement('div');// létrehoz egy divet
    div.className = className;// beállítja az osztálynevet
    return div;// visszaadja a divet
}
const divcontainer = makediv('container');// létrehoz egy divet a container osztállyal
document.body.appendChild(divcontainer);// hozzáadja a bodyhoz
const asztaldiv = makediv('asztal');// létrehoz egy divet az asztal osztállyal
divcontainer.appendChild(asztaldiv);// hozzáadja a divcontainerhez  
const formdiv = makediv('form');// létrehoz egy divet a form osztállyal 
divcontainer.appendChild(formdiv);// hozzáadja a divcontainerhez