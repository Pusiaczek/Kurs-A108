$( () => {
    $('.navbar__list__link').click( function(e) {
        const scrollTo = $(this).attr('href')
        e.preventDefault();
        $(scrollTo)[0].scrollIntoView({behavior: "smooth"});
    })
})