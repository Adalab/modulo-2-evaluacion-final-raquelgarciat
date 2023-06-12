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

init();
