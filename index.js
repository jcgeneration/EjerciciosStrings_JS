// 4.1
var nombre = window.prompt("Escribe tu nombre completo", "Nombre(s) Apellidos");

// 4.2
function separarNombreA(str){
    var stringBackwards = str.split(" ");
    var stringBackwards = stringBackwards.reverse();
    var apellidos = [];
    apellidos.push(stringBackwards[1]);
    apellidos.push(stringBackwards[0]);
    apellidos = apellidos.join(" ");
    var nombre = [];
    for( i = stringBackwards.length ; i >= 2 ; i-- ){
        nombre.push(stringBackwards[i]);
    }
    nombre = nombre = nombre.join(" ");
    return  "Tus apellidos son: " + apellidos + " y tu(s) nombre(s) son: " + nombre;
    // return stringBackwards;
}
console.log(separarNombreA(nombre));

// 4.3
console.log(nombre.trim());

// 4.4
var iniciales = "abcdefghijklm".split("");
function iniciaCon(str){
    str = str.toLowerCase();

    for(i=0; i<= iniciales.length;i++){
        if(str.startsWith(iniciales[i])){
            return "Verdadero";
        }
    }
    return "Falso";
}
console.log(iniciaCon(nombre));

// 4.5
function apellidoP(str){
    var stringBackwards = str.split(" ");
    var stringBackwards = stringBackwards.reverse();
    var apellidos = [];
    apellidos.push(stringBackwards[1]);
    apellidos = apellidos.join("");
    apellidos = apellidos.toUpperCase();
    return apellidos;
}
console.log(apellidoP(nombre))

// 4.6
function apellidoM(str){
    var stringBackwards = str.split(" ");
    var stringBackwards = stringBackwards.reverse();
    var apellidos = [];
    apellidos.push(stringBackwards[0]);
    apellidos = apellidos.join("");
    apellidos = apellidos.toLowerCase();
    return apellidos;
}
console.log(apellidoM(nombre))

// 4.7
function reverseCases(str){
    str = str.toUpperCase();
    str = str.split(" ");
    for(i=0 ; i < str.length; i++){
        str[i] = str[i].split("");
    }
    for(i=0 ; i < str.length; i++){
        str[i][0] = str[i][0].toLowerCase();
        str[i] = str[i].join("")
    }
    str = str.join(" ");

    return str;
}
console.log(reverseCases(nombre));

// 4.8
function backwardsName(str){
    str = str.split(" ");

    for(i=0 ; i < str.length; i++){
        str[i] = str[i].split("").reverse().join("");
    }
    str = str.join(" ");
    return str;

    // var toArray = str.split(" ");
    // var reversal = toArray.reverse();
    // var backed = reversal.join(" ");
    // return backed;
}
console.log(backwardsName(nombre));