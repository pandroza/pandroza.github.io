var r = document.querySelector(':root');
//Circles doodles variables
var g1 = "4x12";
var s1 = "25vw";
var g2 = "10x15";
var s2 = "10vw";
var g3 = "12x10";
var s3 = "8.333vw";
var g15 = "8x15";
var s15 = "12.333vw";
//Clover doodle variables
var cg1 = "8 / 100vmax";
var cg2 = "8 / 100vmax";
var cg3 = "8 / 100vmax"; 
var cc1 = "3";
var cc2 =  "3";
var cc3 =  "3.5";
//function that adjusts doodles based on screen size
function myFunction(x) {
  if (window.matchMedia("(min-width: 1100px)").matches) {
      /*Circles*/
     r.style.setProperty('--my-grid', g3);
     r.style.setProperty('--my-size', s3);
     /*Clovers*/
     r.style.setProperty('--my-grid2', cg3);
     r.style.setProperty('--my-calc2', cc3);
     doodle.update();
  } else if (window.matchMedia("(min-width: 800px)").matches) { // If media query matches
       /*Circles*/
      r.style.setProperty('--my-grid', g2);
      r.style.setProperty('--my-size', s2);
       /*Clovers*/
         r.style.setProperty('--my-grid2', cg2);
        r.style.setProperty('--my-calc2', cc2);
       doodle.update();
  } else if (window.matchMedia("(min-width: 600px)").matches) {
    // If media query matches
      /*Circles*/
    r.style.setProperty("--my-grid", g15);
    r.style.setProperty("--my-size", s15);
    /*Clovers*/
     r.style.setProperty('--my-grid2', cg1);
     r.style.setProperty('--my-calc2', cc1);
    doodle.update();
    
  } else {
      /*Circles*/
    r.style.setProperty('--my-grid', g1);
    r.style.setProperty('--my-size', s1);
    /*Clovers*/
     r.style.setProperty('--my-grid2', cg1);
    r.style.setProperty('--my-calc2', cc1);
    doodle.update();}
  

}
var z = window.matchMedia("(min-width: 600px)");
myFunction(z); // Call listener function at run time
z.addListener(myFunction); // Attach listener function on state changes
var x = window.matchMedia("(min-width: 800px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); 
var y = window.matchMedia("(min-width: 1100px)");
myFunction(y); // Call listener function at run time
y.addListener(myFunction); 

/*Circles doodle animate*/
function simulateClick() {
  if(t === 1){
    doodle.update();}
      }
var cont = document.getElementById("container");
cont.addEventListener("click", simulateClick);
//Class list of vids links  
var yt = document.getElementsByClassName("ytlist");

//Vars and a function to change text colors on active vids
var firstClick = false;
var lastClick = 0;
function firstClickCheck(l, n) {
     console.log(l);
      console.log(n);
    console.log(firstClick);
    if(firstClick === true){
       yt[n].className = yt[n].className.replace("ytcol", "ytcol2"); 
       yt[l].className = yt[l].className.replace("ytcol2", "ytcol"); 
    } 
    else{
        yt[n].className = yt[n].className.replace("ytcol", "ytcol2"); 
         yt[2].className = yt[2].className.replace("ytcol2", "ytcol"); 
      firstClick = true;  
    }
    console.log(firstClick);

}
//YouTube vids variables  
var curentvid;
var vid1 =  'NfOCQj25Y_0';
var vid2 = '_TLzor3qSmQ';
var vid3 = 'PebUde00V9o';
var vid4 = 'xutmGf9eeGU';
var vid5 = 'sSEsvu8vZOY';
var vid6 =  'f6lX1uKectg';
var vid7 =  'o2vEX7R9EGE';
var vid8 =  'OU7UgBZT0jA';
var vid9 =  'hODQyyTIz80';
var vid10=  'YLFC9Snj9uA';
var vid11 = 'sDY_zVQ4cVA';
var vid12 = 'ZaTijE6A8EI';
var vid13 =  'aKF53fS-oBM';


var teenage = "ZPzyN8Qq5XA";
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
          player.cueVideoById({videoId: 'NfOCQj25Y_0','startSeconds': 1});
          firstClickCheck(lastClick, 0); 
          lastClick = 0;
          }
function newvid2() {
          player.cueVideoById({videoId:"_TLzor3qSmQ",'startSeconds': 1});
           firstClickCheck(lastClick, 1); 
          lastClick = 1;
          }
function newvid3() {
          player.cueVideoById({videoId:'PebUde00V9o','startSeconds': 1});
           firstClickCheck(lastClick, 2);
          lastClick = 2;
          }
