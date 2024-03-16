let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function showModal(title, text, imageUrl) {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.add('is-visible');
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    let imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = title;

    

    modal.appendChild(titleElement);
    modal.appendChild(imageElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    modal.appendChild(closeButtonElement);

    modalContainer.addEventListener('click', function (event) {
      if (event.target === modalContainer) {
        hideModal();
      }
    });

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });
  }

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
    modalContainer.innerHTML = '';
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
    let pokemon_list = document.querySelector('.pokemon-container');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    pokemon_list.appendChild(listItem);
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

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
