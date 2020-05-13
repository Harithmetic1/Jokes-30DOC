var joke = document.querySelector('#jokePreview');

async function gettingJoke(){
    const gettheJoke = await fetch("https://icanhazdadjoke.com/", {
        headers : {
       "Accept" : "application/json"
   } 
  
})
const gotJoke = await gettheJoke.json();
console.log(gotJoke)

joke.innerHTML = gotJoke.joke;
}

gettingJoke();

setInterval(async function getJoke(){
    const gettheJoke = await fetch("https://icanhazdadjoke.com/", {
        headers : {
       "Accept" : "application/json"
   } 
  
})
const gotJoke = await gettheJoke.json();
console.log(gotJoke)

joke.innerHTML = gotJoke.joke;
}, 20000)
 


