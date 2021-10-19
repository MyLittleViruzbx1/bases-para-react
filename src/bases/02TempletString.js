//String TEMPLE STRING

const nombre = 'William';
const apellido = 'Castillo';

const nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto)


// Uso de backtick / back quote

const nombrandolo = `Me llamo 
  ${nombre} 
  ${apellido}
  ${2 +2 }
`;

console.log(nombrandolo)


function getSaludo(nombre){
  return 'HOla mundo' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre) }`);



//ejercicio

//COMPLETADO
const ejercicio = 'nameprogress';

console.log(ejercicio);

function prueba(ejercicio){
  return `Palabra en ingles:` + ejercicio;
}

console.log('Corriendo: ' + prueba(ejercicio))