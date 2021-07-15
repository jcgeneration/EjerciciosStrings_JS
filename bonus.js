function invertirNombre(nombre){
    var x = nombre.length;
    var cadenaInvertida = "";

    while(x>=0){
        cadenaInvertida = cadenaInvertida + nombre.charAt(x);
        x--;
    }
    return cadenaInvertida;
}
console.log(invertirNombre("Erika Diaz Buceta"));