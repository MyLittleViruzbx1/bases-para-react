//Objetos

const persona = {
  nombre: 'Willy',
  apellido: 'Castillo',
  edad: 21,
  musica: {favorito: 'rock',
          basura: 'regueton',
          lo_mejor: 'clasica'
  }
}

//esta linea se puede simplificar
// console.table({persona:persona})
console.log(persona)


const tolist = {
  libra: 'pollo',
  onza: 'crack',
  pimienta: 'Gorda',
  ceviche: 'Camaron'
}


console.log({tolist:tolist})



const animales = {
  pollo: 'hervivoro',
  mamut: 'mamifero',
  cerdo: 'hervivoro',
  gato: 'carnivoro',
  hamster: "vegetariano"
} 

console.log({animales:animales})



const fornite = {
  escar: "dorada",
  escopeta: 'morada',
  motikin: 'salud',
  minis: {
    grande: 50,
    enano: 25
  }
}

console.log(fornite)


const people = persona;
people.apellido = 'Perez';
console.log(people)

// const pug = fornite;
// const pug = {...fornite}
const pug = {...fornite};
pug.escopeta = 'verde';
console.log(fornite)
console.log(pug)

// HAY QUE USAR
// pug.escopeta = 'Dorada'  


//OPERADOR SPRET
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax