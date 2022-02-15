var center = document.getElementById('center');
center.addEventListener("click", function() {
    var linea1 = document.getElementById('linea1');
    var linea2 = document.getElementById('linea2');
    var linea3 = document.getElementById('linea3');
    
    linea1.style.animation = "juntarLineas,rotar";
    linea1.style.animationDuration = "5s,5s";
    linea1.style.animationDelay = "0s,5s";
    linea1.style.animationIterationCount = "1,1";
    linea1.style.animationFillMode = " forwards,forwards";

    linea2.style.animation = "juntarLineas,rotar";
    linea2.style.animationDuration = "5s,5s";
    linea2.style.animationDelay = "0s,5s";
    linea2.style.animationIterationCount = "1,1";
    linea2.style.animationFillMode = " forwards,forwards";

    linea3.style.animation = "juntarLineas,rotarcontrario";
    linea3.style.animationDuration = "5s,5s";
    linea3.style.animationDelay = "0s,5s";
    linea3.style.animationIterationCount = "1,1";
    linea3.style.animationFillMode = " forwards,forwards";
});