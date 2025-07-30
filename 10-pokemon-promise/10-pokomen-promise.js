'use strict';

function getData(url, errorMessage) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}, ${errorMessage}`)
            }
            return response.json()
        })
}

getData("https://pokeapi.co/api/v2/pokemon/ditto", "Can not pokemon info")
    .then(({abilities}) => {
        return getData(abilities[0].ability.url, "Can not get pokemon abilities")
        },
    )
    .then(({effect_entries}) => {
        const { effect } = effect_entries.find(({ language }) => language.name === 'en');
        if (effect) console.log(effect);
    })
    .catch(error => console.log(error.message));