//4.1 Solicita al usuario su Nombre Completo mediante un window.prompt

let nombre = prompt('¿Cual es tu nombre?', '');
let apellidoP = prompt('Cual es tu primer apellido?', '');
let apellidoM = prompt('Cual es tu segundo apellido?', '');

//4.2 Escribe en la consola del navegador su nombre y apellidos por separado
console.log(`Tu nombre es: ${nombre}, tu primer apellido: ${apellidoP}, tu segundo apellido: ${apellidoM}`);

//4.3 Escribe en la consola del navegador su Nombre Completo eliminando los espacios en blanco al principio y al final

let nombreCompleto = `${nombre}  ${apellidoP}  ${apellidoM}`;
console.log(nombreCompleto.trimStart().trimEnd());

// 4.4 Escribe en la consola del navegador true si el nombre inicia con una letra entre la A y la M, y escribe false de lo contrario

console.log(nombre.match(/^[A-M]/g)? true : false);

//4.5 Escribe en la consola del navegador el Apellido Paterno en Mayúsculas

console.log(apellidoP.toUpperCase());

//4.6 Escribe en la consola del navegador el Apellido Materno en Minúsculas

console.log(apellidoM.toLowerCase());

//4.7 Escribe en la consola del navegador el Nombre Completo en Minúscula la inicial de cada parte y Mayúsculas el resto, por ejemplo con el nombre Jorge Pérez Ramos se debería escribir: jORGE pÉREZ rAMOS

let tmp = nombreCompleto.split(" ");
console.log(tmp);
let newString = [];

    tmp.forEach(el => {
        let char = el.charAt(0).toLowerCase();
        let residuoStr = el.slice(1).toUpperCase();
        newString.push(char.concat(residuoStr));
        console.log("🚀 ~ file: index.js ~ line 33 ~ el", el)
    })

console.log(newString.join(' '));