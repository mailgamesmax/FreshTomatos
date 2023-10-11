window.addEventListener("load", () => {


    const admin = {
        name: "admin",
        password: "admin",
        email: "admin@admin.admin"
    };

    let lotr = {
        name: "Lord Of The Rings",
        rating: "9.8",
        genre: "Fantasy/Adventure",
        imagePath: "/images/lord.jpg"
    };
    
    let interstellar = {
        name: "Interstellar",
        rating: "9.9",
        genre: "Sci-fi/Adventure",
        imagePath: "/images/inter.jpg"
    };
    
    let seven = {
        name: "Seven",
        rating: "9.7",
        genre: "Crime/Mystery",
        imagePath: "/images/seven.jpg"
    };
    
    let darkKnight = {
        name: "Dark Knight",
        rating: "9.9",
        genre: "Action/Adventure",
        imagePath: "/images/the.jpg"
    };
    
    let oppenheimer = {
        name: "Oppenheimer",
        rating: "9.6",
        genre: "Drama/History",
        imagePath: "/images/open.jpg"
    };
    
    let theRoom = {
        name: "The Room",
        rating: "999",
        genre: "Masterpiece",
        imagePath: "/images/room.jpg"
    };


    let users = {
        "email": ["password", "name"],
        "admin": ["admin", "admin"]
    };
    
    let allMovies = [];
    allMovies.push(lotr, interstellar, seven, darkKnight, oppenheimer, theRoom);

    let allRegisteredTomatosUsers = [admin];

    localStorage.allMovies = JSON.stringify(allMovies);
    localStorage.allRegisteredTomatosUsers = JSON.stringify(allRegisteredTomatosUsers);
    console.log("Local Storage filled");

    let moviesCount = allMovies.length;
    localStorage.moviesCount = moviesCount;
});