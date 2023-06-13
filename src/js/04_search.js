'use strict';

/*function fetchSearchData() {
  fetch(searchUrl)
    .then((response) => response.json())
    .then((searchCharData) => {
      apiDataList = searchCharData.data;
    });
}*/

function handleSearch (event) {
  event.preventDefault();
  const searchValue = searchInput.value;
  const filterList = charDataList.filter((newCharData) =>
    newCharData.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log(searchValue);
  console.log(filterList);
  //fetchSearchData();
  renderSearchList(filterList);
};

function renderSearchCharacter(newCharData) {
  let html = `<li id="${newCharData._id}" class="character_list-one js-li-character">
      <img
        class="char_img"
        src=${newCharData.imageUrl}
        alt="character"
      />
      <p class="char_name">${newCharData.name}</p>
    </li>`;
  return html;
}

function renderSearchList(filterList) {
  charListElement.innerHTML = '';
  for (const eachNewCharacter of filterList) {
    charListElement.innerHTML += renderSearchCharacter(eachNewCharacter);
  }
  addEventCharacter();
  //addDefaultImage();
}

searchBtn.addEventListener('click', handleSearch);