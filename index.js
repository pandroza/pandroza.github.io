//Font Awesome clock
var iEls = document.getElementsByTagName("i");
var iconArr = ["fas fa-eye", "fas fa-dragon", "fas fa-kiwi-bird", "fas fa-flask", "fas fa-ghost fa-1x","fas fa-book-dead fa-1x", "fas fa-atom fa-1x", "fas fa-meteor fa-1x", "fas fa-yin-yang fa-1x", "fas fa-pastafarianism fa-1x"];
setInterval(function() {
var d = new Date();
var h = d.getHours();
var hours = [h]; 
var m = d.getMinutes();  
var mins = [m];          
var s = d.getSeconds();
var secs = [s];
var sM = secs.map(myClock);
var mM = mins.map(myClock);  
var hM = hours.map(myClock);       
function myClock(num) {
  var t = num / 10;
  return Math.floor(t);
}
var s2 = sM*10;
var s3 = s - s2;
var m2 = mM*10;
var m3 = m - m2;
var h2 = hM*10;
var h3 = h - h2;
iEls[0].className = iconArr[hM];
iEls[1].className = iconArr[h3];
iEls[2].className = iconArr[mM];
iEls[3].className = iconArr[m3];
iEls[4].className = iconArr[sM];
iEls[5].className = iconArr[s3];
}, 1000); 
//My Code For Hexaflip projects slideshow
var pageNames = ["Education Site", "John Peel Tribute Page", "Guitar Lessons Page", "Bike Shop Page","Random Quote Generator ","React Drum Machine", "5O US States Game","Survey Page","Technical Document","Chat Room App","This Page"];
var pageInfo = ["Made with HTML, CSS, JavaScript, Bootstrap and Slick. An education-based page that is based on a design from a site called <a id='links' href = 'https://www.templatemonster.com/'>Template Monster</a> but built with my own code. Has a variety of slide carousels displaying relevant content made using <a id='links' href = 'https://kenwheeler.github.io/slick/'>Slick.js</a> plugin. Site is responsive and mobile friendly.<br><a id='links' href = 'education'>Go to page</a>","Made with HTML, CSS, JavaScript and CSS Doodle. A tribute page to influential Radio 1 DJ John Peel. Has a choice of animated backgrounds, some interactive, created with <a id='links' href = 'https://css-doodle.com/'>CSS-Doodle. </a> Click atom icon to cycle through backgrounds. Site responsive and mobile friendly. Site layout changes on different screen sizes. Also has links to related YouTube content that plays in site.<br><a id='links' href = 'john-peel'>Go to page</a>" ,"Made with HTML, CSS and BootStrap. Static site for potential guitar lessons business. Site header is carousel of guitar-related images with different headings of important info. Images change for larger screen sizes. Site responsive and mobile friendly. Site layout changes on different screen sizes. Uses Bootstrap for responsive Nav-Bar and carousel of customer reviews. Has iFrame for potential YouTube content.<br><a id='links' href = 'guitar-lessons'>Go to page</a>","Made with HTML, CSS, PHP and Bootstrap. A static site for an imaginary Bike Repair company. Background is gallery of stylish images each with bold headings of business's main selling points. Responsive and mobile friendly. Contact form uses PHP. Uses Bootstrap to create responsive Nav-bar and carousel of customer reviews. Contain's iFrame of YouTube video for business's potential video content.<br><a id='links' href = 'bike-shop'>Go to page</a>","Made with React, Sass and Bootstrap. A stylised random quote generator for Democrat politician and activist Alexandria Ocasio-Cortez aka AOC. Quotes can be Tweeted. Design is based on AOC's posters and uses skewed angles. Has two Bootstrap Carousels, one for the quote and the other for author name, overlayed on each other. CSS-Doodle background.<br><a id='links' href = 'https://codepen.io/pandroza/pen/WNpQqmr'>Go to page</a>","Made with React and P5JS Sound. A Drum Machine where you can make tracks from various SFX and drum beats. SFX play rate can be manipulated and made to go in reverse. Click the randomizer button to randomly assign notes. Might sound terrible or might sound amazing! This is an ongoing project which I'm planning to add more features to.<br><a id='links' href = 'https://codepen.io/pandroza/pen/ExQWEKP'>Go to page</a>","Madewith HTML, CSS and JQuery. A simple word game. You must unscramble and type the names of all 50 U.S states in the time limit. States you must guess are in random order.<br><a id='links' href = 'https://codepen.io/pandroza/pen/abpLboP'>Go to page</a>","Made with HTML, CSS and JavaScript. An example of a survey form made on freeCodeCamp. Has name, number, email, checkboxes and text input fields with HTML5 validation. Site Responsive and mobile friendly. Has clickable <a id=\"links\" href = \"https://css-doodle.com/\">CSS-Doodle</a> background.<br><a id='links' href = 'https://codepen.io/pandroza/full/YzGbyyj'>Go to page</a>","Made with HTML and CSS. An example of a technical document made on freeCodeCamp. Responsive and mobile friendly. Nav-bar switches from top to side positioning based on screen size.<br><a id='links' href = 'https://codepen.io/pandroza/full/eYBVvby'>Go to page</a>","Made with NodeJS and hosted on replit. A secure chat room that uses MongoDB for a database. Also uses a variable font called <a id='links' href = 'https://fonts.withgoogle.com/kablammo'>kablammo.</a> The visual style is based on kablammo's home page.<br><a id='links' href = 'https://poshfamous.pandroza.repl.co/'>Go to page</a>","Made with HTML, CSS and JavaScript. Site is mobile first and responsive. The header has a HH/MM/SS clock that uses <a id=\"links\" href = \"https://fontawesome.com/\">FontAwesome</a> Icons. The images are displayed in the projects section using <a id=\"links\" href = \"https://oxism.com/hexaflip/\">Hexaflip</a> plugin. On large screen has CSS-Doodle background of FontAwesome icons.<br><a id='links' href = 'https://poshfamous.pandroza.repl.co/'>Go to page</a>"];
var images = ['./mypics/edu-pic.png',
                './FA-icons/jp-pic2.png',
                './FA-icons/guitar-screenshot.png',
                './FA-icons/bikes3.png',
                './FA-icons/aocquote.png',
                './FA-icons/musiccreator.png',
                './FA-icons/canyon.png',
                './FA-icons/survey.png',
                './FA-icons/technic.png',
                './FA-icons/croom4.png',
                './FA-icons/thispage.png'
            ];
