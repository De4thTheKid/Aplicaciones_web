var cadenas = [];
while (true) {
  var cadena = prompt("Escribe alguna cadena de texto (preciona cancelar para salir ):");
  if (cadena === "") {
    alert("Ingresa un texto válido.");
  } else if (cadena !== null) {
    var cadenaModificada = cadena.replace(/\s/g, "-");
    cadenas.push(cadenaModificada);
  } else {
    var resultado = cadenas.join("-");
    document.write(resultado);
    break;
  }
}