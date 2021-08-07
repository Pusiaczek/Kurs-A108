const string1 = "Uwielbiam JavaScript";
const string2 = "Jestem świetnym programistą!";


function porownanie(strA, strB) {
    if (strA.length > strB.length) {
        return strA;
    }else if (strB.length > strA.length) {
        return strB;
    }else{
        return "nope!"
    }
}


console.log(porownanie(string1, string2));