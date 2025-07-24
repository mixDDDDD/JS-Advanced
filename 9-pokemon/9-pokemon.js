'use strict';

const pokemonRequest = new XMLHttpRequest();
pokemonRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');

pokemonRequest.addEventListener('load', function() {
  const pokemonData = JSON.parse(this.responseText);
  const abilityUrl = pokemonData.abilities[0].ability.url;

  const abilityRequest = new XMLHttpRequest();
  abilityRequest.open('GET', abilityUrl);
  abilityRequest.addEventListener('load', function() {
    const abilityData = JSON.parse(this.responseText);

    for (const entry of abilityData.effect_entries) {
      if (entry.language.name === 'en') {
        console.log(entry.effect);
        break;
      }
    }
  });
  abilityRequest.send();
});

pokemonRequest.send();

