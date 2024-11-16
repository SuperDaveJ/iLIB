/***** Customized jwPlayer for CDC-RWC - skinless *****/

var ccOn = false;	//default to OFF

jwplayer("video-container").setup({
	file: "../videos/" + vid + ".mp4",
	image: "../videos/" + vid + "q.jpg",
	width: "100%",
	aspectratio: "16:9",
	tracks: [{
		file: "../videos/" + vid + ".vtt",
		label: "English",
		kind: "captions"
	}],
	captions: {
		color: "#ffffff",
		fontfamily: "Arial, Sans-serif",
		fontSize: 12,
		backgroundColor: "#000000",
		backgroundOpacity: 80
	},
	logo: {
		hide: true,
		position: "top-right",
		margin: "5px"
	},
	icon: false,
	autostart: false,
    mute: false,
	controls: false
});

function vidPlay() {
	jwplayer().play();
	$("#vPlay").css("display", "none");
	$("#vPause").css("display", "block");
}

function vidPause() {
	jwplayer().pause();
	$("#vPause").css("display", "none");
	$("#vPlay").css("display", "block");
}

function vidStop() {
	jwplayer().stop();
	$("#vPause").css("display", "none");
	$("#vPlay").css("display", "block");
	$("#play-progress-bar").css({ "width": 0 });
}

function toggleCC() {
	if ( ccOn ) {
		ccOn = false;
		jwplayer().setCurrentCaptions(0);
	} else {
		ccOn = true;
		jwplayer().setCurrentCaptions(1);
	}
}

// Play Progress
jwplayer().onTime( function(event) {
    //triggered when play button is clicked.
	var timePercent = (event.position / event.duration) * 100;
	$("#play-progress-bar").css({ "width": timePercent + "%" });
});

// Preload Progress
jwplayer().onBufferChange( function(event) {
    //triggered when play button is clicked.
	var percent = jwplayer().getBuffer();
	$("#preload-bar").css({ "width": percent + "%" })
});

jwplayer().onComplete( function() {
	$("#vPause").css("display", "none");
	$("#vPlay").css("display", "block");
	$("#play-progress-bar").css({ "width": 0 });
	
	//Try to leave the play head at the end with following code.
	//It does not work.
	//jwplayer().seek( Math.floor(jwplayer().getDuration()) );
	//jwplayer().stop();
});

jwplayer().onReady( function() {
	jwplayer().setCurrentCaptions(0);
	$("#vidControls").css("display", "block");
});

jwplayer().onDisplayClick( function() {
	//console.log("Player state = " + jwplayer().getState());
	if (jwplayer().getState() == "PLAYING") {
		vidPause();
	} else {
		vidPlay();
	}
});