function searchWithEnter(event) {
  if (event.key !== 'Enter') {
    return;
  }

  search();
}

function search() {
  const fileName = document.getElementById('file-name').value;

  if (!fileName) {
    return;
  }

  const archiveSearch = 'https://archive.org/search'
    + `?query=${fileName}+NOT+access-restricted-item%3Atrue`
	+ `&and[]=mediatype%3A"texts"`;

  const redirect = document.getElementById('redirect').checked;

  if (redirect) {
    window.location.href = archiveSearch;
    return;
  }

  window.open(archiveSearch);
}
