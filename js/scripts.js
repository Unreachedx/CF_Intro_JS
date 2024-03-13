let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    // Check if the parameter is an object before adding it to the list
    if (typeof pokemon === 'object' && "name" in pokemon
    /*  && "detailsUrl" in pokemon */) {
      pokemonList.push(pokemon);
    } else {
      console.error('Invalid input. Only objects can be added to the pokemonList.');
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem() {
    let pokemon_list = document.querySelector('.pokemon-container')

  pokemonRepository.getAll().forEach((pokemon) => {
  let listItem = document.createElement('li') 
  let button = document.createElement('button') // creates buttons to click on for each Pokemon in the array
  button.innerText = pokemon.name; // changes the name from the Button to the Pokemon
  button.classList.add('pokemon-button') // adds the class to every Button
  listItem.appendChild(button); 
  pokemon_list.appendChild(listItem);
  button.addEventListener('click', function () {
   showDetails(pokemon);
  });
})}

function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    // Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

function showDetails(item) {
  loadDetails(item).then(function () {
    console.log(item);
  });
}

  return {
    add: add,
    loadList: loadList,
    getAll: getAll,
    addListItem: addListItem
  }

})()

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
