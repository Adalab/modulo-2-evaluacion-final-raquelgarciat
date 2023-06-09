'use strict';

const charListElement = document.querySelector('.character_list');
let charDataList = [];

function renderCharacter(charData) {
  const char = `<div class="character_list-one">
    <img
      class="char_img"
      src=${charData.imageUrl}
      alt="character"
    />
    <p class="char_name">${charData.name}</p>
  </div>`;
  return char;
}

function renderCharList(charDataList) {
  for (const eachCharacter of charDataList) {
    charListElement.innerHTML += renderCharacter(eachCharacter);
  }
}

fetch('http://api.disneyapi.dev/character')
  .then((response) => response.json())
  .then((charData) => {
    console.log(charData);
    charDataList = charData.data;
    renderCharList(charDataList);
    localStorage.setItem('data', JSON.stringify(charDataList));
  });