async function ShowTenPokemon() {
    for (let i = 1; i < 11; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${i}`)
        const pokemon = await response.json()
        console.log(pokemon.name)
        console.log(pokemon.sprites.front_default)
    
        const pokedex = document.querySelector('.pokedex');

        const card = document.createElement('div')
        card.className = 'pokemon-card'


        const name = document.createElement('p');
        const node = document.createTextNode(pokemon.name);
        name.appendChild(node);
    
        const img = document.createElement('img');
        img.setAttribute('src', pokemon.sprites.front_default)
        
        card.appendChild(name)
        card.appendChild(img)
        pokedex.appendChild(card)
    }
   
}

ShowTenPokemon()
