function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomPokemonId = randomIntFromInterval(1, 151);

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const pokemonName = document.getElementById("pokemon-name");
const pokemonImgDiv = document.getElementById("pokemon-img");

async function getPokemon(pokemonId) {
    return await fetch(`${apiUrl}${pokemonId}`)
    .then((res) => {
        if (!res.ok) {
            throw new Error("Error getting pokemon");
        } else {
            return res.json();
        }
    })
    .then((result) => {
        console.log(result);
        pokemonName.innerText = result.name;
        pokemonImgDiv.innerHTML = `<img src="${result.sprites.other.home.front_default}">`;
    })
    .catch((err) => {
        return err.message;
    })
}

getPokemon(randomPokemonId);