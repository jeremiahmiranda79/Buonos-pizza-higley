// Create sauce pasta
const createSaucePasta = async(event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const price3oz = document.querySelector('#price3oz').value.trim();
  const price16oz = document.querySelector('#price16oz').value.trim();
  const response = await fetch('../../api/saucePasta/createSaucePasta', {
    method: 'POST',
    body: JSON.stringify({ 
      name,
      price3oz,
      price16oz
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    alert('Sauce Pasta Created');
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};
document.querySelector('#createSaucePasta').addEventListener('submit', createSaucePasta);