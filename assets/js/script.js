$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.menu-content').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.nav-menu a').on('click', function () {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});





$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu-faq').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});


$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});




let projectsSwiper = new Swiper(".projects-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 600,

    pagination: {
        el: ".projects-pagination",
        clickable: true,
    },
    breakpoints: {
        '1199': {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        '320': {
            slidesPerView: 1,
            spaceBetween: 12,
        },
    },

});





let gallerySwiper = new Swiper(".gallery-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 600,
    loop: true,
    navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
    },
    pagination: {
        el: ".gallery-pagination",
        clickable: true,
    },
    breakpoints: {
        '1199': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        '320': {
            slidesPerView: 1,
            spaceBetween: 12,
        },
    },
});










let partnerswiper = new Swiper(".partners-slider", {
    slidesPerView: 8,
    spaceBetween: 30,
    loop: true,
    allowTouchMove: false,
    speed: 5000,
    breakpoints: {
        '1700': {
            slidesPerView: 8,
            spaceBetween: 30,
        },
        '1599': {
            slidesPerView: 7,
            spaceBetween: 20,
        },
        '1400': {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        '1200': {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        '1020': {
            slidesPerView: 5,
            spaceBetween: 20,
            speed: 4500,

        },
        '767': {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 12,
        },
    },
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    }
});