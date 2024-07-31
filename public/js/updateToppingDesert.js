//Update topping desert
const updateToppingDesert = async(event) => {
  event.preventDefault();
  const toppingDesertId = document.querySelector('input[name="topping-desert-id"]').value;
  const id = document.querySelector('#id').value.trim();
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const response = await fetch(`../../api/toppingDesert/updateToppingDesert/${toppingDesertId}`, {
    method: 'PUT',
    body: JSON.stringify({
      id,
      name,
      price
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
//Delete topping desert
const deleteToppingDesert = async(event) => {
  if (confirm("Are you sure you want to delete this TOPPING DESERT and all things related to it? This action cannot be undone!!") == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/toppingDesert/deleteToppingDesert/${id}`, {
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
document.querySelector('#updateToppingDesert').addEventListener('submit', updateToppingDesert);
document.querySelector('#deleteButton').addEventListener('click', deleteToppingDesert);