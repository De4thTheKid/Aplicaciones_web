
function ejercicio1() {

    const numeros = [];

    while (true) {
        const numero = prompt("Ingrese un número (o cancelar para detenerse):");
        const numeroParseado = parseFloat(numero);
        if (numero === "") {
            alert("Debe ingresar un número válido");
        } else if (isNaN(numero)) {
            alert("Solo se aceptan numeros");
        } else if (numero !== null) {
            numeros.push(numeroParseado);
        }
        else {
            break;
        }
    }

    if (numeros.length > 0) {
        const numeroMasGrande = Math.max(...numeros);
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.textContent = "El número más grande ingresado fue: " + numeroMasGrande;
    } else {
        alert("No se ingresaron números.");
    }

}

function ejercicio2() {
    while (true) {
        const palabra = prompt("Ingrese una palabra:");

        const palabraFormateada = palabra.replace(/[^a-zA-Z]/g, "").toLowerCase();
        const reverso = palabraFormateada.split("").reverse().join("");
        if (palabra === "") {
            alert("No ingresó una palabra.");
        }
        else if (palabra !== null)
        {
            if (!isNaN(palabra)) {
                alert("solo palabra")
            }
            else if (palabraFormateada === reverso) {
                alert(`"${palabra}" es un palíndromo.`);
            }
            else {
                alert(`"${palabra}" no es un palíndromo.`);
            }
        }
        else
        {
            break;
        }

    }
}

function ejercicio3() {
    while(true)
    {
        const numero = prompt("Ingrese un número:");
        
        if (numero === "") {
            alert("Debe ingresar un número válido");
        } else if (isNaN(numero)) {
            alert("Solo se aceptan numeros");
        }
        else if (numero !== null) {
            const digitos = numero.split("").map(digito => parseInt(digito, 10));
            const suma = digitos.reduce((acumulador, digito) => acumulador + digito, 0);
            const remplazo = digitos.join("+");
            const resultadoDiv = document.getElementById("resultado");
            resultadoDiv.textContent = `La suma de los dígitos de ${remplazo} es: ${suma}`;
            break;
        } else {
            break;
        }
    }
}

function ejercicio4() {

    
    while(true)
    {

        const rangoInicio = parseInt(prompt("Ingrese el inicio del rango:"));
        const rangoFin = parseInt(prompt("Ingrese el fin del rango:"));
        if (!isNaN(rangoInicio) && !isNaN(rangoFin) && rangoInicio <= rangoFin) {
            const numeroAleatorio = Math.floor(Math.random() * (rangoFin - rangoInicio + 1)) + rangoInicio;
            alert(`El número aleatorio dentro del rango [${rangoInicio}, ${rangoFin}] es: ${numeroAleatorio}`);
            break;
        } else {
            alert("Ingrese un rango válido.");
        }

    }
}

function ejercicio5() {
    while(true)
    {
        const numero = parseInt(prompt("Ingrese un número:"));
    
        if (!isNaN(numero) && numero >= 0) {
            const secuencia = [0, 1];
            let siguienteNumero = 1;
    
            while (siguienteNumero <= numero) {
                secuencia.push(siguienteNumero);
                siguienteNumero = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
            }
    
            const secuenciaFibonacci = secuencia.join(", ");
            const resultadoDiv = document.getElementById("resultado");
            resultadoDiv.textContent = secuenciaFibonacci;
            break;
        } else {
            alert("Ingrese un número válido");
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const botonEjercicio1 = document.querySelector(".Ejercicio1");
    const botonEjercicio2 = document.querySelector(".Ejercicio2");
    const botonEjercicio3 = document.querySelector(".Ejercicio3");
    const botonEjercicio4 = document.querySelector(".Ejercicio4");
    const botonEjercicio5 = document.querySelector(".Ejercicio5");

    botonEjercicio1.addEventListener("click", ejercicio1);
    botonEjercicio2.addEventListener("click", ejercicio2);
    botonEjercicio3.addEventListener("click", ejercicio3);
    botonEjercicio4.addEventListener("click", ejercicio4);
    botonEjercicio5.addEventListener("click", ejercicio5);
});
