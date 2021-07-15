 // 4.1 Solicita al usuario su Nombre Completo mediante un window.prompt
let nombreCompleto = window.prompt("Ingrese su Nombre completo ");

  //4.2 Escribe en la consola del navegador su nombre y apellidos por separado
let nomCompleto = nombreCompleto.split(" ");

let apellidosM = nomCompleto.pop();
let apellidosP = nomCompleto.pop();
let nombre = nomCompleto[0];

console.log("Su nombre es: "+nombreCompleto);
console.log("Su Nombre: "+nombre);
console.log("Su apellido Paterno es: "+apellidosP);
console.log("Su apellido Materno es: "+apellidosM);


  //4.3 Escribe en la consola del navegador su Nombre Completo eliminando los espacios en blanco al principio y al final
  
  /*
  El metodo replace() nos permite reemplazar una expresión por otra dentro de un string el cual 
  acepta expresiones regulares o Regex en sus parametros. Con esto podemos tomar los espacios y removerlos.



  \s: selecciona espacios en blanco, tabulaciones y saltos de linea.
    +: en conjunto con \s sirve para tomar espacios consecutivos, de esta forma si 
    hay 1 o mas espacios seguidos se eliminaran en conjunto.
    g: permite repetir el proceso a lo largo del string o cadena, de otra forma solo se 
    eliminaría el primer espacio encontrado 
  
  */


  console.log(nombreCompleto.replace(/\s+/g, ''));


 // 4.4 Escribe en la consola del navegador true si el nombre inicia con una letra entre la A y la M, y escribe false de lo contrario
      function condicion(str) 
      {
          let flag = false;
          let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
          for (let i = 0; i < letras.length; i++)
          {
              if (str[0].toUpperCase() === letras[i].toUpperCase())
                  flag = true;
          }
          return flag;
      }
      console.log(condicion( nombreCompleto ));

//  4.5 Escribe en la consola del navegador el Apellido Paterno en Mayúsculas
      console.log(apellidosP.toUpperCase());
//   4.6 Escribe en la consola del navegador el Apellido Materno en Minúsculas
      console.log(apellidosM.toLowerCase());
// 4.7 Escribe en la consola del navegador el Nombre Completo en minúscula la inicial de cada parte y Mayúsculas el resto, por ejemplo con el nombre Jorge Pérez Ramos se debería escribir: jORGE pÉREZ rAMOS

 console.log(nombreCompleto[0].charAt(0).toLowerCase() + nombreCompleto.split(" ")[0].slice(1) + " " +
apellidosP.charAt(0).toLowerCase() + apellidosP.slice(1) + " " + apellidosM.charAt(0).toLowerCase() + apellidosM.slice(1) ); 

//Bonus
const invertirCadena = cadena => {
    let nuevaCadena = "";
    for (let x = cadena.length - 1; x >= 0; x--) {
        nuevaCadena += cadena[x];
    }
    return nuevaCadena;
}

console.log(invertirCadena("juan martinez ulloa"));