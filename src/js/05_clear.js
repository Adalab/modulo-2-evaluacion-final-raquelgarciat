function clearFav() {
  if (favCharacterList.length === 0) {
    favSection.classList.add('collapsed');
  }
}

function handleClearClick(event) {
  event.preventDefault();
  localStorage.removeItem('favdata');
  clearFav();
}

clearBtn.addEventListener('click', handleClearClick);