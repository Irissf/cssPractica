//Modo oscuro
const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

//necesitamos escuchar ese click que nos indica que cambia el modo
toggleTheme.addEventListener('click',()=>{
    //al escuchar el click, le cambiamos la clase al body
    document.body.classList.toggle('dark');
    /*toggle hace una especie de interruptor de si tiene o no tiene la clase
    si no la tiene, se la pone, y si la tiene, se la quita
    */

    // //para evitar error Esto detiene la función, si los datos aún no existen.https://stackoverflow.com/questions/68959632/typeerror-cannot-read-properties-of-undefined-reading-id
    // if(this.item === undefined) {return}
    
    var luna =  toggleIcon.src.includes('moon.svg');
    
    if (luna) {
        console.log("entro:")
        toggleIcon.src = './resources/icons/sun.svg';
        toggleText.textContent = 'Modo Claro';
    }else{
        toggleIcon.src = './resources/icons/moon.svg';
        toggleText.textContent = 'Modo Oscuro';
    }
})