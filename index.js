//Saca una pantalla donde pide el nombre
let nombre=window.prompt("Dame tu nombre completo:","Valor por default");
//Divide el nombre con el split con el separador de espacio
let arregloNombre=nombre.split(" ");
//El primer elemento es el nombre
console.log("Nombre:"+arregloNombre[0]);
//Los apellidos son el segundo y tercer elemento
console.log("Apellidos:"+arregloNombre[1]+" "+arregloNombre[2]);
//Saca una pantalla donde pide el nombre
nombre=window.prompt("Dame tu nombre completo:","Valor por default");
//Elimina los espacios al inicio y al final
console.log("Nombre sin espacios:"+nombre.trimStart().trimEnd());
console.log(nombre.trimStart().trimEnd().length);
//Elimina los espacios en blanco y separa las palabras en subcadenas por medio del espacio
arregloNombre=nombre.trimStart().trimEnd().split(" ");
//Funcion que determina si el nombre empieza entre A y M
function empieza(nombre){
    //Con charCodeAt se obtiene el codigo utf-16 y se compara con los codigos de A hasta la M
    if(nombre.charCodeAt(0)>=65&&nombre.charCodeAt(0)<=65+12){
        return true;
    }
    else{
        return false;
    }
}
//Se imprime true, si el valor esta entre A-M, sino false
console.log(empieza(arregloNombre[0]));
//Se pone en mayusculas el apellido
console.log(arregloNombre[1].toUpperCase());
//Se poene en minusculas el segundo apellid
console.log(arregloNombre[2].toLowerCase());
//Las siguientes sentencias son para cambiar la primera letra a minuscula y las demas a mayusculas
let nombreNuevo;
let apellidoPaterno;
let apellidoMaterno;
//Se obtiene el primer caracter y se cambua a minuscula, después con subtring a partir del indice 1, 
//se cambia lo que resta de la cadena a mayuscula
nombreNuevo=arregloNombre[0].charAt(0).toLowerCase()+arregloNombre[0].substring(1).toUpperCase();
apellidoPaterno=arregloNombre[1].charAt(0).toLowerCase()+arregloNombre[1].substring(1).toUpperCase();
apellidoMaterno=arregloNombre[2].charAt(0).toLowerCase()+arregloNombre[2].substring(1).toUpperCase();
//Se concatena las nuevas cadenas;
console.log(nombreNuevo+" "+apellidoPaterno+" "+apellidoMaterno);
//Función para obtener el nombre al reves
function reversa(nombre){
    let nombre_reversa="";
    //Se hace un for para obtener desde la ultimo caracter
    //hasta el primero y poner el nombre al reves.
    for(let i=0;i<nombre.length;i++){
        nombre_reversa+=nombre[nombre.length-i-1];
    }
    return nombre_reversa;
}
//Imprime el nombre al reves
console.log(reversa(nombre.trimStart().trimEnd()));