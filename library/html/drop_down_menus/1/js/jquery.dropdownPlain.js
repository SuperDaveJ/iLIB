$(function(){

    $("ul.dropdown li").hover(function(){
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
		//$("ul.dropdown li ul li").slideUp(500);

    }, function(){
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
		//$("ul.dropdown li ul li").slideUp(500);

    });
    //$("sub_menu").find("a:first").append(" &raquo; ");

});