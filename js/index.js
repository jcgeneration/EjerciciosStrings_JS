/*> 4.1 Solicita al usuario su Nombre Completo mediante un window.prompt*/
let nombreCompleto;
nombreCompleto=String(window.prompt("Ingresa tu nombre completo: "));
/*> 4.2 Escribe en la consola del navegador su nombre y apellidos por separado*/
let nombreCompletoSplit= nombreCompleto.split(" ");
let apellidoM=nombreCompletoSplit.pop();
let apellidoP=nombreCompletoSplit.pop();
let tamano=nombreCompletoSplit.length;
let nombre="";
for(var i=0;i<tamano;i++){
    nombre=nombre+" "+nombreCompletoSplit.shift();
}
console.log("Su nombre es: "+nombre);
console.log("Su apellido Paterno es: "+apellidoP);
console.log("Su apellido Materno es: "+apellidoM);
/*> 4.3 Escribe en la consola del navegador su Nombre Completo eliminando 
los espacios en blanco al principio y al final*/
espacioInicio= /^ /;
espacioFinal = / $/;
espaciosSeguidos = /[ ]+/g;
nombreCompleto = nombreCompleto.replace (espaciosSeguidos," ");
nombreCompleto = nombreCompleto.replace (espacioInicio,"");
nombreCompleto = nombreCompleto.replace (espacioFinal,"");
console.log(nombreCompleto);


