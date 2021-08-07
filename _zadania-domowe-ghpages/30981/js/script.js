function loop() {
    $('.animation-container').fadeIn(0);
    $('.animation-container').css("display", "relative");
    $('.circle-1').animate({
        height: "0",
        width: "0",
        left: "50%",
        top: "50%"
    }, 1000, () => {
        $('.circle-2').animate({
            height: "0",
            width: "0",
            left: "50%",
            top: "50%"
        }, 1000, () => {
            $('.circle-1').animate({
                height: "100",
                width: "100",
                left: "0",
                top: "0"
            }, 1000, () => {
                $('.circle-2').animate({
                    height: "100",
                    width: "100",
                    left: "0",
                    top: "0"
                }, 1000, () => {
                    loop()
                } )
            } )
        })
    })
}

function loopStop() {
    $('.animation-container').fadeOut(0)
    $('.animation-container').css("display", "none");
    $('.circle-1').stop()
    $('.circle-2').stop()
}



const getData = () => {
    const anime = $('.animation-container');
    const paragraphs = $('p');
    paragraphs.last().append(anime);
    loop()

    fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then (response => response.json())
        .then( data => {
            loopStop()

            data.forEach( item => {
                const p = `<p>User ID: ${item.id} </p>
                    <p>User Name: ${item.name} </p>
                    <p>User URL:  ${item.website}<br>--------</p>`;
                    paragraphs.last().append(p);
            })
    })
}

window.onscroll = () => scrollToEndOfPage()

const scrollToEndOfPage = () => {
    if ((document.documentElement.scrollTop + document.documentElement.clientHeight) >= document.documentElement.scrollHeight) {
        getData();
    }
}