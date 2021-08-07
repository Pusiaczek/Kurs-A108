let addItemBtn = document.querySelector("button");


addItemBtn.onclick = () => {
    let listItemCounter = document.querySelectorAll(".item")
    let newLi = document.createElement("li");
    newLi.classList.add("item")
    newLi.innerHTML = `Item ${listItemCounter.length + 1}`;
    document.getElementById("items").appendChild(newLi);
}