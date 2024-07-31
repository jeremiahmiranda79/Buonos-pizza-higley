//Update Sauce Wing
const updateSauceWing = async(event) => {
  event.preventDefault();
  const sauceWingId = document.querySelector('input[name="sauce-wing-id"]').value;
  const id = document.querySelector('#id').value.trim();
  const name = document.querySelector('#name').value.trim();
  const price3oz = document.querySelector('#price3oz').value.trim();
  const price16oz = document.querySelector('#price16oz').value.trim();
  const response = await fetch(`../../api/sauceWing/updateSauceWing/${sauceWingId}`, {
    method: 'PUT',
    body: JSON.stringify({
      id,
      name,
      price3oz,
      price16oz
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
//Delete Sauce Wing
const deleteSauceWing = async(event) => {
  if (confirm("Are you sure you want to delete this SAUCE WING and all things related to it? This action cannot be undone!!") == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/sauceWing/deleteSauceWing/${id}`, {
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
document.querySelector('#updateSauceWing').addEventListener('submit', updateSauceWing);
document.querySelector('#deleteButton').addEventListener('click', deleteSauceWing);