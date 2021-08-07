let uczniowie = [];

document.getElementById("oblicz").onclick = () => {
    document.querySelectorAll("div[id^='uczen']").forEach( (item, index) => {
        uczniowie[index] = {
            nazwa: item.children[0].textContent,
            oceny: {
                matematyka: Number(item.children[1].value),
                polski: Number(item.children[2].value),
                biologia: Number(item.children[3].value),
                geografia: Number(item.children[4].value),
                fizyka: Number(item.children[5].value),
                chemia: Number(item.children[6].value),
                informatyka: Number(item.children[7].value),
            },
            zajeciaDodatkowe: item.children[8].value,
            sredniaOcen: 0,
            bonus: 0,
        };

        if (uczniowie[index].zajeciaDodatkowe) {
            let zajecia = uczniowie[index].zajeciaDodatkowe.split(', ')

            for (let zajecie in zajecia) {
                if (uczniowie[index].oceny[zajecia[zajecie]] < 6) {
                    uczniowie[index].bonus += 0.5;
                }
            }
        }

        let sumaOcen = 0;
        for(let ocena in uczniowie[index].oceny) {
            sumaOcen += uczniowie[index].oceny[ocena];
            if (uczniowie[index].oceny[ocena] <= 1) {
                item.style.backgroundColor = 'red';
            }
        }

        uczniowie[index].sredniaOcen = (sumaOcen + uczniowie[index].bonus) / (Object.keys(uczniowie[index].oceny).length);
        item.children[9].textContent = Math.round(uczniowie[index].sredniaOcen * 100) / 100;


        if (uczniowie[index].sredniaOcen >= 4.75) {
            item.style.backgroundColor = 'limegreen';
            item.style.fontWeight = '700';
        }
    })
}