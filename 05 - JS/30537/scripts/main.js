function readData(){
    document.getElementById("name").textContent = document.getElementById("fimie").value;
    document.getElementById("surname").textContent = document.getElementById("fnazwisko").value;
    document.getElementById("phone").textContent = document.getElementById("fnumer").value;
}

document.querySelector("button").onclick = readData;