var myHex;
var c = 0;
var hx;
var hexval;
var phx = images[0];
var prevhexval;
var $ic = [];
//Turn jquery collections into DOMs
var $phex = $("#my-hex");
var phex = $phex[0];
//Turn icons into jquery collections array
for(var x = 1; x < 3; x++){
   $ic[x-1] = $("#icon"+ x);
 }

function hexFunction() {
      myHex = new HexaFlip(phex, {set: images},{
      size: 200,
      horizontalFlip: true,
      domEvents: {
             touchmove: function(e, face, cube) {
                 e.preventDefault();
               
            }
            
        }  
   });
}
hexFunction(); // Call listener function at run time
/*Flip hex left*/  
$ic[0].on('click', function(){
    myHex.flipBack();
  changeInfo2();
});
/*Flip hex right*/  
$ic[1].on('click', function(){
  myHex.flip();
  changeInfo2();
});
console.clear();
//Function to change text
function changeInfo(){
  $("#para-link").hide(); 
  $("#ph1").hide(); 
  /*$("#links").attr("href",pageLinks[c]);*/
  $("#ph1").html(pageNames[c]);
  $("#page-para").html(pageInfo[c]);
  $("#ph1").fadeIn(1000, function() {
  $("#para-link").fadeIn(1000); 
  });
}
//Checks current hex value.If current value different from previous value, text changes
function changeInfo2() {
  setTimeout(function(){
  hexval = myHex.getValue();
  hx = String(hexval);
  let hx2 =  hx.slice(-9, -4); 
  let hx3;
  for(let i = 0; i < images.length; i++){
     hx3 =  images[i].slice(-9, -4); 
     if(hx2 === hx3){ 
       c = i;
     } 
  }
  if(hx !== phx){
    changeInfo();
  }
  prevhexval = myHex.getValue();
  phx = String(prevhexval); 
     }, 500);
  }

function imageIndex(myHex){
  var num;
  for(var i = 0; i < images.length; i++){
    if(myHex == images[i]){
      num = i;
    }
  }
  return num;
}
//Checks current hex value every half-second. If current half-seconds value different from previous half-seconds value, text changes
setInterval(function() {
   hexval = myHex.getValue();
   hx = String(hexval);
  if(hx !== phx){
    c = imageIndex(hx);
    changeInfo();
    }else{
  }
  prevhexval = myHex.getValue();
  phx = String(prevhexval);
  }, 500); 

    
                
            
             

            

            
