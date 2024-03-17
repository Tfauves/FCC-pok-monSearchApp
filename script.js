const elements = {
  pokemonID: document.getElementById("pokemon-id"),
  pokemonName: document.getElementById("pokemon-name"),
  spriteContainer: document.getElementById("sprite-container"),
  types: document.getElementById("types"),
  height: document.getElementById("height"),
  weight: document.getElementById("weight"),
  hp: document.getElementById("hp"),
  attack: document.getElementById("attack"),
  defense: document.getElementById("defense"),
  specialAttack: document.getElementById("special-attack"),
  specialDefense: document.getElementById("special-defense"),
  speed: document.getElementById("speed"),
  searchForm: document.getElementById("search-form"),
  searchInput: document.getElementById("search-input"),
};

const displayPokemon = (data) => {};

const resetDisplay = () => {
  const sprite = document.getElementById("sprite");
  if (sprite) sprite.remove();
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getPokemon();
});
