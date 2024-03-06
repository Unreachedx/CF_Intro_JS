let pokemonList = [
  {
    name: 'Charizard',
    height: 1.7,
    type: ['Fire', 'Flying']
  },
  {  
  name: 'Blastoise',
  height: 1.6,
  type: ['Water']
  },
  {
    name: 'Arcanine',
    height: 1.9,
    type: ['Fire'] 
  },
  {
    name: 'Squirtle',
    height: 1,
    type: ['Water']
  }
];


for (let i = 0; i < pokemonList.length; i++) {
  let output = '<div class="pokemonName">' + pokemonList[i].name + "  " + pokemonList[i].height + "  " + pokemonList[i].type;

  if (pokemonList[i].height > 1.5) {
    output += ' - This is really a big Pokemon';
  }

  output += '</div>';
  document.write(output);
}

pokemonList.forEach(function(pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.height + ' This Height' +  'and its type is '  + pokemon.type);
});