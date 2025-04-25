const personName = localStorage.getItem('personName');

if (personName) {
  document.getElementById('person-name').innerText = personName.toUpperCase();
}

else {
  document.getElementById('person-name').innerText = 'FULANO';
}

const buttonRemake = document.getElementById('remake-test');

buttonRemake.addEventListener('click', () => {
  localStorage.clear();
})