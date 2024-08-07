$(document).ready(function () {
    // ----- NAVBAR -----
    $(".navbar-burger").click(function () {
        $(this).toggleClass("is-active");
        // $(".navbar-item").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $(".navbar-item").click(function () {
        $(this).addClass("is-active");
    });


    // ----- MENUS -----
    $(".menu-list a").click(function () {
        $(".menu-list a").removeClass("is-active");
        $(this).addClass("is-active");
    });
    
    
    // ----- SLIDESHOW -----
    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $("#slideshow > div:first")
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo("#slideshow");
    }, 3000);
});



document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const menuItem = document.querySelectorAll('#menu-item');

    menuItem.forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('is-active');
        }

        item.addEventListener('click', function() {
            menuItem.forEach(i => i.classList.remove('is-active'));
            this.classList.add('is-active');
        });
    });
});