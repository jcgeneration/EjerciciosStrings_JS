//4.1 Solicita al usuario su Nombre Completo mediante un window.prompt
let nombreCompleto = window.prompt("Escribe tu nombre completo");
//4.2 Escribe en la consola del navegador su nombre y apellidos por separado

nombreYApellidos = nombreCompleto.split(" ");
console.log(nombreYApellidos);

//si la persona tiene un nombre
if(nombreYApellidos.length == 3){
    let nombre = nombreCompleto.split(" ", 1);
    let apellido1 = nombreCompleto.split(" ")[1];
    let apellido2 = nombreCompleto.split(" ")[2];
    console.log("Mi nombre es " + nombre + ". Y mis apellido son " + apellido1 + " y " + apellido2);
}
//si la persona tiene dos nombres
if(nombreYApellidos.length == 4){
    let nombre = nombreCompleto.split(" ", 2).join(" ");
    let apellido1 = nombreCompleto.split(" ")[2];
    let apellido2 = nombreCompleto.split(" ")[3];
    console.log("Mis nombre son " + nombre + ". Y mis apellido son " + apellido1 + " y " + apellido2);
}

//Nombre de mi gato para hacer pruebas 
//Camus Ofelio Almaraz Sanchez
//Camus Almaraz Sanchez

//4.3 Escribe en la consola del navegador su Nombre Completo eliminando los espacios en blanco al principio y al final
console.log("'" + nombreCompleto.trim() + "'");

//4.4 Escribe en la consola del navegador _true_ si el nombre inicia con una letra entre la A y la M, y escribe _false_ de lo contrario
if (nombreCompleto.toLowerCase().charCodeAt(0) >= 97 && nombreCompleto.toLowerCase().charCodeAt(0) <= 109) {
    console.log(true);
} else {
    console.log(false);
}


//4.5 Escribe en la consola del navegador el Apellido Paterno en Mayúsculas
if(nombreYApellidos.length == 3){
    let apellido1 = nombreCompleto.split(" ")[1].toUpperCase();
    console.log("Apellido paterno es: " + apellido1);
}
//si la persona tiene dos nombres
if(nombreYApellidos.length == 4){
    let apellido1 = nombreCompleto.split(" ")[2].toUpperCase();
    console.log("Apellido paterno es: " + apellido1);
}


//4.6 Escribe en la consola del navegador el Apellido Materno en Minúsculas
//si la persona tiene un nombre
if(nombreYApellidos.length == 3){
    let apellido2 = nombreCompleto.split(" ")[2].toLowerCase();
    console.log("Apellido materno es: " + apellido2);
}
//si la persona tiene dos nombres
if(nombreYApellidos.length == 4){
    let apellido2 = nombreCompleto.split(" ")[3].toLowerCase();
    console.log("Apellido materno es: " + apellido2);
}


//4.7 Escribe en la consola del navegador el Nombre Completo en Minúscula la inicial de cada parte y Mayúsculas el resto, por ejemplo con el nombre Jorge Pérez Ramos se debería escribir: jORGE pÉREZ rAMOS
//No logré que queden en la misma línea

//separar por palabra
var nombreCortado = nombreCompleto.split(" ");

//a cada palabra aplicarle la función
nombreCortado.forEach(conviertePalabra);

// funcion para tranformar cada palabra 
function conviertePalabra(nombreCortado) {
    //la primer letra se pone en minuscula
    min = nombreCortado.charAt(0).toLowerCase();
    //la palabra se cambia a mayúsculas y se elimina el primer caracter
    mayus = nombreCortado.toUpperCase().substr(1);
    // se regresan los cachos de las palabras
    console.log(min + mayus);   
}

//4.8 Escribe en la consola del navegador el Nombre Completo al revés, por ejemplo con el nombre: Jorge Pérez Ramos se debería escribir: somaR zeréP egroJ
function nombreRev(nombreCompleto) {
    var words = [];
    words = nombreCompleto.split("\s+");
    var result = "";
    for (var i = 0; i < words.length; i++) {
        return result += words[i].split('').reverse().join('');
    }//for
}//nombreRev
console.log(nombreRev(nombreCompleto));