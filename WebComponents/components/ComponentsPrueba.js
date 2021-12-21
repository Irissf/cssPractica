class ComponentsPrueba extends HTMLElement{
    //tiene que extender de HTMLElements

    //constructor
    constructor(){
        //importante llamar a super
        super();
        this.saludo = "Hola que tal"
    }

    //se llama tan pronto el componente entra al doom
    connectedCallback(){
        let h2 = document.createElement("h2");
        h2.innerHTML = this.saludo;
        this.appendChild(h2);
    }

    //cuando se quita del doom el elemento
    disconectedCallback(){

    }
}

//para llamar al componente, dos parámetros, el primero, el nombre por el que 
//llamará, y segundo, a la clase que hace referencia
window.customElements.define("saludo-basico",ComponentsPrueba);
//por convección debe tener dos palabras por lo menos separadas con guión