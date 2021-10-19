//variables  VAR LET COST

console.log("Variables");

//declaracion de variables
const nombre = 'Willy';
let apellido = 'Castillop';

//muestro en consola
let varDato = 21;
console.log(nombre, apellido, varDato);


//solo funciona varDato en este bloque de codigo con otro valor 3
if(true){
  let varDato = 3;
  console.log(varDato)
}
//imprimer 21 porque esta fuera del bloque if
console.log(varDato)


