// Create pasta
const createPasta = async(event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const price5oz = document.querySelector('#price5oz').value.trim();
  const price9oz = document.querySelector('#price9oz').value.trim();
  const response = await fetch('../../api/pasta/createPasta', {
    method: 'POST',
    body: JSON.stringify({ 
      name,
      price5oz,
      price9oz
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    alert('Pasta Created');
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};
document.querySelector('#createPastas').addEventListener('submit', createPasta);