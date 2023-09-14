
const pokeID = window.location.search.split('=')[1];
const getDivDetail = document.querySelector('.sectionContent')
const colorBody = document.querySelector('.bodySection')


/*
getDivDetail.className = `sectionContent ${pokemon.types[0].type.name}`;
const titleDetails = document.querySelector('.headerTitle')
titleDetails.innerHTML = `${pokemon.name}`;*/

async function getPokemonDetail() {    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeID}/`    
    const response = await fetch(url)
    const data = await response.json()
    return data
};

async function convertPokemon() {
    const pokemon = await getPokemonDetail();
    colorBody.className = `bodySection ${pokemon.types[0].type.name}`
    getDivDetail.innerHTML = `
    <header class="headerSection"> 
        <h1 class="headerTitle"> ${pokemon.name}</h1>
        <div class="imgPokeDetail">
            <img class="img" src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
    </header>        
<section class="sectionContentDetail">
    <div class="textSection ${pokemon.types[0].type.name}">
        <div class="types">
                <p class="textTitle typesTextTitle">Tipo</p>
                <div class="type">
        ${
            pokemon.types.map((type) => 
            `
            <p class="typeText ${type.type.name}">${type.type.name}</p> 
                `).join('')                             
        }
        </div>
        </div>       
        <div class="status">
            <p class="status textTitle">Status</p>
            <div class="statusDetail">
                <p class="textHp textTitle textStatus">HP</p>
                <p class="hp text">${pokemon.stats[0].base_stat}</p>
                <p class="textAtk textTitle textStatus">Attack</p>
                <p class="atk text">${pokemon.stats[1].base_stat}</p>
                <p class="textDef textTitle textStatus">Defense</p>
                <p class="def text">${pokemon.stats[2].base_stat}</p>
                <p class="textSpa textTitle textStatus">Special Attack</p>
                <p class="spa text">${pokemon.stats[3].base_stat}</p>
                <p class="textSpd textTitle textStatus">Special Defense</p>
                <p class="spd text">${pokemon.stats[4].base_stat}</p>
                <p class="textSpe textTitle textStatus">Speed</p>
                <p class="spe text">${pokemon.stats[5].base_stat}</p>                
                <p class="textWgt textTitle textStatus">Weight</p>
                <p class="wgt text">${pokemon.weight / 10}<span class= "textKg">Kg</span></p>
                
            </div>
        </div>
        
       
    </div>
    
    </section>    
        `
}

convertPokemon();