const btn = document.querySelector('#submit');
const form = document.querySelector('#coin');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new formData(form);
  const values = [...formData.entries()];
  console.log(values);
});