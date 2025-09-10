function startCV() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('cv-content').style.display = 'block';
}

function showSection(id) {
  document.getElementById('menu').style.display = 'none';
  document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function goBack() {
  document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
  document.getElementById('menu').style.display = 'flex';
}
