let myForm = document.getElementById("form");
let btn = document.getElementById("wszystkiezgody")

btn.onclick = (event) => allAgreementsClick(event);



myForm.onsubmit = (event) => {
    event.preventDefault();
    console.log(event);
    validate();
}



const validate = () => {
    let validateInfo = "";
    let infoLabel = document.getElementById("forminfo");
    let emailValue = document.forms.form.email.value;

    if (!document.forms.form.fnamelastname.value){
        validateInfo += "Podaj imię i nazwisko! \n"
    }


    if (!emailValue){
        validateInfo += "Podaj adres e-mail! \n"
    }else if (!(emailValue.search("@") != -1)) {
        validateInfo += "Błędny adres email! \n"
    }


    if (!document.forms.form.zgoda1.checked){
        validateInfo += "Zgoda pierwsza jest wymagana do udzialu w tym projekcie! \n"
    }

    infoLabel.innerText = validateInfo;
}



const allAgreementsClick = (e) => {
    let agreements = document.querySelectorAll(".form__agreement");
    
    if (!e.target.checked){
        agreements.forEach( (item) => {
            item.checked = false;
            item.disabled = false;
        })
    }else{
        agreements.forEach( (item) => {
            item.checked = true;
            item.disabled = true;
        })
    }
}

