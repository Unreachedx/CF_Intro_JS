let pokemonRepository=function(){let t=[];function e(e){"object"==typeof e&&"name"in e?t.push(e):console.error('Invalid input. Only objects with a "name" property can be added to the pokemonList.')}function n(){return t}return{add:e,loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){e({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error("Error loading Pokemon list:",t)})},getAll:n,addListItem:function t(e){let n=document.querySelector(".pokemon-container"),o=document.createElement("li"),i=document.createElement("button");i.classList.add("list-group-item"),i.innerText=e.name,i.setAttribute("data-target","#exampleModal"),i.setAttribute("data-toggle","modal"),o.appendChild(i),n.appendChild(o),i.addEventListener("click",function(){(function t(e){var n;fetch((n=e).detailsUrl).then(function(t){return t.json()}).then(function(t){return n.imageUrl=t.sprites.front_default,n.height=t.height,n.types=t.types,n}).catch(function(t){console.error("Error loading Pokemon details:",t)}).then(function(t){var e,n,o;e=t.name,n=`Height: ${t.height} | Types: ${t.types.map(t=>t.type.name).join(", ")}`,o=t.imageUrl,$("#modal-title").text(e),$("#modal-text").text(n),$("#modal-image").attr("src",o),$("#exampleModal").modal("show"),modalTitle.empty(),modalBody.empty()}).catch(function(t){console.error("Error fetching Pokemon details:",t)})})(e)})}}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});