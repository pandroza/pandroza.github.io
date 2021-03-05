var r = document.querySelector(':root');
var g1 = "8x13";
var s1 = "12.5vw";
var g2 = "10x10";
var s2 = "10vw";
var g3 = "12x6";
var s3 = "8.333vw";

function myFunction(x) {
  if (window.matchMedia("(min-width: 1100px)").matches) {
  r.style.setProperty('--my-grid', g3);
             r.style.setProperty('--my-size', s3);
            doodle.update();
  } else if (window.matchMedia("(min-width: 800px)").matches) { // If media query matches
      r.style.setProperty('--my-grid', g2);
             r.style.setProperty('--my-size', s2);
            doodle.update();
  } else {
    r.style.setProperty('--my-grid', g1);
    r.style.setProperty('--my-size', s1);
    doodle.update();}
  

}
var x = window.matchMedia("(min-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
var y = window.matchMedia("(min-width: 1100px)")
myFunction(y) // Call listener function at run time
y.addListener(myFunction) // Attach listener function on state changes

function simulateClick() {
  doodle.update();
      };
var circles = document.getElementsByClassName("circles");
for(var i = 0; i < circles.length; i++){
    circles[i].addEventListener('click', simulateClick);
  }
var curentvid;
var vid1 = 'PebUde00V9o'
var vid2 = '_TLzor3qSmQ'
var vid3 = 'aKF53fS-oBM'
var vid4 = 'j_aUFuZA9oo'
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
        videoId: "PebUde00V9o",
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
          player.cueVideoById({videoId:"_TLzor3qSmQ",'startSeconds': 1});
          };
    function newvid3() {
          player.cueVideoById({videoId:"PebUde00V9o",'startSeconds': 1});
          };
    function newvid4() {
          player.cueVideoById({videoId:"aKF53fS-oBM",'startSeconds': 1});
          };
      document.getElementById("ytlist1").addEventListener('click', newvid1);
      document.getElementById("ytlist2").addEventListener('click', newvid2);
      document.getElementById("ytlist3").addEventListener('click', newvid3);
      document.getElementById("ytlist4").addEventListener('click', newvid4);
