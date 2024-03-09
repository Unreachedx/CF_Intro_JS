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

  function showDetails(pokemon) {
    console.log(pokemon);
  };

  function addListItem(pokemon) {
    let pokemon_list = document.querySelector('.pokemon-container')

  pokemonRepository.getAll().forEach((pokemon) => {
  let listItem = document.createElement('li')
  let button = document.createElement('button')
  button.innerText = pokemon.name;
  button.classList.add('pokemon-button')
  listItem.appendChild(button);
  pokemon_list.appendChild(listItem);
  button.addEventListener('click', function () {
   showDetails(pokemon);
  });
})}


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  }


})()

let newPokemon = {
  name: 'Pikachu',
  height: 0.4,
  type: ['Electric']
};

pokemonRepository.add(newPokemon);
pokemonRepository.addListItem();
