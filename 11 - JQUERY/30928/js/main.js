$( () => {
    $('.accordion-item').each( (index, item) => {
        $(item).click( () => {
            // $('.accordion-content').slideUp(400);
            // $('.accordion-item').removeClass('opened');
            // taki maly feature dodany, jakby ktos nie chcial miec za duzo rzeczy rozwinietych na ekranie :)

            $('.accordion-content').eq(index).slideToggle(500);
            $(item).toggleClass('opened');
        })
    });
})