// ****     4.1     ***
let nombre = 'Oscar Martinez de la O'

let arrelgoName = nombre.split(' ') //=>["Oscar", "Martinez", "de", "la", "O"]

let nameNoSpace = arrelgoName.map(function(elemento){
    return elemento
}) // => ["Oscar", "Martinez", "de", "la", "O"]

let apellidos = []
for( let i = 1; i<arrelgoName.length; i++ ){
    apellidos.push(arrelgoName[i])
}
//console.log(apellidos) => ["Martinez", "de", "la", "O"]
apellidos = apellidos.join(' ') //=>'Martinez de la O'
arrelgoName = arrelgoName.shift()//=> 'Oscar'


// ****     4.2     ***
console.log(arrelgoName, '\n', apellidos)

// ****     4.3     ***
console.log(nameNoSpace.join(''))

// ****     4.4     ***
if(arrelgoName[0] === 'A' || arrelgoName[0] === 'M' ){
    console.log(true)
}else {
    console.log(false)
}

// ****     4.5     ***
console.log(nameNoSpace[1].toUpperCase())

// ****     4.6     ***
let materno = []
let maternoMod 
if(nameNoSpace.length > 2) {
    for(let i = 2; i < nameNoSpace.length; i++){

        materno.push(nameNoSpace[i])
    }
    maternoMod = materno.join(' ').toLocaleLowerCase()
    console.log(maternoMod)
}

// ****     4.7     ***
if(materno.length > 2){
    let maternoMod =[]
    for (let i = 1; i< materno.length ; i++ ){
        maternoMod.push(materno[i])
    }
    maternoMod = `${materno[0][0]}${materno[0][1].toUpperCase()} ${maternoMod.join(' ').toUpperCase()}` //=>de La O

    console.log(maternoMod)
}
