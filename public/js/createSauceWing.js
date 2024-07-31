// Create sauce wing
const createSauceWing = async(event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const price3oz = document.querySelector('#price3oz').value.trim();
  const price16oz = document.querySelector('#price16oz').value.trim();
  const response = await fetch('../../api/sauceWing/createSauceWing', {
    method: 'POST',
    body: JSON.stringify({ 
      name,
      price3oz,
      price16oz
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    alert('Sauce Wing Created');
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};
document.querySelector('#createSauceWing').addEventListener('submit', createSauceWing);