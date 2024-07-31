//Update Topping Cold Sub
const updateToppingColdSub = async(event) => {
  event.preventDefault();
  const toppingColdSubId = document.querySelector('input[name="topping-cold-sub-id"]').value;
  const id = document.querySelector('#id').value.trim();
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const response = await fetch(`../../api/toppingColdSub/updateToppingColdSub/${toppingColdSubId}`, {
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
//Delete Topping Cold Sub
const deleteToppingColdSub = async(event) => {
  if (confirm("Are you sure you want to delete this TOPPING COOLD SUB and all things related to it? This action cannot be undone!!") == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/toppingColdSub/deleteToppingColdSub/${id}`, {
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
document.querySelector('#updateToppingColdSub').addEventListener('submit', updateToppingColdSub);
document.querySelector('#deleteButton').addEventListener('click', deleteToppingColdSub);