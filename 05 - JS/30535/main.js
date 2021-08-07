function dzialania(a, b) {
    console.log("a = " + a + ", b = " + b);
    if ((a - b) < 0) {
        console.log("Wynik jest nieprawidłowy!");
    }else{
        console.log("Wynik dodawania wynosi: " + (a + b));
        console.log("Wynik odejmowania wynosi: " + (a - b));
        console.log("Wynik mnożenia wynosi: " + (a * b));
    }
    console.log("- - - - -");
}

dzialania(30, 20)
dzialania(10, 20)
dzialania(10, 10)