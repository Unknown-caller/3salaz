$(window).on("load", ()=> {
    $(`.loader-wrapper`).fadeOut(`slow`)
    $('.parallax').parallax();    
    $('.scrollspy').scrollSpy();      
});