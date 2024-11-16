$(document).ready(function() {
    $('.accordionLink').click(function() {
        if($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).next().animate({width: '0px'});
         }
        else {
            $('.accordionLink').removeClass('on');
            $('.accordionFrame').animate({width: '0px'});
            $(this).addClass('on');
            $(this).next().animate({width: '460px'});
        }
     });
});