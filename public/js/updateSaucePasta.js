//Update Sauce Pasta
const updateSaucePasta = async(event) => {
  event.preventDefault();
  const saucePastaId = document.querySelector('input[name="sauce-pasta-id"]').value;
  const id = document.querySelector('#id').value.trim();
  const name = document.querySelector('#name').value.trim();
  const price3oz = document.querySelector('#price3oz').value.trim();
  const price16oz = document.querySelector('#price16oz').value.trim();
  const response = await fetch(`../../api/saucePasta/updateSaucePasta/${saucePastaId}`, {
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
// Delete deleteDressing
const deleteSacuePasta = async(event) => {
  if (confirm("Are you sure you want to delete this SAUCE PASTA and all things related to it? This action cannot be undone!!") == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/saucePasta/deleteSaucePasta/${id}`, {
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
document.querySelector('#updateSaucePasta').addEventListener('submit', updateSaucePasta);
document.querySelector('#deleteButton').addEventListener('click', deleteSacuePasta);