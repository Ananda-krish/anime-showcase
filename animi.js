$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active');
        $('#nav-menu').toggleClass('active');
    });

    // Setting up the owl carousel for the hero section
    const navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"];
    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    });

    // Setting up the owl carousel for the top movies section
    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true ,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1200: {
                items: 4
            },
            1500: {
                items: 6
            }   
        }
    });


    $('.movies-slide').owlCarousel({
        items:2,
        dots:false,
        nav:true,
        navText: navText,
        margin:15,
        responsive:{
            500:{
                items:2
            },
            1200:{
                items:4
            },
            1500:{
                items:6
            }
        }
    })
});
