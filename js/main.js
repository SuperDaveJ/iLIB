// JavaScript Document for C2 Interactive Library
var menuWidth = "180px";
if (currentPage == "flash") {
	var menuHeight = "272px";
} else if (currentPage == "html") {
	var menuHeight = "242px";
} else if (currentPage == "others") {
	var menuHeight = "122px";
}
var sizeSmall = 480;
var sizeMedium = 768;
var menuOn = false;

function resetRowWidth( winWidth ) {
  // Reset row width to center columns for small screens
  if ( winWidth < 538 ) {
	  // 1 column is 251px
	  $(".int-box-row").css({"width": "253px"});
  } else if ( (winWidth >= 538) && (winWidth < 768) ) {
	  $(".int-box-row").css({"width": "504px"});
  } else {
	  $(".int-box-row").css({"width": "100%"});
  }
}

function switchMenubar() {
  var winWidth = $(window).width();
  resetRowWidth( winWidth );
  
  if ( winWidth < sizeMedium ) {
	//Do this only when window width smaller than sizeMedium
	if ( winWidth > sizeSmall ) {
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
	$("#"+currentPage+">a").css({"color": "#fff", "cursor": "default"}).attr("disabled", true);
	
	switchMenubar(); 
	showThisSection(0);  
});
