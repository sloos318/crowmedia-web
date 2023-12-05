var openButtonMenu = document.querySelector("header > button:nth-of-type(1)");
console.log("hi");
console.log(openButtonMenu);

var closeButtonMenu = document.querySelector("nav button:first-of-type");

var hamburgerMenu = document.querySelector("header nav:first-of-type");
// hierboven maken we een aantal variabelen aan, een is voor de knop die de actie moet laten beginnen, een is voor de knop in de nav die 
// het hamburgermenu af gaat sluiten en de laatste roept het hamburger menu zelf aan.

openButtonMenu.onclick = openMenu;
// hiermee geven we aan dat met een click een functie moet beginnen

function openMenu () {
    
    hamburgerMenu.classList.add("open");
}
// dit is de functie die de hamburger open maakt. Dit doet die door de geclasseerde nav.open aan te zetten.


closeButtonMenu.onclick = closeMenu;

function closeMenu() {
    hamburgerMenu.classList.remove("open");
}

// hier maken we een aantal constanten aan van de classes die we hebben gemaakt in de index.
const videoPlayer = document.querySelector(".video-player")
// de eerste gaat om de hele video en knop heen
const video = videoPlayer.querySelector(".video")
// dit is de video zelf
const playButton = videoPlayer.querySelector(".play-button")
// dit is de knop waarmee we het af kunnen laten spelen en stop kunnen zetten

playButton.addEventListener("click", (e) => {
    if(video.paused){
        video.play()
        e.target.textContent = "⏸️"
    } else {
        video.pause()
        e.target.textContent = "▷"
    }
})
// hier zetten we een addeventlistener op de knop. Die blijft altijd luisteren of er gedrukt is. We geven dan aan met (e) dat er een event gebeurt op de click
// daarna geven we met een if, else statement aan dat de video op de click aan of uit gezet moet worden en dat de text van de knop moet veranderen 
// https://www.youtube.com/watch?v=YheuzX6zmpg