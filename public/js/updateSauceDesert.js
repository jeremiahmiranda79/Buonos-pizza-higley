//Update sauce desert
const updateSauceDesert = async(event) => {
  event.preventDefault();
  const sauceDesertId = document.querySelector('input[name="sauce-desert-id"]').value;
  const id = document.querySelector('#id').value.trim();
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const response = await fetch(`../../api/sauceDesert/updateSauceDesert/${sauceDesertId}`, {
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
//Delete Dressing
const deleteSauceDesert = async(event) => {
  if (confirm("Are you sure you want to delete this SAUCE DESERT and all things related to it? This action cannot be undone!!") == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/sauceDesert/deleteSauceDesert/${id}`, {
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
document.querySelector('#updateSauceDesert').addEventListener('submit', updateSauceDesert);
document.querySelector('#deleteButton').addEventListener('click', deleteSauceDesert);