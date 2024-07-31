//Update Topping Hot Sub
const updateToppingHotSub = async(event) => {
  event.preventDefault();
  const toppingHotSubId = document.querySelector('input[name="topping-hot-sub-id"]').value;
  const id = document.querySelector('#id').value.trim();
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const response = await fetch(`../../api/toppingHotSub/updateToppingHotSub/${toppingHotSubId}`, {
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
//Delete Topping Hot Sub
const deleteToppingHotSub = async(event) => {
  if (confirm("Are you sure you want to delete this TOPPING HOT SUB and all things related to it? This action cannot be undone!!") == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/toppingHotSub/deleteToppingHotSub/${id}`, {
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
document.querySelector('#updateToppingHotSub').addEventListener('submit', updateToppingHotSub);
document.querySelector('#deleteButton').addEventListener('click', deleteToppingHotSub);