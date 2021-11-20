import { getHeroesById } from './bases/09Import';

console.log(heroes)
const promesa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        //TAREA 
        //import el
        const heroe = getHeroesById(2);
        // resolve();
        // console.log('2 Segundos despues');
        console.log(heroe)
    },2000)
});

promesa.then('Then de la promesa');

