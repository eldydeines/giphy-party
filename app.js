//Giphy Party
//Eldy Deines
//This app utilizes the API GIPH and requires an authenticated token to use.
//Upon getting token, I created the necessary string to request Giph based on user input.
//Then, called AddGiph to append new image to DOM
//Last, there is a button to remove all Giphs upon user click.

//Function call using axios async and await. Call made using API string literal.
//Upon receipt, then we can send the retrieved image url to function AddGiph.
async function getGiph(tag) {
    const api_key = 'M8W5pvglriDNnPrpwr4e22LVQv0bNDLw';
    const res = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=M8W5pvglriDNnPrpwr4e22LVQv0bNDLw&tag=${tag}&rating=g`);
    addGiph(res.data.data.image_url);
}

//AddGiph - appends a new Img element with the src to the DIV in the DOM
//also added bootstrap classes to the new image
function addGiph(image) {
    const div = document.querySelector('#giphs-div');
    const newGiph = document.createElement("img");
    newGiph.setAttribute("src", image);
    newGiph.setAttribute('class', "img-thumbnail m-1")
    div.appendChild(newGiph);
}

//gets form input and sends to async function
const form = document.querySelector('#giph-form');
form.addEventListener("submit", function (e) {
    const input = document.querySelector('#giph-input');
    e.preventDefault();
    getGiph(input.value);
    input.value = '';
})

//removes all image element children
const button = document.querySelector("#remove");
button.addEventListener("click", function () {
    const div = document.querySelector('#giphs-div');
    div.innerHTML = "";
})
