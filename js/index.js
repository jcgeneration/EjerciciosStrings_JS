/*> 4.1 Solicita al usuario su Nombre Completo mediante un window.prompt*/
let nombreCompleto;
nombreCompleto=String(window.prompt("Ingresa tu nombre completo: "));
/*> 4.2 Escribe en la consola del navegador su nombre y apellidos por separado*/
let nombreCompletoSplit= nombreCompleto.split(" ");
let apellidoM=nombreCompletoSplit.pop();
let apellidoP=nombreCompletoSplit.pop();
let tamano=nombreCompletoSplit.length;
let nombre="";
for(i=0;i<tamano;i++){
    nombre=nombre+nombreCompletoSplit.shift();
    nombre=nombre+" ";
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
/*> 4.4 Escribe en la consola del navegador _true_ si el nombre 
inicia con una letra entre la A y la M, y escribe _false_ de lo contrario*/
nombreCompletoSplit= nombreCompleto.split(" ");
apellidoM=nombreCompletoSplit.pop();
apellidoP=nombreCompletoSplit.pop();
tamano=nombreCompletoSplit.length;
nombre="";

for(i=0;i<tamano;i++){
    nombre=nombre+nombreCompletoSplit.shift();
    nombre=nombre+" ";
}

function verificarInicial(nombreI){
    if(nombre[0]=='A' || nombre[0]=='B' || nombre[0]=='C' || nombre[0]=='D' || nombre[0]=='E' || nombre[0]=='F' || nombre[0]=='G' || nombre[0]=='H' || nombre[0]=='I' || nombre[0]=='J' || nombre[0]=='K' || nombre[0]=='L'|| nombre[0]=='M'){
        console.log(true);
    } else{
        console.log(false);
    }
}

verificarInicial(nombre);


