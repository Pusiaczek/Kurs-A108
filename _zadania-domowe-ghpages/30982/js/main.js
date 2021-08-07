document.getElementById("oblicz").onclick = () => {
    let pracownicyHtml = document.querySelectorAll("div[id^='pracownik']");
    let pracownicy = [];

    pracownicyHtml.forEach( (pracownikHtml, index) => {
        pracownicy[index] = {
            nazwa: pracownikHtml.children[0].textContent,
            czasPracy: pracownikHtml.children[1].value,
            stawkaGodzinowa: pracownikHtml.children[2].value,
            wyplata: 0,
        }

        if (pracownicy[index].czasPracy > 160) {
            pracownicy[index].wyplata = ( 160 * pracownicy[index].stawkaGodzinowa ) + (pracownicy[index].czasPracy - 160) * 2 * pracownicy[index].stawkaGodzinowa;
        }else{
            pracownicy[index].wyplata = pracownicy[index].stawkaGodzinowa * pracownicy[index].czasPracy;
        }
        pracownikHtml.children[3].textContent = pracownicy[index].wyplata;
        

        if (pracownicy[index].czasPracy < 100) {
            pracownikHtml.style.backgroundColor = "red";
        }else{
            pracownikHtml.style.backgroundColor = "limegreen";
        }
    })


    pracownicy.sort( (a, b) => {
        if (Number(a.czasPracy) < Number(b.czasPracy)) {
            return 1;
        }else if (Number(a.czasPracy) > Number(b.czasPracy)) {
            return -1;
        }else{
            return 0;
        }
    })

    document.getElementById('najlepsi-pracownicy').textContent = `${pracownicy[0].nazwa}, ${pracownicy[1].nazwa}, ${pracownicy[2].nazwa}!`
}