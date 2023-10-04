function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

let pokemon;

export async function battlePokemon() {
    if (pokemon === undefined || pokemon.strength <= 1) {
        await getPokemon(randomIntFromInterval(1, 151));
    }
    pokemon.strength -= 1;
    return pokemon;
}

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
        pokemon = {
            name: result.name.substring(0, 1).toUpperCase() + result.name.substring(1),
            img: result.sprites.other.home.front_default,
            strength: randomIntFromInterval(2, 10)
        }
        return pokemon;
    })
    .catch((err) => {
        return err.message;
    });
};