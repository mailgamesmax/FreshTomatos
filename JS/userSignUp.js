//selectinam forma
const signUpForm = document.getElementById("signUpForm");

// submit event (validacija ir user kūrimas)
signUpForm.addEventListener("submit", function(event) {
    event.preventDefault(); //apsauga nuo autorefresh

    // ivesties reikšmės
    const inputName = document.getElementById("inputName").value;
    const inputPassword = document.getElementById("inputPassword").value;
    const inputEmail = document.getElementById("inputEmail").value;

    //ivesto el p tikrinimas
    if (!isValidEmail(inputEmail)) {
        alert("įvestas blogas el p");
        return;
    }    
    
    //user sukurimas
    const tomatosUser = {
        name: inputName,
        password: inputPassword,
        email: inputEmail,
    };

    // user saugojimas localStorage - imituojam individualų PC
    localStorage.setItem("tomatosUser", JSON.stringify(tomatosUser));

    // userio įrašymas į "severį"
    AddNeWRegisteredUser(tomatosUser);

    alert("Congratulations - registered");    
});

//email regex
function isValidEmail(anyEmail) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(anyEmail);    
}

// userių saugojimas localStorage vietoj serverio
function AddNeWRegisteredUser(newUser) {    
    const currentTomatosUsers = JSON.parse(localStorage.getItem('allRegisteredTomatosUsers')) || []; // parsinam i objekta issaugotus localStorage userius, jeu null - kuriam tuscia lista
    currentTomatosUsers.push(newUser) //pridedam nauja useri i egzistuojanti objektu lista
    localStorage.setItem("allRegisteredTomatosUsers", JSON.stringify(currentTomatosUsers)); //issaugom nauja user lista localeStorage
}