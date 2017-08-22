$(function() {
    $('.media__photo-block').owlCarousel({
        margin:0,
        loop:true,
        autoWidth:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })

});