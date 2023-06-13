// variables
const charListElement = document.querySelector('.character_list');
const favListElement = document.querySelector('.favorites_list');
const favSection = document.querySelector('.favorites-section');
const searchBtn = document.querySelector('.js-search-btn');
const searchInput = document.querySelector('.js-search-input');
const searchValue = searchInput.value;
let url = 'http://api.disneyapi.dev/character?pageSize=50';
const searchUrl = 'https://api.disneyapi.dev/character?pageSize=50&name=${charData.name}';
const clearBtn = document.querySelector('.clear-btn');

let charDataList = [];
let favCharacterList = [];
let filterList = [];
let apiDataList = [];

let storedFav = JSON.parse(localStorage.getItem('favdata'));