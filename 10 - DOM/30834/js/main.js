let myBtn = document.getElementById("setBgColorBtn");
myBtn.onclick = () => setBackground();

const setBackground = () => {
    document.getElementById("first").style.backgroundColor = "red";
    document.getElementById("second").style.backgroundColor = "yellow";
}