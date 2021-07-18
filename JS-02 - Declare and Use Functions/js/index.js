let div_res=document.getElementById("div_resultado");

/*
### Exercise #1

Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee.
Can you help her calculate her costs?

Return the value of what she should be paying.
*/

function calcularCosto(transaccion1, ...transacciones){
    let costo=transaccion1+3+(transaccion1*0.01);
    for(let i=0; i<transacciones.length;i++){
        costo += transacciones[i]+3+(transacciones[i]*0.01)
    }//for
    return costo;
}//CalcularCostos

console.log("Maria debe de pagar el total de: "+calcularCosto(1000.6,2050,3040,4501,4609));
div_res.innerHTML += "<hr/><strong>Debe pagar Maria el total de: " + calcularCosto(1000.6,2050,3040,4501,4609)+"</strong>";

/*
### Exercise #2

#### Part 1
Ed would like a way to input 3 names of his friends.
The output should be a console greeting to his friends saying: 
`Welcome {name1}, {name2}, {name3}.`
*/
function helloFriends(name1, name2, name3){
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
    div_res.innerHTML += `<hr/><strong>Welcome ${name1}, ${name2}, ${name3}.</strong>`
}//helloFriends
helloFriends("Carlos","Itzel", "Jacob");

/*
#### Part 2
Ed would like to create a function that takes in a birth year and returns the age.

i.e. 1990 returns 30
*/

function yearsOld(fechaNacimiento){
    const fecha= new Date();
    const year =fecha.getFullYear();
    const edad=(year-fechaNacimiento);
    console.log(edad+" años cumplidos.");
    div_res.innerHTML += `<hr/><strong> ${edad} años cumplidos.</strong>`;
}

yearsOld(1990);
yearsOld(1996);

/*
#### Part 3
Ed would like to create a function that prints out,
`Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.`
*/

function greetingsAge(name1,fechaNacimiento1,name2,fechaNacimiento2,name3,fechaNacimiento3){
    age1=calculatorAge(fechaNacimiento1);
    age2=calculatorAge(fechaNacimiento2);
    age3=calculatorAge(fechaNacimiento3);
    console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`);
    div_res.innerHTML += `<hr/><strong>Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.</strong>`;
}

function calculatorAge(fechaNacimiento){
    const fecha= new Date();
    const year =fecha.getFullYear();
    const edad=(year-fechaNacimiento);
    return edad;
}

greetingsAge("Israel","1996","Itzel","1993","Carlos","1995");

/*
### Challenge Yourself
A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

#### Part 1
A student passes if they have a score greater than or equal to 5.
Create a function that returns a boolean true or false. 

#### Part 2
A student has an excellent grade if they score higher than 8.
Add on to your function to print out "Excellent" for scores greater than 8.

#### Part 3
A student has a perfect grade if their score is 11.
Add on to your function to print out "Perfect" for a score of 11.
*/

function rubric(calificacion){
    if(calificacion>=5){
        if(calificacion==11){
            console.log("Perfect");
            div_res.innerHTML += `<hr/><strong>Puntuación: ${calificacion}. perfect</strong>`;
        } else if(calificacion>8){
            console.log("Excellent");
            div_res.innerHTML += `<hr/><strong>Puntuación: ${calificacion}. Excellent</strong>`;
        }
        return true;
    } else{
        return false;
    }
}

for(let k=0;k<=11;k++){
    console.log(rubric(k));
}

