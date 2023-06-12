'use strict';

// variables
const charListElement = document.querySelector('.character_list');
const favListElement = document.querySelector('.favorites_list');

let charDataList = [];
let favCharacterList = [];

const dataLS = JSON.parse(localStorage.getItem('data'));

//functions
init();
function init() {
  if (dataLS) {
    charDataList = dataLS;
    renderCharList(charDataList);
  } else {
    fetch('http://api.disneyapi.dev/character?pageSize=50')
      .then((response) => response.json())
      .then((charData) => {
        console.log(charData);
        charDataList = charData.data;
        renderCharList(charDataList);
        localStorage.setItem('data', JSON.stringify(charDataList));
      });
  }
}

function renderCharList(charDataList) {
  charListElement.innerHTML = '';
  for (const eachCharacter of charDataList) {
    charListElement.innerHTML += renderCharacter(eachCharacter);
  }
  addEventCharacter();
}

function addEventCharacter() {
  const liElementList = document.querySelectorAll('.js-li-character');
  for (const li of liElementList) {
    li.addEventListener('click', handleClick);
  }
}

function renderCharacter(charData) {
  let html = `<li id="${charData._id}" class="character_list-one js-li-character">
    <img
      class="char_img"
      src=${charData.imageUrl}
      alt="character"
    />
    <p class="char_name">${charData.name}</p>
  </li>`;
  return html;
}

function handleClick(event) {
  const selectedId = event.currentTarget.id;
  const id = parseInt(selectedId);
  const selectedCharacter = charDataList.find((item) => item._id === id);
  const indexCharacter = favCharacterList.findIndex((item) => item._id === id);
  favCharacterList.push(selectedCharacter);
  if (indexCharacter === -1) {
    favCharacterList.push(selectedCharacter);
  } else {
    favCharacterList.splice(indexCharacter, 1);
  }
  console.log(favCharacterList);
  renderFavList();
}

function renderFavList() {
  favListElement.classList.remove('collapsed');
  favListElement.innerHTML = '';
  for (const fav of favCharacterList) {
    favListElement.innerHTML += renderCharacter(fav);
  }
}

//events
/*fetch('http://api.disneyapi.dev/character?pageSize=50')
  .then((response) => response.json())
  .then((charData) => {
    console.log(charData);
    charDataList = charData.data;
    renderCharList(charDataList);
    localStorage.setItem('data', JSON.stringify(charDataList));
  });*/
