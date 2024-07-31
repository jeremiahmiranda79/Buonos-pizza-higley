//Update dressing
const updateDressing = async(event) => {
  event.preventDefault();
  const dressingId = document.querySelector('input[name="dressing-id"]').value;
  const id = document.querySelector('#id').value.trim();
  const name = document.querySelector('#name').value.trim();
  const price3oz = document.querySelector('#price3oz').value.trim();
  const price16oz = document.querySelector('#price16oz').value.trim();
  const response = await fetch(`../../api/dressing/updateDressing/${dressingId}`, {
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
//Delete Dressing
const deleteDressing = async(event) => {
  if (confirm("Are you sure you want to delete this DRESSING and all things related to it? This action cannot be undone!!") == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/dressing/deleteDressing/${id}`, {
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
document.querySelector('#updateDressing').addEventListener('submit', updateDressing);
document.querySelector('#deleteButton').addEventListener('click', deleteDressing);