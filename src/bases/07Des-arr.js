//Desestructuracion
//Asignacion Desestructurante
//ARREGLOS

const personajes = ['Naruto', 'Goku', 'Gohan', 'Deku'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
console.log(personajes[3]);
console.log('*************************')

const [, naurto_kun] = personajes;

console.log(naurto_kun);


const retornaArreglo = ()=>{
    return ['ABC',123];
}

const [letras, numeros] = retornaArreglo(); //

console.log(letras, numeros);

console.log("Tarea")
//////////////////////////////////
//tarea =
//1. EL primer valor del arr se llamara nombre
//2. se llamara nombre
const sexState = (valor) =>{
    return [valor, ()=>{console.log('Hello!')}];
};


const [nombre, setNombre] = sexState('Naruto_shuppuden');
// console.log(arr)
console.log(nombre)


//Comparar los 2 valores
setNombre();
// arr[1]();