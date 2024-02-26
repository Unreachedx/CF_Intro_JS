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
  document.write('<p class="pokemonName">' + pokemonList[i].name + " " +'</p>');
}

for (let i = 0; i <pokemonList.length; i++) {
  document.write('<p class="pokemonHeight">' + pokemonList[i].height + " " + '</p>');
}