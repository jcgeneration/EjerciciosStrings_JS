// 4.1 Solicita al usuario su Nombre Completo mediante un window.prompt
let fullName = window.prompt("Enter your full name: ");

// 4.2 Escribe en la consola del navegador su nombre y apellidos por separado
let space = fullName.indexOf(" ");
let userName = fullName.slice(0, space);
let userLast = fullName.slice(space+1);
console.log("User name is " + userName);
console.log("User last name is " + userLast);

// 4.3 Escribe en la consola del navegador su Nombre Completo eliminando los espacios en blanco al principio y al final
space = userLast.indexOf(" ");
let lastPat = userLast.slice(0, space);
let lastMat = userLast.slice(space+1);
console.log(userName + lastPat + lastMat);

// 4.4 Escribe en la consola del navegador true si el nombre inicia con una letra entre la A y la M, y escribe false de lo contrario
function isBetweenAtoM(str) 
{
    let condition = false;
    let words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    for (let i = 0; i < words.length; i++)
    {
        if (str[0].toUpperCase() === words[i].toUpperCase())
            condition = true;
    }
    return condition;
}
console.log(isBetweenAtoM( userName ));

// 4.5 Escribe en la consola del navegador el Apellido Paterno en Mayúsculas
console.log(lastPat.toUpperCase());

// 4.6 Escribe en la consola del navegador el Apellido Materno en Minúsculas
console.log(lastMat.toLowerCase());

// 4.7 Escribe en la consola del navegador el Nombre Completo en minúscula la inicial de cada parte y Mayúsculas el resto, por ejemplo con el nombre Jorge Pérez Ramos se debería escribir: jORGE pÉREZ rAMOS
console.log(userName[0].toLowerCase() + userName.slice(1).toUpperCase() + " "
+ lastPat[0].toLowerCase() + lastPat.slice(1).toUpperCase() + " "
+ lastMat[0].toLowerCase() + lastMat.slice(1).toUpperCase());

// 4.8 Escribe en la consola del navegador el Nombre Completo al revés, por ejemplo con el nombre: Jorge Pérez Ramos se debería escribir: somaR zeréP egroJ
let fullNameInv = "";
for (let i = fullName.length-1; i >= 0; i--)
    fullNameInv += fullName[i];
console.log(fullNameInv)
