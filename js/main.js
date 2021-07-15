//4.1 Solicita al usuario su Nombre Completo mediante un window.prompt
let nombreCompleto = window.prompt("Escribe tu nombre completo");

//4.2 Escribe en la consola del navegador su nombre y apellidos por separado
let nombre = nombreCompleto.split(" ")[0];
console.log("Mi nombre es: " + nombre);

let apellido = nombreCompleto.split(" ")[1];
console.log("Mi apellido es: " + apellido);

//4.3 Escribe en la consola del navegador su Nombre Completo eliminando los espacios en blanco al principio y al final
console.log("'" + nombreCompleto.trim() +"'");

//4.4 Escribe en la consola del navegador _true_ si el nombre inicia con una letra entre la A y la M, y escribe _false_ de lo contrario


//4.5 Escribe en la consola del navegador el Apellido Paterno en Mayúsculas


//4.6 Escribe en la consola del navegador el Apellido Materno en Minúsculas


//4.7 Escribe en la consola del navegador el Nombre Completo en Minúscula la inicial de cada parte y Mayúsculas el resto, por ejemplo con el nombre Jorge Pérez Ramos se debería escribir: jORGE pÉREZ rAMOS


//4.8 Escribe en la consola del navegador el Nombre Completo al revés, por ejemplo con el nombre: Jorge Pérez Ramos se debería escribir: somaR zeréP egroJ