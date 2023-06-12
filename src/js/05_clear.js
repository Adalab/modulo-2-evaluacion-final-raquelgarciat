function clearFavOne() {
  if (favCharacterList.length === 0) {
    favSection.classList.add('collapsed');
  }
}

function handleClearClick(ev) {
  ev.preventDefault();
  localStorage.removeItem('favdata');
  favSection.classList.add('collapsed');
}

clearBtn.addEventListener('click', handleClearClick);