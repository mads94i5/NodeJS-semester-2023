const pokemonNameDiv = document.getElementById("pokemon-name");
const pokemonImgDiv = document.getElementById("pokemon-img");
const pokemonStrengthDiv = document.getElementById("pokemon-strength");

console.log("fetching /battlepokemon")
fetch("/battlepokemon")
    .then((response) => {
        if (!response.ok) {
            throw new Error("HTTP Error!");
        }
        return response.json();
    })
    .then((response) => {
        console.log("/battlepokemon data:", response);
        pokemonNameDiv.innerText = response.data.name;
        pokemonImgDiv.innerHTML = `<img src="${response.data.img}">`;
        pokemonStrengthDiv.innerText = "Strength: " + response.data.strength;
    })
    .catch((error) => {
        return error.message;
    });