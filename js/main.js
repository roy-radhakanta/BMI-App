const range = document.getElementById('height');
const line = document.getElementById('lineR');
const humanHeight = document.getElementById('humanBody');
// range.value = 0;

var whichBrowser = function getBrowser() {
    if( navigator.userAgent.indexOf("Chrome") != -1 ) {
      return "Chrome";
    } 
  }
  var brws = whichBrowser()
range.oninput = function(){
    const rangeValue = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 8;
    const newValue = Number(((rangeValue - min) * 100) / (max - min));
   
    
        line.style.bottom = `calc(${newValue}% + (${2 - newValue * 0.15}px))`;
        humanHeight.style.height = `calc(${newValue}% + (${2 - newValue * 0.15}px))`;
 
    
    document.querySelector('.line__height').setAttribute('data-before', rangeValue + "ft.");

    console.log(rangeValue);
}

var cnvs = document.getElementById("canvasVertical");

if(brws == "Chrome"){
    cnvs.width = range.clientWidth;
    cnvs.height = range.clientHeight;
    range.style.position = "absolute";
    range.style.appearance = "none";
    range.style.background = "rgb(211 211 211 / 18%)";
    range.style.outline = "none";
    range.style.opacity = "0.7";
    range.style.borderRadius = "0";
    range.style.transform = "rotate(270deg)";
    range.style.height = "1.2rem";
    range.style.width = "28rem";
    range.style.top = "14rem";
    range.style.right = "-13.5rem";
    range.style.bottom = "0";
}else{
    cnvs.width = range.clientWidth;
    cnvs.height = range.clientHeight;
}

var ctx = cnvs.getContext("2d");

ctx.fillRect(4, 1, 15, 1);
ctx.fillRect(8, 6, 15, 1);
ctx.fillRect(8, 11, 15, 1);
ctx.fillRect(8, 16, 15, 1);
ctx.fillRect(8, 21, 15, 1);
ctx.fillStyle = "red";
ctx.fillRect(6, 26, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 31, 15, 1);
ctx.fillRect(8, 36, 15, 1);
ctx.fillRect(8, 41, 15, 1);
ctx.fillRect(8, 46, 15, 1);
ctx.fillStyle = "blue";
ctx.fillRect(4, 51, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 56, 15, 1);
ctx.fillRect(8, 61, 15, 1);
ctx.fillRect(8, 66, 15, 1);
ctx.fillRect(8, 71, 15, 1);
ctx.fillStyle = "red";
ctx.fillRect(6, 76, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 81, 15, 1);
ctx.fillRect(8, 86, 15, 1);
ctx.fillRect(8, 91, 15, 1);
ctx.fillRect(8, 96, 15, 1);
ctx.fillRect(8, 101, 15, 1);


