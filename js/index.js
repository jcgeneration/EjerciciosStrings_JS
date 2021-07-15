//Solicita al usuario su Nombre Completo mediante un window.prompt
nombre = String(window.prompt("Dime tu nombre: ", "Marco"));
aPater = String(window.prompt("Dime tu apellido paterno: ", "Grimaldo"));
aMater = String(window.prompt("Dime tu apellido materno: ", "Peralta"));

//Escribe en la consola del navegador su nombre y apellidos por separado
console.log(nombre);
console.log(aPater);
console.log(aMater);

//Escribe en la consola del navegador su Nombre Completo eliminando los 
//espacios en blanco al principio y al final
console.log(nombre.trim() +" "+aPater.trim() +" "+aMater.trim());

//Escribe en la consola del navegador _true_ si el nombre inicia con una 
//letra entre la A y la M, y escribe _false_ de lo contrario
let letra = nombre[0].toUpperCase();
if (letra=="A"||letra=="B"||letra=="C"||letra=="D"||letra=="E"||letra=="F"||letra=="G"||letra=="H"||letra=="I"||letra=="J"||letra=="K"||letra=="L"||letra=="M"){
    console.log("true");
}else{
    console.log("false");
}

//Escribe en la consola del navegador el Apellido Paterno en Mayúsculas
console.log(aPater.toUpperCase());

//Escribe en la consola del navegador el Apellido Materno en Minúsculas
console.log(aMater.toUpperCase());

//Escribe en la consola del navegador el Nombre Completo en Minúscula la 
//inicial de cada parte y Mayúsculas el resto, por ejemplo con el nombre 
//Jorge Pérez Ramos se debería escribir: jORGE pÉREZ rAMOS
console.log(nombre[0].toLowerCase()+nombre.slice(1).toUpperCase()+" "+aPater[0].toLowerCase() +aPater.slice(1).toUpperCase()+" "+aMater[0].toLowerCase()+aMater.slice(1).toUpperCase());