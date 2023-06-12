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

function renderCharList(charDataList) {
  charListElement.innerHTML = '';
  for (const eachCharacter of charDataList) {
    charListElement.innerHTML += renderCharacter(eachCharacter);
  }
  addEventCharacter();
}
