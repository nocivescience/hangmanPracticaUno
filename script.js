const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification');
const finalMessage = document.getElementById('final-message');
const words=['application','programming','interface','wizard'];
let selectedWord=words[Math.floor(Math.random()*words.length)];
const correctLetters=[];
const wrongLetters=[];
// show hidden word