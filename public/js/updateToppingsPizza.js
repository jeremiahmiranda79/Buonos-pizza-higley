//Update toppings pizza
const updateToppingsPizza = async(event) => {
  event.preventDefault();
  const toppingPizzaId = document.querySelector('input[name="toppingPizza-id"]').value;
  const id = document.querySelector('#id').value.trim();
  const name = document.querySelector('#name').value.trim();
  const priceFull = document.querySelector('#priceFull').value.trim();
  const priceHalf = document.querySelector('#priceHalf').value.trim();
  const priceSlice = document.querySelector('#priceSlice').value.trim();
  const priceGlutenFree = document.querySelector('#priceGlutenFree').value.trim();
  const response = await fetch(`../../api/toppingPizza/updateToppingPizza/${toppingPizzaId}`, {
    method: 'PUT',
    body: JSON.stringify({
      id,
      name,
      priceFull,
      priceHalf,
      priceSlice,
      priceGlutenFree
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) {
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};
//Delete deleteToppingPizza
const deleteToppingPizza = async(event) => {
  if (confirm("Are you sure you want to delete this TOPPING PIZZA and all things related to it? This action cannot be undone!!") == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/toppingPizza/deleteToppingPizza/${id}`, {
        method: 'DELETE',
      });    
      if (response.ok) {
        document.location.replace('/menu');
      } 
      else {
        alert(response.statusText);
      };
    };
  }
  else 
  {
    document.location.replace('/menu');
  }
};
document.querySelector('#updateToppingPizza').addEventListener('submit', updateToppingsPizza);
document.querySelector('#deleteButton').addEventListener('click', deleteToppingPizza);