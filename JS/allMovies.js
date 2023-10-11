let allMovies = JSON.parse(localStorage.getItem("allMovies"));

console.log(allMovies);

function sortMovies() {
    allMovies.sort((a, b) => {
        return b.rating - a.rating;  
    });

    displayMovies();
}

// Function to display movies
function displayMovies() {
    let main_container = document.querySelector(".main");
    main_container.innerHTML = '';  
    for (let movie in allMovies) {
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
    }
}


displayMovies();

