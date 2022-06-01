var heading=document.createElement("div")
heading.setAttribute("id","heading")
heading.innerHTML=`<img src="poke.png" alt="">`
document.body.append(heading)
function pokemon_display(poke) {
    var name;
    var ability=[];
    var weight;
    var moves=[];
  var pokemon_ability=poke.abilities
  var pokemon_moves=poke.moves
  for(var i=0;i<1;i++){
    name=poke.name
  }
  for(var i=0;i<pokemon_ability.length;i++){
    ability[i]=pokemon_ability[i].ability.name
  }
  for(var i=0;i<1;i++){
     weight=poke.weight;
  }
  for(var i=0;i<pokemon_moves.length;i++){
    moves[i]=pokemon_moves[i].move.name
}
let div_pokemon = document.createElement("div");
div_pokemon.setAttribute("class","pokemon")
div_pokemon.innerHTML = `
<h3 >Pokemon Name : ${name}</h3>
<h3>Abilities : ${ability}  </h3>
<h3>Weight : ${ weight}</h3>
<h3>Moves : ${moves}</h3>`
 document.body.append(div_pokemon);
 }
async function getPokemon() {
  var pokemon_data = [];
  var pokemon = [];
  try {
    for (var index = 1; index <= 50; index++) {
      pokemon_data[index] = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index}`
      );
      pokemon[index] = await pokemon_data[index].json();
    }
  } catch (error) {
    alert("error")
  }
  pokemon.forEach((poke) => {
    pokemon_display(poke);
  })
}
getPokemon();