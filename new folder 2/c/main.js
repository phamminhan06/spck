const API_KEY = "4269652c5e1b6a66a34f9d3d16ecc098";
const searchInput = document.getElementById("search-input");
const type = document.querySelector(".type");
const name = document.querySelector(".name");
const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const bio = document.querySelector(".bio");
const image = document.querySelector(".image");
const DEFAULT_VALUE = "DEFAULT_VALUE"

searchInput.addEventListener("change", (event) => {
    fetch(
        `https://pokeapi.co/api/v2/pokemon/${event.target.value}`
    )
    .then((response) => response.json())
    .then((data) => {
        console.log("data", data);
        name.innerHTML = data.name || DEFAULT_VALUE;
        height.innerHTML = data.height || DEFAULT_VALUE;
        weight.innerHTML = data.weight || DEFAULT_VALUE;
        type.innerHTML = data.types[0].type.name || DEFAULT_VALUE;

        image.src =
        data.sprites.other.dream_world.front_default || DEFAULT_VALUE;
    });
});