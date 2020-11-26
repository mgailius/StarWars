let planets = [];
let people = [];
let starships = [];

const UI = {
    img: document.getElementsByClassName("img"),
    name: document.getElementsByClassName("name"),
    heading: document.getElementsByClassName("heading"),
    description: document.getElementsByClassName("description"),
    property0: document.getElementsByClassName("property0"),
    property1: document.getElementsByClassName("property1"),
    property2: document.getElementsByClassName("property2")
}

UI.heading[0].addEventListener("click", () => {toggleDescription(0);});
UI.heading[1].addEventListener("click", () => {toggleDescription(1);});
UI.heading[2].addEventListener("click", () => {toggleDescription(2);});

function toggleDescription(current) {
    if (UI.heading[current].children[0].innerHTML) {
        UI.heading[current].children[1].classList.toggle("rotated");
        UI.description[current].classList.toggle("open");
    }
}

UI.img[0].addEventListener("click", displayPlanets);
UI.img[1].addEventListener("click", displayPeople);
UI.img[2].addEventListener("click", displayStarships);

function initApp() {
    importPlanets();
    importPeople();
    importStarships();
}

function importPlanets() {
    fetch("https://www.swapi.tech/api/planets").then(res => res.json()).then(data => {
        for (let i = 0; i < data.results.length; i++) {
            const url = (data.results[i].url);
            fetch(`${url}`).then(res => res.json()).then(data => {
                const planet = data.result.properties;
                planets[i] = planet;
            })    
        }         
    })  
}

function importPeople() {
    fetch("https://www.swapi.tech/api/people").then(res => res.json()).then(data => {
        for (let i = 0; i < data.results.length; i++) {
            const url = (data.results[i].url);
            fetch(`${url}`).then(res => res.json()).then(data => {
                const person = data.result.properties;
                people[i] = person;
            })    
        }         
    })  
}

function importStarships() {
    fetch("https://www.swapi.tech/api/starships").then(res => res.json()).then(data => {
        for (let i = 0; i < data.results.length; i++) {
            const url = (data.results[i].url);
            fetch(`${url}`).then(res => res.json()).then(data => {
                const ship = data.result.properties;
                starships[i] = ship;
            })    
        }         
    })  
}

function displayPlanets() {
    const random = Math.floor(Math.random() * planets.length);
    UI.img[0].style.backgroundImage = `url(img/planets/planet${random}.png)`;
    UI.name[0].innerHTML = `${planets[random].name}`;
    UI.property0[0].innerHTML = `${planets[random].climate}`;
    UI.property0[1].innerHTML = `${planets[random].diameter}`;
    UI.property0[2].innerHTML = `${planets[random].orbital_period}`;   
}
function displayPeople() {
    const random = Math.floor(Math.random() * people.length);
    UI.img[1].style.backgroundImage = `url(img/people/people${random}.jpg)`;
    UI.name[1].innerHTML = `${people[random].name}`;
    UI.property1[0].innerHTML = `${people[random].mass}`;
    UI.property1[1].innerHTML = `${people[random].birth_year}`;
    UI.property1[2].innerHTML = `${people[random].eye_color}`;   
}
function displayStarships() {
    const random = Math.floor(Math.random() * starships.length);
    UI.img[2].style.backgroundImage = `url(img/starships/starship${random}.jpg)`;
    UI.name[2].innerHTML = `${starships[random].name}`;
    UI.property2[0].innerHTML = `${starships[random].crew}`;
    UI.property2[1].innerHTML = `${starships[random].hyperdrive_rating}`;
    UI.property2[2].innerHTML = `${starships[random].starship_class}`;   
}

initApp();