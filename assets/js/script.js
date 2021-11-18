$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu,.header').toggleClass('active')
        $('body').toggleClass ('lock')
    });
    $('.top-footer__label').click(function(event){
        if($('.footer__row').hasClass('.one')){
            $('.top-footer__label').not($(this)).removeClass('active');
            $('top-footer__menu').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass ('active').next().slideToggle(300);
    });
});