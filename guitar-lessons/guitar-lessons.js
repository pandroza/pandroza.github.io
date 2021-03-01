var h = ["Anyone can play guitar!","No matter what your age, you can learn with me!","Lessons available online or in person!", "Want to learn but not confident? Don't worry! I can help!"]
var hc = 0;
document.getElementById("about");
var startTime = new Date().getTime();  
var titles = function() {
    var currTime = new Date().getTime();
    var count = ((currTime - startTime)/1000);
  if (count > 0.5 && count < 2.0) {
    about.innerHTML = h[hc];
    about.style.opacity = count-0.5;
  }
  if (count > 8 && count < 10) {
    about.style.opacity = 1-(count-8);
  }
  if (count > 10) {
    hc ++;
    if(hc === 4){
      hc = 0;
    }
    startTime = new Date().getTime();
  }
  window.requestAnimationFrame(titles);
}; 
titles();

function simulateClick() {
            console.log("hello"); 
            doodle.update();
        };
          
 
document.getElementById("box").addEventListener('click', simulateClick);

