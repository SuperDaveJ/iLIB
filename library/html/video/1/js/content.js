$(document).ready(function(){
	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
		$(this).jPlayer("setMedia", {
			m4v:"video/" + videoFile +".mp4",
			ogv:"video/" + videoFile +".ogv"
			}).jPlayer("play");
		},
			swfPath: "js",
			supplied: "m4v, ogv",
			wmode: "window"
	});
});

/*
$(document).ready(function(){
	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				title: "Big Buck Bunny",
				m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
				ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
				webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
				poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
			});
		},
		swfPath: "js",
		supplied: "webmv, ogv, m4v",
		size: {
			width: "640px",
			height: "360px",
			cssClass: "jp-video-360p"
		},
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});
});
*/