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
    if(nombreI[0]=='A' || nombreI[0]=='B' || nombreI[0]=='C' || nombreI[0]=='D' || nombreI[0]=='E' || nombreI[0]=='F' || nombreI[0]=='G' || nombreI[0]=='H' || nombreI[0]=='I' || nombreI[0]=='J' || nombreI[0]=='K' || nombreI[0]=='L'|| nombreI[0]=='M'){
        console.log(true);
    } else{
        console.log(false);
    }
}

verificarInicial(nombre);

/*> 4.5 Escribe en la consola del navegador el Apellido Paterno en Mayúsculas*/
console.log(apellidoP.toUpperCase());

/*> 4.6 Escribe en la consola del navegador el Apellido Materno en Minúsculas*/
console.log(apellidoM.toLocaleLowerCase());




