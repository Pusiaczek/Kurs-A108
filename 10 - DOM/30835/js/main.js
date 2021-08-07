let myForm = document.getElementById("form");

myForm.onsubmit = (event) => {
    event.preventDefault();
    let myInputs = document.querySelectorAll("input[type=text]");
    myInputs.forEach( (item) => console.log(item.value));
}



