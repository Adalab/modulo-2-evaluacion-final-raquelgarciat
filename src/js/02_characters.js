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

function renderCharList() {
  charListElement.innerHTML = '';
  for (const eachCharacter of charDataList) {
    charListElement.innerHTML += renderCharacter(eachCharacter);
  }
  addEventCharacter();
  //addDefaultImage();
}

/*function addDefaultImage() {
  let eachPicture = charData.imageUrl;
  if ((eachPicture = '')) {
    charData.imageUrl =
      'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
  }
}*/
