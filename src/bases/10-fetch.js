const apiKey = 'xVX4RafnHPcj3JT68ROmo5BzFFNAQR3G';



const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey}`);

peticion.then( resp => resp.json())
    // console.log(resp);
//     resp.json().then(data =>{
//         console.log(data)
//     })
// }
    .then(({data}) => {

    const {url} = data.images.original;

    // console.log(url);
    const img = document.createElement('img');
    img.src =url;
    document.body.append(img)

})
 .catch(console.warn);