function newvid4() {
          player.cueVideoById({videoId:'xutmGf9eeGU','startSeconds': 1});
           firstClickCheck(lastClick, 3);
          lastClick = 3;
          }     
function newvid5() {
          player.cueVideoById({videoId:"sSEsvu8vZOY",'startSeconds': 1});
           firstClickCheck(lastClick, 4); 
          lastClick = 4;
          }
    function newvid6() {
          player.cueVideoById({videoId: 'f6lX1uKectg','startSeconds': 1});
           firstClickCheck(lastClick, 5); 
          lastClick = 5;
          }
function newvid7() {
          player.cueVideoById({videoId: 'o2vEX7R9EGE','startSeconds': 1});
           firstClickCheck(lastClick, 6); 
          lastClick = 6;
          } 
 function newvid8() {
          player.cueVideoById({videoId: 'OU7UgBZT0jA','startSeconds': 1});
           firstClickCheck(lastClick, 7); 
          lastClick = 7;
          } 
function newvid9() {
          player.cueVideoById({videoId: 'hODQyyTIz80','startSeconds': 1});
           firstClickCheck(lastClick, 8); 
          lastClick = 8;
          } 
function newvid10() {
          player.cueVideoById({videoId: 'YLFC9Snj9uA','startSeconds': 1});
           firstClickCheck(lastClick, 9); 
          lastClick = 9;
}
    function newvid11() {
          player.cueVideoById({videoId:'sDY_zVQ4cVA','startSeconds': 1});
           firstClickCheck(lastClick, 10); 
          lastClick = 10;
          }
     function newvid12() {
          player.cueVideoById({videoId:'ZaTijE6A8EI','startSeconds': 1});
           firstClickCheck(lastClick, 11); 
          lastClick = 11;
          } 
    function newvid13() {
          player.cueVideoById({videoId:'aKF53fS-oBM','startSeconds': 1});
           firstClickCheck(lastClick, 12); 
          lastClick = 12;
          }  
      yt[0].addEventListener('click', newvid1);
      yt[1].addEventListener('click', newvid2);
      yt[2].addEventListener('click', newvid3);
      yt[3].addEventListener('click', newvid4);
      yt[4].addEventListener('click', newvid5);
      yt[5].addEventListener('click', newvid6);
      yt[6].addEventListener('click', newvid7);
      yt[7].addEventListener('click', newvid8);
      yt[8].addEventListener('click', newvid9);
      yt[9].addEventListener('click', newvid10);
      yt[10].addEventListener('click', newvid11);   
      yt[11].addEventListener('click', newvid12);
      yt[12].addEventListener('click', newvid13);
     
var t = 2;
var title = document.getElementById("title");
var sb = document.getElementById("siteby");
var h2 = document.getElementsByTagName("h2");
var h3 = document.getElementsByTagName("h3");
var h4 = document.getElementsByTagName("h4");

/*change theme*/
function simulateClick2() {
  t++;
  
  if (t > 3) {
    t = 1;
  }
 console.log(t);
  if (t === 1) {
      /*
    title.classList.toggle("fontstyle");
    sb.classList.toggle("fontstyle");
    */
    title.style.color = "#333";
    doodle.style.background = "white";
    r.style.setProperty("--my-opa", 0.6);
    for (i = 0; i < h2.length; i++) {
       h2[i].style.color = "#333";
    }
    for (i = 0; i < h3.length; i++) {
       h3[i].style.color = "#333";
    }
    for (i = 0; i < h4.length; i++) {
       h4[i].style.color = "#333";
    }
   
  } else if (t === 2) {
      title.style.color = "#eee";
     doodle.classList.add("doodle-blur"); 
     r.style.setProperty("--my-opa", 0.2);
     /*
    title.classList.toggle("fontstyle");
    sb.classList.toggle("fontstyle");
    */
    doodle.style.background = "#0a0c27";
    for (i = 0; i < h2.length; i++) {
       h2[i].style.color = "#eee";
    }
    for (i = 0; i < h3.length; i++) {
       h3[i].style.color = "#eee";
    }
    for (i = 0; i < h4.length; i++) {
       h4[i].style.color = "#eee";
    }
    
  } else if (t === 3) {
    doodle.classList.remove("doodle-blur");  
    doodle.style.background = "#0a0c27";
    
  }
   else if (t === 4) {
   
    doodle.style.background = "#0a0c27";
    
  }
  /*doodle change*/
  doodle.use = "var(--rule" + [t] + ")";
}

var ic = document.getElementById("icon");
ic.addEventListener("click", simulateClick2);
//Alternative pic
//"https://ichef.bbci.co.uk/images/ic/1200x675/p05d6znz.jpg"

        
