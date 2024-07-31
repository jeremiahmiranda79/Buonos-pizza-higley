// Create topping pizza
const createToppingPizza = async(event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const priceFull = document.querySelector('#priceFull').value.trim();
  const priceHalf = document.querySelector('#priceHalf').value.trim();
  const priceSlice = document.querySelector('#priceSlice').value.trim();
  const priceGlutenFree = document.querySelector('#priceGlutenFree').value.trim();
  const response = await fetch('../../api/toppingPizza/createToppingPizza', {
    method: 'POST',
    body: JSON.stringify({ 
      name,
      priceFull,
      priceHalf,
      priceSlice,
      priceGlutenFree
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    alert('Pizza Topping Created');
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};
document.querySelector('#createToppingPizza').addEventListener('submit', createToppingPizza);