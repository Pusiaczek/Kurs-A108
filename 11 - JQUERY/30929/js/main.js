$( () => {
    $('.hamburger').click( () => {
        $('.main-nav').toggleClass('hidden-menu');
    })

    $('.main-menu-item').click( function(e) {
        e.preventDefault()
        $('.out-animation-wrapper').animate( {opacity: 0}, 2000, () => {
            const linkUrl = $(e.target).attr('href');
            // console.log(linkUrl);
            window.open(linkUrl, '_blank');
        })

    })

})