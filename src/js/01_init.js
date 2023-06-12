function init() {
  if (storedFav) {
    favCharacterList = storedFav;
    renderFavList(favCharacterList);
    favSection.classList.remove('collapsed');
  } else {
    favSection.classList.add('collapsed');
  }
}

init();

fetch('http://api.disneyapi.dev/character?pageSize=50')
  .then((response) => response.json())
  .then((charData) => {
    console.log(charData);
    charDataList = charData.data;
    renderCharList(charDataList);
  });
