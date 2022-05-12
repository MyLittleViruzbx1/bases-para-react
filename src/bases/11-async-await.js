// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

const getImagen = async() => {

    try {

        const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
}

 getImagen();

 
 // const getImagenPromesa = () => new Promise(resolve => resolve(`https://asdkflajflkj/com`));
// getImagenPromesa().then(console.log);

const getImange = async() =>{
    // return `https://asdkflajflkj/com`;

   try{
    const apiKey = 'xVX4RafnHPcj3JT68ROmo5BzFFNAQR3G';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey}`);
    const {data} = await resp.json()


    const {url} = data.images.original;
    const img = document.createElement('img');
        img.src =url;
        document.body.append(img)


    console.log(data)
   }catch(err){
       //manejo del error
       console.err(err)
   }
}

getImange() 
// console.log(getImange())
