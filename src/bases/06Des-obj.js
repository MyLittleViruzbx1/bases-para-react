//Desestructuracion
//Asignacion Desestructurante
//OBJETOS
console.log("FORMA NORMAL")
console.log("*****************************");

const persona = {
    nombre: 'Linterna Verde',
    edad: 21,
    clave: 'clavezde',
    rango: 'Teniente'
};


console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

console.log("*****************************");

console.log("ASIGNACION DESESTRUCTURANTE")
// const {nombre, edad, clave} = persona;
// const {nombre: nombre2} = persona;
// console.log(nombre2);//cambiando el nombre
// console.log(nombre)



console.log("*****************************");
console.log("*****************************");
console.log('FUNCION DE FLECHA');

const sexContext = ({clave, nombre, edad, rango = 'Capy' }) =>{
//LE CAMBIO EL NOMBRE POR USECONTEXT ERA RETORNAPERSONA
    // const {edad, nombre, clave} = usuario;
    // console.log(nombre,edad, rango);
    return {
        nombreCLave: clave,
        anios: edad,
        apodo: nombre, 
        rangos: rango,
        datos: {
            dia: 1,
            mes: 3,
            born: 1996
        }
    }
}

const {nombreCLave, anios, datos:{dia, mes, born}} = sexContext(persona);//use sexContext en vez de use y set no se pueden usar ya son palabras reservadas para react (17)

console.log(nombreCLave, anios);
console.log(dia, mes, born)



