'use strict';

function fetchSearchData() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((searchCharData) => {
      apiDataList = searchCharData.data;
    });
}

function renderSearchList() {
  charListElement.innerHTML = '';
  for (const eachSearch of filterList) {
    charListElement.innerHTML += renderCharacter(eachSearch);
  }
}

function handleSearch (event) {
  event.preventDefault();
  filterList = apiDataList.filter((newCharData) =>
    newCharData.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log(searchValue);
  fetchSearchData();
  renderSearchList();
};

searchBtn.addEventListener('click', handleSearch);