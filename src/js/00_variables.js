// variables
const charListElement = document.querySelector('.character_list');
const favListElement = document.querySelector('.favorites_list');
const favSection = document.querySelector('.favorites-section');

let charDataList = [];
let favCharacterList = [];

const dataLS = JSON.parse(localStorage.getItem('data'));