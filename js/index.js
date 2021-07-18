/*> 4.1 Solicita al usuario su Nombre Completo mediante un window.prompt*/
let nombreCompleto;
nombreCompleto=String(window.prompt("Ingresa tu nombre completo: "));

/*> 4.2 Escribe en la consola del navegador su nombre y apellidos por separado*/
let nombreCompletoSplit= nombreCompleto.split(" ");
let apellidoM=nombreCompletoSplit.pop();
let apellidoP=nombreCompletoSplit.pop();
let tamano=nombreCompletoSplit.length;
let nombre="";
for( var i=0;i<tamano;i++){
    nombre=nombre+nombreCompletoSplit.shift();
    nombre=nombre+" ";
}
espacioFinal = / $/;
nombre= nombre.replace (espacioFinal,"");


console.log("Su nombre es: "+nombre);
console.log("Su apellido Paterno es: "+apellidoP);
console.log("Su apellido Materno es: "+apellidoM);

/*> 4.3 Escribe en la consola del navegador su Nombre Completo eliminando 
los espacios en blanco al principio y al final*/
nombreCompleto2= nombreCompleto;
espacioInicio= /^ /;
espacioFinal = / $/;
espaciosSeguidos = /[ ]+/g;
nombreCompleto = nombreCompleto.replace (espaciosSeguidos," ");
nombreCompleto = nombreCompleto.replace (espacioInicio,"");
nombreCompleto = nombreCompleto.replace (espacioFinal,"");
console.log("----Ocupando la función replace----");
console.log(nombreCompleto);

/*Ocupo la función de String "String.prototype.trim()*/
nombreCompleto2 = nombreCompleto2.trim();
console.log("----Ocupando la función trim----");
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
nombre= nombre.replace (espacioFinal,"");

function verificarInicial(nombreI){
    if(nombreI[0]=='A' || nombreI[0]=='B' || nombreI[0]=='C' || nombreI[0]=='D' || nombreI[0]=='E' || nombreI[0]=='F' || nombreI[0]=='G' || nombreI[0]=='H' || nombreI[0]=='I' || nombreI[0]=='J' || nombreI[0]=='K' || nombreI[0]=='L'|| nombreI[0]=='M'){
        console.log(true);
    } else{
        console.log(false);
    }
}

console.log("----Ocupando en el if varios or anidados es (deficiente por las compraciones lógicas----");
verificarInicial(nombre);


/*Realice otra funcion para verificar la inicial, es simplificada*/
function verificarInicialCorta(nombreI){
    let flag=false;
    for( var k=65;k<=77;k++){
        if(nombreI[0].charCodeAt()==k){
            flag=true;
        }
    }
    console.log(flag);
}

console.log("----Ocupando el codigo de las letras----");
verificarInicial(nombre);

/*> 4.5 Escribe en la consola del navegador el Apellido Paterno en Mayúsculas*/
console.log(apellidoP.toUpperCase());

/*> 4.6 Escribe en la consola del navegador el Apellido Materno en Minúsculas*/
console.log(apellidoM.toLowerCase());

/*> 4.7 Escribe en la consola del navegador el Nombre Completo en Minúscula 
la inicial de cada parte y Mayúsculas el resto, por ejemplo con el nombre 
Jorge Pérez Ramos se debería escribir: jORGE pÉREZ rAMOS*/

let apellidoPM=apellidoP.toUpperCase();
apellidoPM=apellidoPM.replace(apellidoPM[0],apellidoPM[0].toLowerCase());

let apellidoMM=apellidoM.toUpperCase();
apellidoMM=apellidoMM.replace(apellidoMM[0],apellidoMM[0].toLowerCase());

nombreCompletoSplit= nombreCompleto.split(" ");
apellidoM=nombreCompletoSplit.pop();
apellidoP=nombreCompletoSplit.pop();
tamano=nombreCompletoSplit.length;
let nombreM;
nombreC="";

for(i=0;i<tamano;i++){
    nombreM=nombreCompletoSplit.shift();
    nombreM=nombreM.toUpperCase();
    nombreM=nombreM.replace(nombreM[0],nombreM[0].toLowerCase());
    nombreC=nombreC+nombreM;
    nombreC=nombreC+" ";
}
nombreC= nombreC.replace (espacioFinal,"");

console.log(nombreC+" "+apellidoPM+" "+apellidoMM);

/*
### Bonus Track  
> 4.8 Escribe en la consola del navegador el Nombre Completo al revés, 
por ejemplo con el nombre: Jorge Pérez Ramos se debería escribir: somaR zeréP egroJ
*/
let nombreCompletoCopia=nombreCompleto;

function nombreReves(cadena){
    let longitud =cadena.length;
    let temporal="";
    for(let j=0; j<longitud; j++){
        temporal=temporal+cadena[longitud-1-j];
    }
    console.log(temporal);
}//NombreReves

nombreReves(nombreCompletoCopia);

/*Ejemplo*/
nombreReves("Jorge Pérez Ramos");











