while (true) {
    var calificacion = prompt("Dame la calificación:");
    if (calificacion === "") {
        alert("ingresa valores");
    }else if (isNaN(calificacion)) {
        alert("Solo se aceptan numeros");
    }else if (calificacion !== null) {
        calificacion = parseInt(calificacion);
        if(calificacion<0){
            alert("Calificación no valida")
        }
        if(calificacion>10){
            alert("Calificación no valida")
        }
        if (calificacion >=0 && calificacion <= 2) {
            alert("Muy deficiente");
        }          
        if (calificacion >= 3 && calificacion <= 4) {
            alert("Insuficiente ");
        }          
        if (calificacion >= 5 && calificacion <= 6) {
            alert("Suficiente ");
        }                
        if (calificacion >= 7 && calificacion <= 8) {
            alert("Notable");
        }          
        if (calificacion >= 9 && calificacion <= 10) {
            alert("Sobresaliente");
        }          
    }
    else {
        break;
    }
}