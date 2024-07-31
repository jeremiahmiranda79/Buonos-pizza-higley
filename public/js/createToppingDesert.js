// Create topping desert
const createToppingDesert = async(event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const response = await fetch('../../api/toppingDesert/createToppingDesert', {
    method: 'POST',
    body: JSON.stringify({ 
      name,
      price
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    alert('Topping Desert Created');
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};
document.querySelector('#createToppingDesert').addEventListener('submit', createToppingDesert);