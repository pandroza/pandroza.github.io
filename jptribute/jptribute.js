function simulateClick() {
  doodle.update();
      };
var circles = document.getElementsByClassName("circles");
for(var i = 0; i < circles.length; i++){
    circles[i].addEventListener('click', simulateClick);
  }
var curentvid;
var vid1 = 'NfOCQj25Y_0'
var vid2 = 'aKF53fS-oBM'
var vid3 = 'j_aUFuZA9oo'
var teenage = "ZPzyN8Qq5XA"
currentvid = vid3;
// 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        videoId: "NfOCQj25Y_0",
        events: {
        }
      });
    }
    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.playVideo();
    }
    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }
    function newvid1() {
          player.cueVideoById({videoId:"j_aUFuZA9oo",'startSeconds': 1});
          };
    function newvid2() {
          player.cueVideoById({videoId:"NfOCQj25Y_0",'startSeconds': 1});
          };
    function newvid3() {
          player.cueVideoById({videoId:"aKF53fS-oBM",'startSeconds': 1});
          };
      document.getElementById("ytlist1").addEventListener('click', newvid1);
      document.getElementById("ytlist2").addEventListener('click', newvid2);
      document.getElementById("ytlist3").addEventListener('click', newvid3);