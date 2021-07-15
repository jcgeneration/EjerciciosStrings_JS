nombre = window.prompt("Escriba su nombre completo",""); // Le pide al usuario que escriba su nombre (esto lo hace con un mensaje en una ventanita)

nombre = nombre.trim(); // Esta linea le quita los espacios del principio y del final de lo que escibio el usuario. Esto lo puse al principio para que los espacios del princio no rompan el programa

console.log(nombre); // Muestra en la consola el nombre que ingreso el usuario

console.log(nombre.split(" ")[0]); //Muestra solo el nombre del usuario
console.log(nombre.split(" ")[1] + " " + nombre.split(" ")[2] ); //Muestra los apellidos del usuario

nombre = nombre.toUpperCase(); //Pasa a mayusculas el nombre completo del usuario
if(nombre.charAt(0) == 'A','B','C','D','E','F','G','H','I','J','K','L','M'){ //Toma la primera letra del nombre y la compara de la A a la M 
    console.log("True");                                                     // si es igual a una de estas letras devuelve True, de lo contrario devuelve False
}else {
    console.log("False");
}

console.log(nombre.split(" ")[1]); // Escribe el primer apellido en Mayusculas 

console.log(nombre.split(" ")[2].toLowerCase()); //Escribe el segundo apellido en minusculas

nombre_1 = nombre.split(" ")[0].charAt(0).toLowerCase() + nombre.split(" ")[0].slice(1); // pone la primera letra del nombre en minuscula
apellido_1 = nombre.split(" ")[1].charAt(0).toLowerCase() + nombre.split(" ")[1].slice(1); // pone la primera letra del apellido paterno en minuscula
apellido_2 = nombre.split(" ")[2].charAt(0).toLowerCase() + nombre.split(" ")[2].slice(1); // pone la primera letra del apellido materno en minuscula
console.log(nombre_1 + " " + apellido_1 + " " + apellido_2);
