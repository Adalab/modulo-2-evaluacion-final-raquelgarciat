function init() {
  if (storedFav) {
    favCharacterList = storedFav;
    renderFavList(favCharacterList);
    favSection.classList.remove('collapsed');
  } else {
    favSection.classList.add('collapsed');
  }
}

function fetchData() {
  fetch(url)
    .then((response) => response.json())
    .then((charData) => {
      charDataList = charData.data;
      renderCharList(charDataList);
    });
}

clearFav();
fetchData();
init();