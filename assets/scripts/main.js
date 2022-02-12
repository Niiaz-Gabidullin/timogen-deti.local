$(document).ready(function(){
    //Верхнее меню
    $('.header__burger').on('click',()=>{
        $('.header__links').toggleClass('flex');
        $('.header__burger').toggleClass('header__burger_active');
    });

    //Отслеживание скроллинга
    $(window).on('scroll', function(e){
        if($(this).scrollTop() > 100){
            $('.header').addClass('header_scrolled');
        }else{
            $('.header').removeClass('header_scrolled');
        }
    });

    //Плавность якорей
    $('a[href*="#"]').on("click", function(e){
        e.preventDefault();
        let anchor = $(this);
        let href = anchor.attr('href').split('#')[1];

        let anchorEl = $('[name="' + href + '"]');

        $('html, body').stop().animate({
            scrollTop: anchorEl.offset().top
        }, 1000);
    });

    //*Реализация слайдеров
    var owl1 = $('#images__slider');
    owl1.owlCarousel({
        items: 1,
        smartSpeed:1500,
        loop: true,
        animateOut: 'fadeOut',
        mouseDrag: false,
        touchDrag: false,
        dots: false
    });

    let percentFlag = 0
    document.addEventListener("mousemove", slider);
    function slider(e) {
        if ( window.innerWidth > 1024 ){
            let _mouseX = e.clientX;
            let percent = _mouseX/window.innerWidth*100;
            if (percent > 50 && percentFlag < 50) {
                percentFlag = percent;
                owl1.trigger('next.owl.carousel');
            }
            if(percent < 50 && percentFlag > 50){
                percentFlag = percent;
                owl1.trigger('prev.owl.carousel');
            }
        }
    }
});
