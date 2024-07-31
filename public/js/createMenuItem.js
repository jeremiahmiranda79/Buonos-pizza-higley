//Create menu item
const createMenuItem = async(event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const description = document.querySelector('#description').value.trim();
  const categoryId = document.querySelector('#categories').value.trim();

  // const switchy = true;
  
  const response = await fetch('/api/menu/newitem', {
    method: 'POST',
    body: JSON.stringify({ 
      name, 
      description, 
      categoryId
      // switchy 
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    alert('Menu Item Created');
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};
document.querySelector('#createMenuItem').addEventListener('submit', createMenuItem);