// PUT INTO A FUNCTION //
// set variable for button
const toggleButton = document.querySelector("#toggle-grid-slide");
// add event listener to button
toggleButton.addEventListener("click", () => {
// toggle grid container template rows fr by toggling the class visible
  document.querySelector("#grid-container").classList.toggle("visible");
});

// ADD USER INPUT FIELD //

"use strict";
const numberFormatter = Intl.NumberFormat('en-US');
// player coins //
if (!localStorage.getItem("coins")) {
  localStorage.setItem("coins", 0);
};

let coins = localStorage.getItem("coins");
let currentHighestValue = 0;

// plays a sound when currency item is clicked //
const clickSound = function() {
  const audio = new Audio;
  audio.src = "coin-sounds/coins.mp3";
  audio.playbackRate = 2;
  audio.play();
}

const errorSound = function() {
  const audio = new Audio;
  audio.src = "coin-sounds/error.mp3";
  audio.playbackRate = 2;
  audio.play();  
}

// function that picks a random number in the specified range //
const randomRange = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// constructor function to make currency item objects //
function Currency(commonClass, rarity, selected, source, value) {
  this.commonClass = commonClass;
  this.rarity = rarity;
  this.selected = selected;
  this.source = source;
  this.value = value;
};

// making all the objects //
const bigNugget = new Currency("currency-item", 10, false, "images/big-nugget.png", 10000);
const bigPearl = new Currency("currency-item", 9, false, "images/big-pearl.png", 8000);
const rareCandy = new Currency("currency-item", 8, false, "images/rare-candy.png", 5000);
const nugget = new Currency("currency-item", 7, false, "images/nugget.png", 1000);
const starPiece = new Currency("currency-item", 7, false, "images/star-piece.png", 1000);
const pearl = new Currency("currency-item", 6, false, "images/pearl.png", 700);
const starDust = new Currency("currency-item", 6, false, "images/star-dust.png", 700);
const moonStone = new Currency("currency-item", 5, false, "images/moon-stone.png", 400);
const sunStone = new Currency("currency-item", 5, false, "images/sun-stone.png", 400);
const dawnStone = new Currency("currency-item", 4, false, "images/dawn-stone.png", 300);

const shinyStone = new Currency("currency-item", 4, false, "images/shiny-stone.png", 300);
const duskStone = new Currency("currency-item", 4, false, "images/dusk-stone.png", 300);
const waterStone = new Currency("currency-item", 3, false, "images/water-stone.png", 200);
const leafStone = new Currency("currency-item", 3, false, "images/leaf-stone.png", 200);
const thunderStone = new Currency("currency-item", 3, false, "images/thunder-stone.png", 200);
const fireStone = new Currency("currency-item", 3, false, "images/fire-stone.png", 200);
const redShard = new Currency("currency-item", 1, false, "images/red-shard.png", 10);
const yellowShard = new Currency("currency-item", 1, false, "images/yellow-shard.png", 10);
const blueShard = new Currency("currency-item", 1, false, "images/blue-shard.png", 15);
const greenShard = new Currency("currency-item", 1, false, "images/green-shard.png", 15);

const deepSeaScale = new Currency("currency-item", 3, false, "images/deep-sea-scale.png", 250);
const dragonScale = new Currency("currency-item", 3, false, "images/dragon-scale.png", 250);
const prismScale = new Currency("currency-item", 3, false, "images/prism-scale.png", 250);
const everStone = new Currency("currency-item", 1, false, "images/everstone.png", 5);
const eviolite = new Currency("currency-item", 2, false, "images/eviolite.png", 20);
const floatStone = new Currency("currency-item", 1, false, "images/float-stone.png", 5);
const hardStone = new Currency("currency-item", 1, false, "images/hard-stone.png", 8);
const ironBall = new Currency("currency-item", 1, false, "images/iron-ball.png", 8);
const lightClay = new Currency("currency-item", 2, false, "images/light-clay.png", 20);
const ovalStone = new Currency("currency-item", 1, false, "images/oval-stone.png", 5);

// creating array of these currency objects //
const currencyArr = [bigNugget, bigPearl, nugget, starPiece, pearl, blueShard, greenShard, yellowShard, redShard, moonStone, leafStone, fireStone, thunderStone, waterStone, sunStone, rareCandy, starDust, duskStone, shinyStone, dawnStone, deepSeaScale, dragonScale, everStone, eviolite, floatStone, hardStone, ironBall, lightClay, ovalStone, prismScale];

// renders the players coins on screen //
const displayCoins = function() {
  document.getElementById("player-coins").innerHTML = numberFormatter.format(coins);
}

// selects which items will appear, limits to 9 //
const selectCurrencyItems = function(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (total < 9) {
      if (arr[i].rarity === 10) {
        let randNum = Math.ceil(Math.random()*300);
        if (randNum === 1) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 9) {
        let randNum = Math.ceil(Math.random()*280);
        if (randNum <= 2) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 8) {
        let randNum = Math.ceil(Math.random()*260);
        if (randNum <= 3) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 7) {
        let randNum = Math.ceil(Math.random()*240);
        if (randNum <= 4) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 6) {
        let randNum = Math.ceil(Math.random()*220);
        if (randNum <= 5) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 5) {
        let randNum = Math.ceil(Math.random()*200);
        if (randNum <= 6) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 4) {
        let randNum = Math.ceil(Math.random()*180);
        if (randNum <= 7) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 3) {
        let randNum = Math.ceil(Math.random()*160);
        if (randNum <= 8) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 2) {
        let randNum = Math.ceil(Math.random()*140);
        if (randNum <= 10) {
          arr[i].selected = true;
          total++;
        } 
      } else if (arr[i].rarity === 1) {
        let randNum = Math.ceil(Math.random()*100);
        if (randNum <= 50) {
          arr[i].selected = true;
          total++;
        } 
      }
    }    
  }
}