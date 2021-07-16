// Solicita al usuario su nombre completo 
let nombreCompleto = window.prompt("Escribe tu nombre completo", "Nombre Apellidos");



// Escribe en la consola del navegador su nombre y apellidos por separado
let nombre = nombreCompleto.split(" ")[0];

console.log("Nombre: " + nombre);

let apellido1 = nombreCompleto.split(" ")[1];
let apellido2 = nombreCompleto.split(" ")[2];

let apellidos = apellido1.concat(" ", apellido2);

console.log("Apellidos: " + apellidos);

// Escribe en la consola del navegador su Nombre Completo eliminando los espacios en blanco al principio y al final

console.log(nombreCompleto.trim());

// Escribe en la consola del navegador true si el nombre inicia con una letra entre la A y la M, y escribe false de lo contrario

function letra(nombreCompleto){
    if( nombreCompleto.charCodeAt(0)>=65 && nombreCompleto.charCodeAt(0)<=77){
    return true; 
} else{
    return false;
}}

console.log(letra(nombreCompleto));

// Escribe en la consola del navegador el Apellido Paterno en Mayúsculas

console.log(apellido1.toUpperCase());

console.log(apellido2.toLowerCase());

// Escribe en la consola del navegador el Nombre Completo en Minúscula la inicial de cada parte y Mayúsculas el resto, 
// por ejemplo con el nombre Jorge Pérez Ramos se debería escribir: jORGE pÉREZ rAMOS

console.log(nombre[0].toLowerCase() + nombre.slice(1).toUpperCase() +" " + apellido1[0].toLowerCase() + apellido1.slice(1).toUpperCase() + " " +
apellido2[0].toLowerCase() + apellido2.slice(1).toUpperCase());