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

const displayPokemon = (data) => {
  elements.pokemonName.textContent = data.name.toUpperCase();
  elements.pokemonID.textContent = `#${data.id}`;
  elements.weight.textContent = `Weight: ${data.weight}`;
  elements.height.textContent = `Height: ${data.height}`;
  elements.spriteContainer.innerHTML = `
      <img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">
    `;

  elements.hp.textContent = data.stats[0].base_stat;
  elements.attack.textContent = data.stats[1].base_stat;
  elements.defense.textContent = data.stats[2].base_stat;
  elements.specialAttack.textContent = data.stats[3].base_stat;
  elements.specialDefense.textContent = data.stats[4].base_stat;
  elements.speed.textContent = data.stats[5].base_stat;

  elements.types.innerHTML = data.types
    .map((obj) => `<span class="type ${obj.type.name}">${obj.type.name}</span>`)
    .join("");
};

const resetDisplay = () => {
  const sprite = document.getElementById("sprite");
  if (sprite) sprite.remove();

  elements.pokemonName.textContent = "";
  elements.pokemonID.textContent = "";
  elements.types.innerHTML = "";
  elements.height.textContent = "";
  elements.weight.textContent = "";
  elements.hp.textContent = "";
  elements.attack.textContent = "";
  elements.defense.textContent = "";
  elements.specialAttack.textContent = "";
  elements.specialDefense.textContent = "";
  elements.speed.textContent = "";
};

const getPokemon = async () => {
  try {
    const pokemonNameOrId = elements.searchInput.value.toLowerCase();
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
    );
    const data = await response.json();
    displayPokemon(data);
  } catch (err) {
    resetDisplay();
    alert("Pokémon not found");
    console.log(`Pokémon not found: ${err}`);
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getPokemon();
});
