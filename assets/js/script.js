$(function () {
    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });

    $("[intro__slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        arrows: false
    });

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top - 90;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;
    });

});