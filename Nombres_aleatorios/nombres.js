var names = ["Juan", "Carlos", "Miguel", "Pedro", "Luis", "Andrés", "Javier", "Fernando", "Gabriel", "Ricardo", "Sergio", "Héctor", "Pablo", "Mario"];
var names2 = ["Elena", "Lucas", "María", "Adrián", "Sofía", "Matías", "Valentina", "Sebastián", "Isabella", "Gabriel", "Valeria", "Alejandro", "Camila", "Daniel"];
var lastname = ["González", "López", "Hernández", "García", "Martínez", "Pérez", "Sánchez", "Romero", "Fernández"];
var lastname2 = ["Fernández", "Gómez", "Torres", "Vargas", "Rojas", "Pérez", "Díaz", "López", "González"];


function generarNombre() {
    var nombreAleatorio = names[Math.floor(Math.random() * names.length)];
    var nombreAleatorio2 = names2[Math.floor(Math.random() * names2.length)];
    var apellidoAleatorio = lastname[Math.floor(Math.random() * lastname.length)];
    var apellidoAleatorio2 = lastname2[Math.floor(Math.random() * lastname2.length)];

    // Verificar si los nombres y apellidos son iguales
    while (nombreAleatorio === nombreAleatorio2 || apellidoAleatorio === apellidoAleatorio2) {
        nombreAleatorio = names[Math.floor(Math.random() * names.length)];
        nombreAleatorio2 = names2[Math.floor(Math.random() * names2.length)];
        apellidoAleatorio = lastname[Math.floor(Math.random() * lastname.length)];
        apellidoAleatorio2 = lastname2[Math.floor(Math.random() * lastname2.length)];
    }

    var nombreCompleto = nombreAleatorio + " " + nombreAleatorio2 + " " + apellidoAleatorio + " " + apellidoAleatorio2;

    // Mostrar el nombre en algún elemento HTML
    document.getElementById("name-random").innerHTML = nombreCompleto;
}
