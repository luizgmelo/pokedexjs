async function ShowTwentyPokemon() {
    for (let i = 1; i < 21; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${i}`)
        const pokemon = await response.json()
        console.log(pokemon.name)
        console.log(pokemon.sprites.front_default)
        

        const pokedex = document.querySelector('.pokedex');

        const card = document.createElement('div')
        card.className = 'pokemon-card'

        const name = document.createElement('p');
        const pokemonName = pokemon.name
        name.className = 'pokemon-name'
        name.textContent = pokemonName[0].toUpperCase() + pokemonName.substring(1);       
        card.appendChild(name) 
       

        const types = pokemon.types
        card.className += ' ' + pokemon.types[0].type.name
        types.forEach(pokemon => {
            const type = document.createElement('p');
            type.textContent = pokemon.type.name;
            type.className = 'type';
            type.className += ' ' + pokemon.type.name;
            card.appendChild(type);
        })
       

        const img = document.createElement('img');
        img.setAttribute('src', pokemon.sprites.front_default)
        card.appendChild(img)

        pokedex.appendChild(card)
    }
   
}

ShowTwentyPokemon()
