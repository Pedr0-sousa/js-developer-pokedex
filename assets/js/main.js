const pokemonLi = document.getElementById('pokeList')
const loadMoreBtn = document.getElementById('loadBtn')
const limit = 24
let offset = 0

const maxPokemon = 151

loadPokemonItens(offset, limit)


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="gridPokemonsList ${pokemon.type} "onClick=redirectToPokemonDetail(${pokemon.id})>
            
            <a class="linkNewPage" href="#" onclick="window.location='./pokeDetailPage.html'">
                <p class="numberPokemon">#${pokemon.id}</p>
                <p class="namePokemon">${pokemon.name}</p>
        
                <div class="detailPokemon">

                <ol class="typesPokemon">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img class="imgPokemon" src="${pokemon.photo}" alt="${pokemon.name}">
                </div>              
            </li>`)
        .join('')
        pokemonLi.innerHTML += newHtml
    })   
}

loadMoreBtn.addEventListener('click', () => {
    offset += limit
    const valuePokemon = offset + limit

    if (valuePokemon >= maxPokemon){
        const newLimit = maxPokemon - offset
        loadPokemonItens(offset, newLimit)
        
        loadMoreBtn.parentElement.removeChild(loadMoreBtn)
    }else{
        loadPokemonItens(offset, limit)
    }
})

function redirectToPokemonDetail(pokemon) {
    window.location.href = `./pokeDetailPage.html?pokemon=${pokemon}`
}
