let allMovies = JSON.parse(localStorage.getItem("allMovies"));

console.log(allMovies);
let main_container = document.querySelector(".main");

for(let movie in allMovies){
    
    main_container.innerHTML += 
        `<div class="movie-card">`+
            `<div class="movie-details">`+
                `<h2>${allMovies[movie].name}</h2>`+
                `<p>Žanras: ${allMovies[movie].genre}</p>`+
                `<div class="movie-rating">`+
                    `Įvertinimas: ${allMovies[movie].rating}`+
                `</div>`+
            `</div>`+
            `<img src="${allMovies[movie].imagePath}" alt="${allMovies[movie].name}">`+
        `</div>`;
};
