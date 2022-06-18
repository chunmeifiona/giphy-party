console.log("Let's get this party started!");


async function getGiphy(term) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    const length = res.data.data.length;
    console.log(length);
    let randomIdx = Math.floor(Math.random() * length) + 1;
    let imgUrl = res.data.data[randomIdx].images.original.url;

    const gifs = document.querySelector(".gif-show");
    const giphy = document.createElement("img");
    giphy.setAttribute("src", imgUrl);
    gifs.append(giphy);
}
//getGiphy()
const form = document.querySelector("#searchform")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.querySelector('#search');
    getGiphy(input.value);
    input.value = "";
})

const rmvAllGifs = document.querySelector(".rmv-btn");
rmvAllGifs.addEventListener("click", function (e) {
    const giphys = document.querySelectorAll("img");
    for (let giphy of giphys) {
        giphy.remove();
    }
})