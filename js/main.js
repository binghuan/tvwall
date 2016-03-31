$("document").ready(function() {
    for (var i = 0; i < tvList.length; i++) {
        $("body").append("<div style=\"display:inline\" id=\"playerBox" + i + "\"><div id=\"player" + i + "\"></div></div>");
        $(document.getElementById("playerBox" + i)).hover(function() {
            console.log("mouseover!!", this.id);
            var playerId = this.id.replace("playerBox", "");;
            console.log("id: ", playerId, "--> ", parseInt(playerId));
            playerList[playerId].unMute();
        }, function() {
            console.log("mouseover!!", this.id);
            var playerId = this.id.replace("playerBox", "");;
            console.log("id: ", playerId, "--> ", parseInt(playerId));
            playerList[playerId].mute();
        });
    }
});

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var playerList = [];
var onYouTubeIframeAPIReady = function() {
    for (var i = 0; i < tvList.length; i++) {

        var player = new YT.Player(("player" + i), {
            height: '270',
            width: '480',
            videoId: tvList[i].id,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        playerList.push(player);
    }
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    console.log(">> onPlayerReady");
    event.target.playVideo();
    event.target.mute();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
    // if (event.data == YT.PlayerState.PLAYING && !done) {
    //     setTimeout(stopVideo, 6000);
    //     done = true;
    // }
}

function stopVideo() {
    player.stopVideo();
}
