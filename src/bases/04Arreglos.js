// Arreglos de javascript
//Coleccion de informacion que se encuentra en una misma variable

// const arreglo = new Array(100);

    const arreglo = [1,2,3,4,5];
    // arreglo.push(1)
    // arreglo.push(2)
    // arreglo.push(3)

    let arreglo2 = [...arreglo, 7];
    let arreglo3 = arreglo2.map(function(numero){
        return numero *2;
    });
    // arreglo2.push(7)

console.log(arreglo)
console.log(arreglo2);




console.log('*************')

//ejemplo propio

const numeros = [1,2,3];
// numeros.push(4)
let masNumeros = [...numeros,4,5,6,7];
// masNumeros.push(5)


console.log(numeros)
console.log(masNumeros)

console.log('*******************')
console.log(arreglo3)

