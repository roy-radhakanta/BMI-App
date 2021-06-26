const genderBoard = document.getElementById('boardGender');
const weightBoard = document.getElementById('boardWeight');
const heightBoard = document.getElementById('boardHeight');
const chooseMale = document.getElementById('chooseMale');
const chooseFemale = document.getElementById('chooseFemale');
const enterWeight = document.getElementById('weight__take');
const range = document.getElementById('height');
const line = document.getElementById('lineR');
const humanHeight = document.getElementById('humanBody');
const resultStatus = document.getElementById('showStatus');
const resultImg = document.getElementById('showImage');
const resultResult = document.getElementById('showResult');
const reslutBackground = document.querySelector('.bmi__status');
const maleOrFemale = document.getElementById('chooseGendersx');

range.value = 0;

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
ctx.fillStyle = "blue";
ctx.fillRect(4, 106, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 111, 15, 1);
ctx.fillRect(8, 116, 15, 1);
ctx.fillRect(8, 121, 15, 1);
ctx.fillRect(8, 126, 15, 1);
ctx.fillStyle = "red";
//5.5
ctx.fillRect(6, 131, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 136, 15, 1);
ctx.fillRect(8, 141, 15, 1);
ctx.fillRect(8, 146, 15, 1);
ctx.fillRect(8, 151, 15, 1);
ctx.fillStyle = "blue";
//5
ctx.fillRect(4, 156, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 161, 15, 1);
ctx.fillRect(8, 166, 15, 1);
ctx.fillRect(8, 171, 15, 1);
ctx.fillRect(8, 176, 15, 1);
ctx.fillStyle = "red";
//4.5
ctx.fillRect(6, 181, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 186, 15, 1);
ctx.fillRect(8, 191, 15, 1);
ctx.fillRect(8, 196, 15, 1);
ctx.fillRect(8, 201, 15, 1);
ctx.fillStyle = "blue";
//4
ctx.fillRect(4, 206, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 211, 15, 1);
ctx.fillRect(8, 216, 15, 1);
ctx.fillRect(8, 221, 15, 1);
ctx.fillRect(8, 226, 15, 1);
//3.5
ctx.fillStyle = "red";
ctx.fillRect(6, 231, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 236, 15, 1);
ctx.fillRect(8, 241, 15, 1);
ctx.fillRect(8, 246, 15, 1);
ctx.fillRect(8, 251, 15, 1);
//3
ctx.fillStyle = "blue";
ctx.fillRect(4, 256, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 261, 15, 1);
ctx.fillRect(8, 266, 15, 1);
ctx.fillRect(8, 271, 15, 1);
ctx.fillRect(8, 276, 15, 1);
//2.5
ctx.fillStyle = "red";
ctx.fillRect(6, 281, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 286, 15, 1);
ctx.fillRect(8, 291, 15, 1);
ctx.fillRect(8, 296, 15, 1);
ctx.fillRect(8, 301, 15, 1);
//2
ctx.fillStyle = "blue";
ctx.fillRect(4, 306, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 311, 15, 1);
ctx.fillRect(8, 316, 15, 1);
ctx.fillRect(8, 321, 15, 1);
ctx.fillRect(8, 326, 15, 1);
//1.5
ctx.fillStyle = "red";
ctx.fillRect(6, 331, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 336, 15, 1);
ctx.fillRect(8, 341, 15, 1);
ctx.fillRect(8, 346, 15, 1);
ctx.fillRect(8, 351, 15, 1);
//1
ctx.fillStyle = "blue";
ctx.fillRect(4, 356, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 361, 15, 1);
ctx.fillRect(8, 366, 15, 1);
ctx.fillRect(8, 371, 15, 1);
ctx.fillRect(8, 376, 15, 1);
//0.5
ctx.fillStyle = "red";
ctx.fillRect(6, 381, 15, 1);
ctx.fillStyle = "black";
ctx.fillRect(8, 386, 15, 1);
ctx.fillRect(8, 391, 15, 1);
ctx.fillRect(8, 396, 15, 1);
ctx.fillRect(8, 401, 15, 1);
ctx.fillStyle = "blue";
ctx.fillRect(4, 406, 15, 1);


var dataBase = {
    input:{
        gender: 'male',
        weight: 0,
        height: 0
    },
    output: {
        bmi:''
    }
}


//gender portion
maleOrFemale.addEventListener('click', function(e){
    var elem;
    elem = document.querySelector('.active');
     if(elem !== null){
         elem.classList.remove('active');
     }

    if(e.target.parentNode.classList.contains('genderCh')){
        var prntNde = e.target.parentNode;
        prntNde.classList.toggle('active');
        var maleOrFemale = e.target.nextElementSibling.textContent;
        if(maleOrFemale === "FEMALE"){
            genderBoard.textContent = "FEMALE";
            dataBase.gender = "FEMALE";
        }else if(maleOrFemale === "MALE"){
            genderBoard.textContent = "MALE";
            dataBase.gender = "MALE";
        }
    }   
});
var weightTake = 0;

enterWeight.addEventListener('input', function(){
    weightTake = parseInt(enterWeight.value);
    weightBoard.textContent = weightTake + ' KG';
    dataBase.weight = weightBoard.textContent;    
});

range.addEventListener('change', function(){
    if( parseFloat(range.value) !== 1 && weightTake !== 0){
   
    let heightFt = parseFloat(range.value);
    let weightKg = parseFloat(dataBase.weight);

    heightBoard.textContent = heightFt + ' ft';
    dataBase.height = heightFt;

    //height
    let memterHeight = ftToMeter(heightFt);
    let bmi = bmiCal(weightKg, memterHeight);
    dataBase.output.bmi = bmi;

    //show res
    let bmires = bmi.toFixed(2);
    resultResult.textContent = bmires;
   let status = statusBmi(bmires);
   resultStatus.textContent = status;
   bgColorImg(status);
}
});


//calculation ft to meter
var ftToMeter = function(ft){
    return ft * 0.3048;
}


//calculation BMI
var bmiCal = function(w, h){
    return w / (h * h);
}

//calculate status
var statusBmi = function(bmi){
    if(bmi < 18.5){
        return "underweight";
    }else if(bmi >= 18.5 && bmi <= 24.9 ){
        return "normal";
    }else if(bmi >= 25.0 && bmi <= 29.9){
        return "overweight";
    }else if(bmi >= 30.0){
        return "obese";
    }
}

//bg according to bmi
var bgColorImg = function(status){
    if (status === "underweight") {
        reslutBackground.style.background = "#ffcb00";
        resultStatus.style.color = "#e36b00";
    } else if(status === "normal") {
        reslutBackground.style.background = "#11ffa6";
        resultStatus.style.color = "#009300";
    }else if(status === "overweight") {
        reslutBackground.style.background = "#ff77";
        resultStatus.style.color = "#ff7741";
    }else if(status === "obese") {
        reslutBackground.style.background = "#f11";
        resultStatus.style.color = "#ac0000";
    }
}