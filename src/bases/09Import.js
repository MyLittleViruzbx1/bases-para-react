import { heroes } from './data/heroes';

// console.log(heroes);


// const getHeroeById = (id) =>{
//     return heroes.find((heroe) => {
//       if(heroe.id===id){
//           return true; //
//       }else{
//           return false; //
//       }
//     })
// }


// const getHeroeById = (id) =>{
//     return heroes.find((heroe) => heroe.id === id);
// }


export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(5)); 

// console.log("*******************************");

//find?, filter
export const getHeroesByOwner = ( owner )=> heroes.filter( (heroe)=> heroe.owner === owner);
// console.log( getHeroesByOwner('DC')); 

