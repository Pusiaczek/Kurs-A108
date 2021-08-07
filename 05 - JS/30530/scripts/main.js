const myParagraph = document.getElementById("opis");
const myButton = document.querySelector("button");

function dodajOpis(p) {
    p.textContent = "Opis fajny jest!"
}

myButton.onclick = () => dodajOpis(myParagraph);