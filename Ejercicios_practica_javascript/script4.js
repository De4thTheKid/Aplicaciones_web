while (true) {
    var dni = prompt("Introduce el número de DNI (0 - 99999999):");

    if (dni === null) {
        break; 
    }

    dni = parseInt(dni);

    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        alert("Por favor, ingresa un número de DNI válido.");
    } else {
        var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        var indice = dni % 23;
        var letra = letras.charAt(indice);

        alert("La letra del DNI " + dni + " es: " + letra);
    }
}
