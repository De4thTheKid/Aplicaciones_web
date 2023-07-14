while (true) {
    var edad = prompt("Ingrese su edad:");
    if (edad === "") {
        alert("Por favor, ingrese un valor.");
    } else if (isNaN(edad)) {
        alert("Ingresrar solo números")
    }else if (edad !== null) {


        edad = parseInt(edad);

        if (edad >= 18) {
            if (edad > 100) {
                alert("No eres humano");
            }
            else {
                alert("¡Ya puedes conducir!");
            }
        } else {
            alert("Aún no puedes conducir. Debes tener al menos 18 años.");
        }

    } else {
        break;
    }
}
