'use strict';

function addEventCharacter() {
  const liElementList = document.querySelectorAll('.js-li-character');
  for (const li of liElementList) {
    li.addEventListener('click', handleClick);
  }
}

function handleClick(event) {
  const selectedId = event.currentTarget.id;
  const id = parseInt(selectedId);
  const selectedCharacter = charDataList.find((item) => item._id === id);
  const indexCharacter = favCharacterList.findIndex((item) => item._id === id);
  favSection.classList.remove('collapsed');
  if (indexCharacter === -1) {
    favCharacterList.push(selectedCharacter);
  } else {
    favCharacterList.splice(indexCharacter, 1);
  }
  localStorage.setItem('favdata', JSON.stringify(favCharacterList));
  console.log(storedFav);
  renderFavList();
  clearFav();
}

function renderFavList() {
  //favSection.classList.remove('collapsed');
  favListElement.innerHTML = '';
  for (const fav of favCharacterList) {
    favListElement.innerHTML += renderCharacter(fav);
  }
}
