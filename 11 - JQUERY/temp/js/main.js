$( () => {
    // console.log($('section').children());
    const testfunc = () => console.log("AAAA");

    let test = $('<h2 id="my-header">OK!</h2>');
    
    let btn = $('<button>TEST</button>');
    btn.click(() => console.log("-- --"));
    

    $('section').prepend(test);
    // $('section').append(test);
    // $('section').after(test);
    $('section').before(btn);

    // $('#my-header').hide(3000);

    // test.remove();
    console.log(test);
});