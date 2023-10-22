async function ShowPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-form/25')
    const pokemon = await response.json()
    console.log(pokemon.name)
    console.log(pokemon.sprites.front_default)
    document.body.innerHTML += `<div>
    <p>${pokemon.name}</p>
    <img src='${pokemon.sprites.front_default}'></img>
    </div>`
}

ShowPokemon()