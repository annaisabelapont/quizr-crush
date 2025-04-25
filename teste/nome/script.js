const form = document.getElementById('form')

form.addEventListener('submit', () => {
  const personName = document.getElementById('personName').value;

  localStorage.setItem('personName', personName);
});