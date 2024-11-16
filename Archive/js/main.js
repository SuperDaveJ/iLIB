// JavaScript Document for C2 Interactive Library
var menuWidth = "180px";
if (currentPage == "flash") {
	var menuHeight = "272px";
} else if (currentPage == "html") {
	var menuHeight = "212px";
}
var sizeSmall = 480;
var sizeMedium = 768;
var menuOn = false;

function switchMenubar() {
  if ( $(window).width() < sizeMedium ) {
	//Do this only when window width smaller than sizeMedium
	if ( $(window).width() > sizeSmall ) {
		if ( menuOn ) {
			$("#drop-menu").height(menuHeight).width(menuWidth);
			$("#main").css({paddingLeft: menuWidth});
		} else {
			$("#drop-menu").height(menuHeight).width(0);
			$("#main").css({paddingLeft: 0});
		}
	} else {
		if ( menuOn ) {
			$("#drop-menu").height(menuHeight).width("100%");
		} else {
			$("#drop-menu").height(0).width("100%");
		}
		$("#main").css({paddingLeft: 0});
	}
  } else {
	$("#drop-menu").height(menuHeight).width(0);
	$("#main").css({paddingLeft: 0});
  }
}

function toggleMenu() {
	if ( !menuOn && ($(window).width() > sizeSmall) ) {
		$("#drop-menu").animate({width: menuWidth, height: menuHeight}, 500);
		$("#main").animate({paddingLeft: menuWidth}, 500);
		//$("#drop-menu").animate({}, 500);
		menuOn = true;
	} else if ( menuOn && ($(window).width() > sizeSmall) ) {
		$("#drop-menu").animate({width: 0, height: 0}, 500);
		$("#main").animate({paddingLeft: 0}, 500);
		menuOn = false;
	} else if ( !menuOn ) {
		$("#drop-menu").animate({height: menuHeight}, 500);
		menuOn = true;
	} else if ( menuOn ) {
		$("#drop-menu").animate({height: 0}, 500);
		menuOn = false;
	}
}
function closeMenu() {
	if ( $(window).width() > sizeSmall ) {
		$("#drop-menu").css({"width": "0px", "height": "0px"});
		$("#main").css("paddingLeft", "0px");
	} else {
		$("#drop-menu").css({"height": "0px"});
	}
	menuOn = false;
}

function showThisSection( secId ) {
	$.each(sections, function(index, value) {
		$("#"+value).css("display", "none");
	});
	$("#"+sections[secId]).css("display", "block");
}

window.onresize = switchMenubar;

$(document).ready(function(e) {
	switch (currentPage) {
		case "html":
			$("#html>a img").attr({"disabled":true, "src": "sysimages/header/html_2.png"});
			$("#html>a").css("cursor", "default");
			break;
		case "flash":
			$("#flash>a img").attr({"disabled":true, "src": "sysimages/header/flash_2.png"});
			$("#flash>a").css("cursor", "default");
			break;
		default:
			break;
	}
	switchMenubar();   
});
