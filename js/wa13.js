function check() {
    console.log('test');
}

function submit() {
    alert("What did you think this button would do? Get out of my fucking console! Take 100% volume!");
}

function reset() {
    outputInt = 1000;
    output.textContent = "Thought you could get away from loud noises by resetting everything? Take 1000% volume!";
}

function random() {
    outputInt = randomNumber(0, 100);
    output.textContent = outputInt +"%";
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);

var slider = document.getElementById("myRange");
var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
var sliderOutput = document.querySelector(".slider-output");

// Update the current slider value (each time you drag the slider handle)
function update() {
  sliderOutput.textContent = slider.value + "%";
}