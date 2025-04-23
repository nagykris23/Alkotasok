class Area{//area class
    constructor(ClassName){
        let divcontainer = document.querySelector('.containeroop');//lekérdezi a container osztályú elemet
        if(!divcontainer){//ha nem létezik
            divcontainer = document.createElement('div');//létrehoz egy divet
            divcontainer.className = 'containeroop';//beállítja az osztálynevet
            document.body.appendChild(divcontainer);//hozzáadja a bodyhoz
        }
        const div = document.createElement('div');//létrehoz egy divet
        div.className = ClassName;//beállítja az osztálynevet
        divcontainer.appendChild(div);//hozzáadja a divcontainerhez
    }

}