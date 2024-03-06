let pokemonRepository = (function () {

  let pokemonList = [
    // Array of pokemon for the Page
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
  }]

  function add(pokemon) {
    // Check if the parameter is an object before adding it to the list
    if (typeof pokemon === 'object' && pokemon !== null) {
      pokemonList.push(pokemon);
    } else {
      console.error('Invalid input. Only objects can be added to the pokemonList.');
    }
  }

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

  // if pokemon.height is bigger then 1.5 they get a extra text to their Name
  if (pokemon.height > 1.5) {
    output += ' - This is really a big Pokemon';
  }

  output += '</div>';
  document.write(output);
});


