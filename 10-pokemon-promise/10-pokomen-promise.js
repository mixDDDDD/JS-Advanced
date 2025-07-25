'use strict';

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(pokemonData => {
    const abilityUrl = pokemonData.abilities[0].ability.url;
    return fetch(abilityUrl);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(abilityData => {
    for (const entry of abilityData.effect_entries) {
      if (entry.language.name === 'en') {
        console.log(entry.effect);
        break;
      }
    }
  })
  .catch(error => {
    console.error('Произошла ошибка:', error);
  });
