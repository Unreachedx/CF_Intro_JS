let pokemonRepository = (function () {

  let pokemonList = [   {
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
  }]

  function add(pokemon) {
    pokemonList.push(pokemon);
  };
  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  }

})()

let newPokemon = {
  name: 'Pikachu',
  height: 0.4,
  type: ['Electric']
};

pokemonRepository.add(newPokemon);

pokemonRepository.getAll().forEach((pokemon) => {
  let output = '<div class="pokemonName">' + pokemon.name + "  " + pokemon.height + "  " + pokemon.type;

  if (pokemon.height > 1.5) {
    output += ' - This is really a big Pokemon';
  }

  output += '</div>';
  document.write(output);
});


