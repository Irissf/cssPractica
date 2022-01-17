const input = document.getElementById("input");
const addBtn = document.getElementById("btn");
const ul = document.getElementById("ul");
const empty = document.getElementById("empty");

addBtn.addEventListener("click",(event) => {
    //como vemos se recarga la pagina, pues al dar al botón manda el formulario
    //con la siguiente instrucción lo evitamos
    event.preventDefault();

    var text = input.value;

    //vemos que contenga texto
    if(text !== ''){
        console.log(text);
        //creamos el li
        var li = document.createElement('li');
        var p = document.createElement('p');
    
        //le metemos el texto al p
        p.textContent = text;
    
        //metemos p a li y li a ul
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
    
        //cuando añadimos tarea se borra el imput
        input.value = "";
    
        //ocultar empty cuando no lo necesitamos
        empty.style.display = "none";
    }
    
  
});

function addDeleteBtn() {
    var deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn--delete"; //le ponemos una clase

    deleteBtn.addEventListener('click', (event)=>{
        //cogemos al papá del botón, que es el li
        var item = event.target.parentElement; 
        //y lo eliminamos del ul
        ul.removeChild(item);

        //vemos que si no hay elementos, ponga el empty de nuevo
        var items = document.querySelectorAll('li');
        if(items.length === 0){
            empty.style.display = "block";
        }
    });

    return deleteBtn;
}
