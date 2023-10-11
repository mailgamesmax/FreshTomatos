const movieForm = document.querySelector("#newMovie");

movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newMovie = {
        name: e.target.elements.movieName.value,
        rating: e.target.elements.movieRating.value,
        genre: e.target.elements.movieGenre.value,
        image: e.target.elements.movieImage.value
    };

    let allMovies = JSON.parse(localStorage.getItem("allMovies"));
    allMovies.push(newMovie);
    localStorage.allMovies = JSON.stringify(allMovies);
    alert("Filmas pridėtas!");
});

