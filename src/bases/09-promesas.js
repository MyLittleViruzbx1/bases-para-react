import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () =>  {
//         // Tarea
//         // importen el 
//         const p1 = getHeroeById(2);
//         resolve( p1 );
//         // reject( 'No se pudo encontrar el héroe' );
//     }, 2000 )

// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            // Tarea
            // importen el 
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 2000 )
    
    });


}


getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );



    // const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() =>{
//         console.log("2 segundos despues")
//     },2000)
// });

import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() =>{
        // console.log("2 segundos despues")
        // resolve()
        //Tarea
        //importen el

//        const heroe = getHeroeById(2)
    //    console.log(heroe)
//     resolve(heroe)
    // reject('NO se pudo encontrar el heroe')

//     },2000)
// });

// promesa.then( (heroe) =>{
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err))


const getHeroeByIdAsync = (id) =>{

 return new Promise( (resolve, reject) => {
    setTimeout(() =>{
        // console.log("2 segundos despues")
        // resolve()
        //Tarea
        //importen el

       const heroe = getHeroeById(id)
    //    console.log(heroe)
    //    resolve(heroe)
    // reject('NO se pudo encontrar el heroe')

        if(heroe) {
            return resolve(heroe);
        }else{
            reject('NO se pudo encontrar el heroe')
        }

    },2000)
});
    // ya no se usa mucho
    // return promesa;
}

getHeroeByIdAsync(11)
    // .then( heroe => console.log('heroe', heroe))
    .then(console.log)
    .catch((err => console.warn(err)));
