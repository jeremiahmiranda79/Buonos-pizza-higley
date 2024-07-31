//Update Pasta
const updatePasta = async(event) => {
  event.preventDefault();
  const pastaId = document.querySelector('input[name="pasta-id"]').value;
  const id = document.querySelector('#id').value.trim();
  const name = document.querySelector('#name').value.trim();
  const price5oz = document.querySelector('#price5oz').value.trim();
  const price9oz = document.querySelector('#price9oz').value.trim();
  const response = await fetch(`../../api/pasta/updatePasta/${pastaId}`, {
    method: 'PUT',
    body: JSON.stringify({
      id,
      name,
      price5oz,
      price9oz
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) {
    alert('Pasta Updated');
    document.location.replace(`/menu`);
  } 
  else {
    alert(response.statusText);
  };
};
// Delete Pasta
const deletePasta = async(event) => {
  if (confirm("Are you sure you want to delete this PASTA and all things related to it? This action cannot be undone!!") == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/pasta/deletePasta/${id}`, {
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
document.querySelector('#updatePasta').addEventListener('submit', updatePasta);
document.querySelector('#deleteButton').addEventListener('click', deletePasta);