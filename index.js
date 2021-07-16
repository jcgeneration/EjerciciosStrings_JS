// INSTRUCCIONES: descomentar /* */ para hacer funcionar


/*
 // Inicio 4.1 ----- 4.2
let nameUser = window.prompt("Ingresa tu nombre completo","");
let nombreConSeparacion = nameUser.split(" " [0]);
if(nombreConSeparacion[0] === undefined){
    nombreConSeparacion[0]="";
}
if(nombreConSeparacion[1] === undefined){
    nombreConSeparacion[1]="";
}
if(nombreConSeparacion[2] === undefined){
    nombreConSeparacion[2]="";
}

console.log("Nombre: " + nombreConSeparacion[0]);
console.log("Apellidos: " + nombreConSeparacion[1] + " " + nombreConSeparacion [2]);
// Fin 4.1 ----- 4.2
*/

/*
// Inicio 4.3 ----- 4.4
let nombre = prompt("Ingresa tu nombre completo:", "");
let nombreJunto = nombre.split(" "[0], " "[1], " "[2]);
let bandera;
if (nombre[0] === 'A' || nombre[0] === 'B' || nombre[0] === 'C' || nombre[0] === 'D' || nombre[0] === 'E' || nombre[0] === 'F' 
|| nombre[0] === 'G' || nombre[0] === 'H' || nombre[0] === 'I' || nombre[0] === 'J' || nombre[0] === 'K' || nombre[0] === 'L' 
|| nombre[0] === 'M' || nombre[0] === 'a' || nombre[0] === 'b' || nombre[0] === 'c' || nombre[0] === 'd' || nombre[0] === 'e'
|| nombre[0] === 'f' || nombre[0] === 'g' || nombre[0] === 'h' || nombre[0] === 'i' || nombre[0] === 'j' || nombre[0] === 'k' 
|| nombre[0] === 'l' || nombre[0] === 'm'){
    bandera = true;
}else{
    bandera = false;
}
console.log(bandera);
if(nombreJunto[0] === undefined){
    nombreJunto[0]="";
}
if(nombreJunto[1] === undefined){
    nombreJunto[1]="";
}
if(nombreJunto[2] === undefined){
    nombreJunto[2]="";
}
console.log("Nombre:" + nombreJunto[0] + nombreJunto[1] + nombreJunto[2]);
// Fin 4.3 ----- 4.4
*/

/*
// Inicio 4.5 ----- 4.6
let apellidoPat = prompt("Ingresa el Apellido Paterno:","");
let apellidoMat = prompt("Ingresa el Apellido Materno:", "");
console.log("Apellido Paterno : " + apellidoPat.toUpperCase());
console.log("Apellido Materno : " + apellidoMat.toLowerCase());
// Fin 4.5 ----- 4.6
*/

/*
// Inicio 4.7
let nombreCompleto = prompt("Ingresa tu nombre completo:","");
let separacion = nombreCompleto.split(" "[0], " "[1], " "[2]);
let cambio;

if(separacion[0] === undefined){
    separacion[0]="";
}else{
    separacion[0] = separacion[0].toUpperCase();
}
if(separacion[1] === undefined){
    separacion[1]="";
}else{
    separacion[1] = separacion[1].toUpperCase();
}
if(separacion[2] === undefined){
    separacion[2]="";
}else{ 
    separacion[2] = separacion[2].toUpperCase();
}

console.log(separacion[0].charAt(0).toLowerCase() + separacion[0].slice(1) + 
" " + separacion[1].charAt(0).toLowerCase() + separacion[1].slice(1) +
" " + separacion[2].charAt(0).toLowerCase() + separacion[2].slice(1));
// Fin 4.7
*/