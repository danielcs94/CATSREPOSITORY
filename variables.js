// Declaracion variable en una linea
// let product = "Ps5 Pro";

// Declaracion varias variables en una misma linea
// let price = "", dimensiones = 0;

// 10_product = "TEST!!"" -> No esta perimitido declarar variables que comiencen por digitos.

// no podemos declarar variables usando palabras reservadas: https://es.w3hmong.com/js/js_reserved.htm
// let  return = true;

// let pokemon  = "Bulbasaur";

/* function showPokemon (nombrePokemon) {
    // nombrePokemon = pokemon;
    pokemon = "Charmander";

    console.log(nombrePokemon);
   }*/

// showPokemon(pokemon);

let firstName = "Jhon";
let lastName = "Snow";
let age = 24;

console.log("Soy " + firstName + " " + lastName + " y tengo " + age + " años.");

function gameOfThronesPresentation (nombre, apellido, edad) {
    console.log(`Soy ${nombre} ${apellido} y tengo ${edad} años.`)
}

// gameOfThronesPresentation (firstName, lastName, age);

age += 6;
console.log(`Soy ${nombre} ${apellido} y tengo ${edad} años.`);

age -= 6;

age *= 10;
console.log(`Soy ${nombre} ${apellido} y tengo ${edad} años.`);

age /= 2;
console.log(`Soy ${nombre} ${apellido} y tengo ${edad} años.`);

age += 25;
console.log(`Soy ${nombre} ${apellido} y tengo ${edad} años.`);

age /= 5;
console.log(`Soy ${nombre} ${apellido} y tengo ${edad} años.`);
