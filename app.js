console.log("Hello World!\n==========\n");

let form = document.querySelector("#searchForm");
let searchInput = document.querySelector("#gifTerm");
let img = document.querySelector("img");
const API_KEY = "8TTexu02A0VZiV5vJbaoBAUdBCFVSEoF";
form.addEventListener("submit", (e) => {
  e.preventDefault();

  getGif();
});

function getGif() {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchInput.value}`
  )
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      console.log(body);
      img.src = body.data.images.original.url;
      if (body.data.user && body.data.user.unsername) {
        img.alt = `${body.data.title} by ${body.data.user.unsername} `;
        img.title = `${body.data.title} by ${body.data.user.unsername} `;
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
