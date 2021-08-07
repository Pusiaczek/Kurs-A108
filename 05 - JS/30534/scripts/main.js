const myParagraph = document.querySelector("p");

function addDesc() {
    myParagraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illo molestias beatae porro illum accusantium laboriosam nam aspernatur nostrum rem rerum, quos minus amet est labore itaque at quod praesentium maxime aperiam cupiditate maiores consequatur voluptates? Eveniet expedita obcaecati doloremque?";
}

function deleteDesc() {
    myParagraph.textContent = "";
}

document.getElementById("dodaj").onclick = addDesc;
document.getElementById("usun").onclick = deleteDesc;