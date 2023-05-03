(function () {
    "use strict";
    var offcanvasMenu = function () {
        $("#page").prepend('<div id="colorlib-offcanvas" />');
        $("#page").prepend('<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white"><i></i></a>');
        var clone1 = $(".menu-1 > ul").clone();
        $("#colorlib-offcanvas").append(clone1);
    };

    var burgerMenu = function () {
        $("body").on("click", ".js-colorlib-nav-toggle", function (event) {
            var $this = $(this);

            if ($("body").hasClass("overflow offcanvas")) {
                $("body").removeClass("overflow offcanvas");
            } else {
                $("body").addClass("overflow offcanvas");
            }
            $this.toggleClass("active");
            event.preventDefault();
        });
    };

    var goToTop = function () {
        $(".js-gotop").on("click", function (event) {
            event.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: $("html").offset().top,
                },
                500,
                "easeInOutExpo"
            );

            return false;
        });

        $(window).scroll(function () {
            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $(".js-top").addClass("active");
            } else {
                $(".js-top").removeClass("active");
            }
        });
    };

    var sliderMain = function () {
        $("#colorlib-hero .flexslider").flexslider({
            animation: "fade",
            slideshowSpeed: 5000,
            directionNav: true,
            start: function () {
                setTimeout(function () {
                    $(".slider-text").removeClass("animated fadeInUp");
                    $(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp");
                }, 500);
            },
            before: function () {
                setTimeout(function () {
                    $(".slider-text").removeClass("animated fadeInUp");
                    $(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp");
                }, 500);
            },
        });
    };

    // Owl Carousel
    var owlCrouselFeatureSlide = function () {
        var owl2 = $(".owl-carousel2");
        owl2.owlCarousel({
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            autoplay: true,
            autoplayHoverPause: true,
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoHeight: true,
            items: 1,
            navText: ["<i class='icon-chevron-left owl-direction'></i>", "<i class='icon-chevron-right owl-direction'></i>"],
        });
    };

    $(function () {
        offcanvasMenu();
        burgerMenu();
        sliderMain();
        goToTop();
        owlCrouselFeatureSlide();
    });
})();
