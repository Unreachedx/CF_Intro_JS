let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function showModal(title, text, imageUrl) {
    $('#modal-title').text(title);
    $('#modal-text').text(text);
    $('#modal-image').attr('src', imageUrl);
    $('#exampleModal').modal('show');

    modalTitle.empty();
    modalBody.empty();
  }

  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.error('Invalid input. Only objects with a "name" property can be added to the pokemonList.');
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-container');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    
    button.classList.add('list-group-item');
    button.innerText = pokemon.name;

    // Set data-target and data-toggle attributes for Bootstrap modal
    button.setAttribute('data-target', '#exampleModal');
    button.setAttribute('data-toggle', 'modal');

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    // Add click event listener to show details
    button.addEventListener('click', function () {
        showDetails(pokemon);
    });
}
  
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error('Error loading Pokemon list:', e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        return item; // Return the item with details
      })
      .catch(function (e) {
        console.error('Error loading Pokemon details:', e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon)
      .then(function (pokemonWithDetails) {
        showModal(
          pokemonWithDetails.name,
          `Height: ${pokemonWithDetails.height} | Types: ${pokemonWithDetails.types.map(type => type.type.name).join(', ')}`,
          pokemonWithDetails.imageUrl
        );
      })
      .catch(function (error) {
        console.error('Error fetching Pokemon details:', error);
      });
  }

  return {
    add: add,
    loadList: loadList,
    getAll: getAll,
    addListItem: addListItem
  };
})();

// Call loadList and addListItem
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});