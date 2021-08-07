const calcScreen = document.getElementById("calculator__screen");

document.querySelectorAll("button[class^='calculator__digit'], button[class^='calculator__operand'], .calculator__dot").forEach( item => {
    item.onclick = () => {
        const lastChar = calcScreen.textContent[calcScreen.textContent.length- 1];
        const currentChar = item.value;
        const operandChars = "+-/*.%";

        if ((!operandChars.includes(lastChar) || !operandChars.includes(currentChar))) {
            if(!(operandChars.includes(currentChar) && (lastChar == undefined)))
                calcScreen.textContent += currentChar;
        }
        // Może kiedyś dodam sprawdzanie, żeby nie było liczby z kilkoma kropkami.
        // Nie wiem jak w evalu działają procenty, wiec nie wiem nawet co poprawic zeby dzialaly :(
    }
});

document.querySelector(".calculator__del").onclick = () => calcScreen.textContent = null;
document.querySelector(".calculator__eval").onclick = () => calcScreen.textContent = eval(calcScreen.textContent);