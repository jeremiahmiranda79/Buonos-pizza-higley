// Create sauce desert
const createSauceDesert = async(event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const response = await fetch('../../api/sauceDesert/createSauceDesert', {
    method: 'POST',
    body: JSON.stringify({ 
      name,
      price
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    alert('Sauce Desert Created');
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};
document.querySelector('#createSauceDesert').addEventListener('submit', createSauceDesert);