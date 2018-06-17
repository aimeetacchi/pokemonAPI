// JAVASCRIPT CODE

/* 
This will load a pokemon from the fakepokemon json file 
when the window loads. 
*/
window.onload = function(){

    //---Header setup. Not needed for local fetching.---\\
  // var myHeaders = new Headers();
  // myHeaders.append("Content-Type","application/json");
  // myHeaders.append("access-control-allow-origin", "*");

  // when using a new resource, add in headers to fetch
  fetch("./js/fakepokemonfile.json")
    .then(function(response){
      return response.json();
    }).then(function(thisJson){
      console.log(thisJson);

      // Will iterate through the types and put them all into a string 
      var types ="";
       for(var x=0; x < thisJson.types.length; x++){
        if(x == thisJson.types.length-1){
          types += thisJson.types[x].type.name;
        }else{
          types += thisJson.types[x].type.name + "-";
        }
       }
       
       // Setting the details of the pokemon to the appropriate fields from response

       document.getElementById("pokemon-img").src=thisJson.sprites.front_default;
       document.getElementById("pokemon-details__name").innerText=thisJson.name.toUpperCase();
       document.getElementById("pokemon-details__type").innerText=types.toUpperCase();
    })
};

