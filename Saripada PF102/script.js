let upButton = document.getElementById("up");
let downButton = document.getElementById("down");
let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
let character = document.getElementById("character");

let steps = 80;

let x = 0;
let y = 0;

function moveCharacterRight() {
    x = x + steps;
    character.style.left = `${x}px`;
    character.style.transform = "scaleX(1)";
}
rightButton.addEventListener("click", moveCharacterRight);

function moveCharacterLeft() {
    x = x - steps;
    character.style.left = `${x}px`;
    character.style.transform = "scaleX(-1)";
}
leftButton.addEventListener("click", moveCharacterLeft);

function moveCharacterUp() {
    y = y - steps;
    character.style.top = `${y}px`;
}
upButton.addEventListener("click", moveCharacterUp);

function moveCharacterDown() {
    y = y + steps;
    character.style.top = `${y}px`;
}
downButton.addEventListener("click", moveCharacterDown);
