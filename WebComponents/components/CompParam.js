class CompParam extends HTMLElement{

    //constructor
    constructor(){
        super();
 
        this.nombre = null;
    }

    //se llama tan pronto el componente entra al doom
    connectedCallback(){
        this.innerHTML=`
            <h1>Hola ${this.nombre}</h1>
        `;
    }

    //se dispara cuando se modifica el valor de un atributo
    attributeChangedCallback(nombre, viejoValor, nuevoValor){
        //si el atributo que ha cambiado es "nombre"
        if(nombre === "nombre"){
            this.nombre = nuevoValor;
        }
    }

    //ponemos los atributos de los que nos queremos enterar del cambio
    static get observedAttributes(){
        return['nombre'];
    }
}

window.customElements.define("saludo-param",CompParam);