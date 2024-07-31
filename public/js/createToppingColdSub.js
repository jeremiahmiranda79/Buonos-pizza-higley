// Create topping cold sub
const createToppingColdSub = async(event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const response = await fetch('../../api/toppingColdSub/createToppingColdSub', {
    method: 'POST',
    body: JSON.stringify({ 
      name,
      price
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    alert('Topping Cold Cold Created');
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};
document.querySelector('#createToppingColdSub').addEventListener('submit', createToppingColdSub);