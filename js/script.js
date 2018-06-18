// JAVASCRIPT CODE

/* 
This will load a pokemon from the fakepokemon json file 
when the window loads. 
*/
window.onload = function(){

  const submit = document.querySelector('#submit');

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    // getting the number entered into the input and storing it in number
    const number = document.querySelector('#searchbynum').value;

    console.log(number);

    // Search the API for the number and return back the pokemon with it.
    
    //---Header setup. Not needed for local fetching.---\\
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type","application/json");
    // myHeaders.append("access-control-allow-origin", "*");

    // when using a new resource, add in headers to fetch
    fetch("./js/fakepokemonfile.json")
      .then(function(response){
        return response.json();
      }).then(function(thisJson){
        console.log(thisJson.types.length);

         // Will iterate through the types and put them all into a string 
        let types = "";
        for ( let x = 0; x < thisJson.types.length; x++ ){
          // if x is equal to 0 --- 1-1 = 0
          if ( x == thisJson.types.length-1 ){
            console.log('less than 1');
            types += thisJson.types[x].type.name;
          } else {
            console.log('more than 1');
            types += thisJson.types[x].type.name + "-";
          }
        }

      // Setting the details of the pokemon to the appropriate fields from response
      const pokemonimage = document.querySelector("#pokemon-img");
      const pokemonname = document.querySelector("#pokemon-details__name");
      const pokemontype = document.querySelector("#pokemon-details__type");

      pokemonimage.src = thisJson.sprites.front_default;
      pokemonname.innerText = thisJson.name.toUpperCase();
      pokemontype.innerText = types.toUpperCase();

   });

  });
  
};

