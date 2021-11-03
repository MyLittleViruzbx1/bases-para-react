//Funciones en js

// function saludar(nombre){
//     return `Hola, ${ nombre}`;
// }

//hacerlo de esta manera 

const saludar = function(nombre){
    return `Hola, ${ nombre }`
}


const saludar2 = (nombre) =>{
    return `Hola, ${ nombre }`
}


const saludar3 = nombre => `Hola, ${ nombre }`;

const saludar5 = () => 'Hello motor'


console.log(saludar2('Chocholate') );
console.log(saludar3('Vainilla'))
console.log(saludar5())
// console.log(saludar('Willy'))


const getUser = () => ({
        uid: 'ABC',
        username: 'Max Steel'
       });

const user = getUser();
console.log(user)
// console.log(getUser() )



//TAREA

// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
//  3. probarlo

// function getUsuarioActivo ( nombre) {
//     return {
//         uid: 'ABC123',
//         username: nombre
//     }
// };

const  getUsuarioActivo  = (nombre) => 
    ({
        uid: 'ABC123',
        username: nombre
    });




const usuarioActivo = getUsuarioActivo('William');
console.log( usuarioActivo);


//segundo vez por que me traba y ya lo habia hecho una vez


const getUsuarioActivo2 = (nombre2) =>
     ({
        udi2: 'segundo',
        username2: nombre2
    });




const usuarioActivo2 = getUsuarioActivo2('Fernando');
console.log(usuarioActivo2)



//terser ejercicio a mano

const getUsuario3 = (nombre3) =>({
        uid3: 'nombre3',
        username3: nombre3 
});

const loco = getUsuario3('Billy');
console.log(loco)
function sum(x,y,z){
    return x + y +z;
}

const numeros = [1,2,3];

console.log(sum.apply(null,numeros));