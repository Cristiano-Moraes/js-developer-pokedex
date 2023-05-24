const urlParams = new URLSearchParams(window.location.search);
const idPoke = urlParams.get("idPoke");
const pokemonDivShow = document.getElementById('pokemonDiv');
const pokemonTit = document.getElementById('titulo-pokemon');


function convertPokemonToDiv(pokemon) {
	console.log(pokemon);
	return `
	<div class="pokemonPage ${pokemon.type}"> 
		<img class="detailPicture img" src="${pokemon.photo}" alt="${pokemon.name}">
	</div>

	<div class="detail-container">

		<div class="detail-item">
			<span class="bottonBar itens">#${pokemon.number}</span>
			<span class="bottonBar itens">${pokemon.name}</span>
		</div>
		<div class="detail-item">
			<span class="bottonBar itens">Altura: ${pokemon.height}</span>
			<span class="bottonBar itens">Peso: ${pokemon.weight}</span>
			<span class="bottonBar itens">Tipo: ${pokemon.type}</span>
		</div>
		<div class="detail-item">
			<ul class="listPadding">
				${pokemon.abilities.map((ability) => `<li>${ability}</li>`).join('')}
			</ul>
			<ul class="listPadding">
				${pokemon.stats.map((stats) => ` <card-stats-bar 
				nameStat=${stats.nameStat} 
				valueStat=${stats.valueStat}
				type="${pokemon.type}"></card-stats-bar>`).join('')}
				
			</ul>
		</div>
	</div>
    `;
}

function loadTituloDetail(){
	pokemonTit.innerText = "<h2> pokemon:</h2>";
}

function loadPokemonDetail(){
	fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`)
                .then((response) => response.json())
		.then((pokemon)=> {
			poke = new Pokemon();
			statsResume = [];
			poke.number = pokemon.id;
			poke.name = pokemon.name;
			poke.weight = pokemon.weight;
			poke.height = pokemon.height;
			poke.types = pokemon.types.map((typeSlot) => typeSlot.type.name);
			poke.type = poke.types[0];

			poke.moves = pokemon.moves.map((mapMoves) => mapMoves.move.name);

			poke.abilities = pokemon.abilities.map((mapAux) => mapAux.ability.name);
			pokemon.stats.forEach((obj) => {
				aux = new StatsType();
				aux.nameStat = obj.stat.name;
				aux.valueStat = obj.base_stat;
				statsResume.push(aux);	
			});
			statsResume.forEach( ( aux ) => {
				console.log(aux.nameStat+" = "+aux.valueStat);
			
			});
			
			poke.stats = statsResume;
			
			poke.photo = pokemon.sprites.front_default;
			console.log(pokemon);
			
			const tempDiv = document.createElement('div');
			tempDiv.innerHTML += convertPokemonToDiv(poke);
        		pokemonDivShow.appendChild(tempDiv);

		}
	);
}

function loadPokemonDetail2() {
    pokeData = new Pokemon();
    pokeData = pokeApi.getPokemonDetail(idPoke);
    console.log(pokeData);
}

loadPokemonDetail();

/*
<li><span>${stats.nameStat} = ${stats.valueStat}</span></li>
*/