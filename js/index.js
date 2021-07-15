/*> 4.1 Solicita al usuario su Nombre Completo mediante un window.prompt*/
let nombreCompleto;
nombreCompleto=String(window.prompt("Ingresa tu nombre completo: "));
/*> 4.2 Escribe en la consola del navegador su nombre y apellidos por separado*/
nombreCompleto= nombreCompleto.split(" ");
let apellidoM=nombreCompleto.pop();
let apellidoP=nombreCompleto.pop();
let tamano=nombreCompleto.length;
let nombre="";
for(var i=0;i<tamano;i++){
    nombre=nombre+" "+nombreCompleto.shift();
}
console.log("Su nombre es: "+nombre);
console.log("Su apellido Paterno es: "+apellidoP);
console.log("Su apellido Materno es: "+apellidoM);
