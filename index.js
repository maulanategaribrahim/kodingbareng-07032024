//generate  random neumber player 1
let randomNum1 = Math.floor(Math.random() * 6) + 1; //1 sampai 6
// console.log(randomNum1);

//mengambil image based on hasil genarate randomNum diatas
var randomDiceImg = "dice" + randomNum1 + ".png"

//SET RANDOM IMAGE BASE ON RANDOM NUMBER
const randomImgSource = "images/" + randomDiceImg

let img1 = document.querySelectorAll("img")[0]

//GANTI ISI
img1.setAttribute("src", randomImgSource)


// Generate random number untuk player 2
let randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "dice" + randomNum2 + ".png"; 

const randomImgSource2 = "images/" + randomDiceImg2;

let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImgSource2);


if (randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "player 1 win !!"
}else if (randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML = "player 2 win !!"   
}else{
    document.querySelector("h1").innerHTML = "draw"   
}

