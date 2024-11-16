$(document).ready(function(){
	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
		$(this).jPlayer("setMedia", {
			mp3:"audio/" + audioFile +".mp3",
			oga:"audio/" + audioFile +".ogg"
			}).jPlayer("play");
		},
			swfPath: "js",
			supplied: "mp3, oga",
			wmode: "window"
	});
});