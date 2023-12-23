/*
Works
*/


const buttonRed = document.querySelector("#red");
const buttonGreen = document.querySelector("#green");
const buttonBlue = document.querySelector("#blue");

const counterWin = 0;
const counterLose = 0;


let win = "win";
let lose = "lose";


const body = document.querySelector("body");

const color =  ["red","blue","green"];

body.style.backgroundColor = "white";


buttonRed.addEventListener('click', () => changeColor("red"));
buttonGreen.addEventListener('click',() => changeColor("green"));
buttonBlue.addEventListener('click',() => changeColor("blue"));

function changeColor(buttonColor) {
    const colorIndex = parseInt(Math.random()*color.length);
    const newColor = color[colorIndex];
    body.style.backgroundColor = newColor;
    if (newColor === buttonColor) {
        counterWin +=1;
        document.getElementById("winning_state").innerHTML = "You: " + win;
    }
    
    
    else {
        counterLose +=1;
        document.getElementById("winning_state").innerHTML = "You: " + lose;
    }
   
   

    
    document.getElementById("win").innerHTML = "Your winning counter is: " + counterWin;
    document.getElementById("lose").innerHTML = "Your losing counter is: " + counterLose;
    
    
}

