function clearFav() {
  if (favCharacterList.length === 0) {
    favSection.classList.add('collapsed');
  }
}

function handleClearClick(event) {
  event.preventDefault();
  localStorage.removeItem('favdata');
  favSection.classList.add('collapsed');
}

clearBtn.addEventListener('click', handleClearClick);
