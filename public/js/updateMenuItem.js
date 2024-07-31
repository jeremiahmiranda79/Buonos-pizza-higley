//Update the Menu Item through the API
const updateMenuItem = async(event) => {
  event.preventDefault();
  const itemId = document.querySelector('input[name="item-id"]').value;
  const name = document.querySelector('#name').value.trim();
  const description = document.querySelector('#description').value.trim();
  const switchy = document.querySelector('#switchy').value.trim();
  const size1 = document.querySelector('#size1').value.trim();
  const price1 = document.querySelector('#price1').value.trim();
  const size2 = document.querySelector('#size2').value.trim();
  const price2 = document.querySelector('#price2').value.trim();
  const size3 = document.querySelector('#size3').value.trim();
  const price3 = document.querySelector('#price3').value.trim();
  const toppingPizzaFull = document.querySelector('#toppingPizzaFull').value.trim().toLowerCase();
  const toppingPizzaSlice = document.querySelector('#toppingPizzaSlice').value.trim().toLowerCase();
  const toppingPizzaGlutenFree = document.querySelector('#toppingPizzaGlutenFree').value.trim().toLowerCase();
  const toppingHotSub = document.querySelector('#toppingHotSub').value.trim().toLowerCase();
  const toppingColdSub = document.querySelector('#toppingColdSub').value.trim().toLowerCase();
  const toppingDesert = document.querySelector('#toppingDesert').value.trim().toLowerCase();
  const saladDressing = document.querySelector('#saladDressing').value.trim().toLowerCase();
  const wingSauce = document.querySelector('#wingSauce').value.trim().toLowerCase();
  const pastaType = document.querySelector('#pastaType').value.trim().toLowerCase();
  const marinaraSauce = document.querySelector('#marinaraSauce').value.trim().toLowerCase();
  const desertSauce = document.querySelector('#desertSauce').value.trim().toLowerCase();
  const categoryId = document.querySelector('#categories').value;
  const response = await fetch(`../../api/menu/updateMenuItem/${itemId}`, {
    method: 'PUT',
    body: JSON.stringify({ 
      name, 
      description, 
      switchy,
      size1,
      price1,
      size2,
      price2,
      size3,
      price3,
      toppingPizzaFull,
      toppingPizzaSlice,
      toppingPizzaGlutenFree,
      toppingHotSub,
      toppingColdSub,
      toppingDesert,
      saladDressing,
      wingSauce,
      pastaType,
      marinaraSauce,
      desertSauce,
      categoryId,
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
// Functionality for Delete button as well
const deleteMenuItem = async(event) => {
  if (confirm("Are you sure you want to delete this MENU ITEM and all things related to it? This action cannot be undone!!") == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/menu/deleteMenuItem/${id}`, {
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
function checkbox(x) {
  var box = x;
  if(box.value == "false"){
     x.value = "false"; 
     x.checked = false;
  }
  else if(box.value == "true"){
    x.value = "true";
    x.checked = true;
  }
  x.addEventListener('change', function(){
    if(this.checked){
      x.value = "true";
    } 
    else if(this.checked == false){
      x.value = "false";
    }
  });
  return box;
};
checkbox(switchy);
checkbox(toppingPizzaFull);
checkbox(toppingPizzaSlice);
checkbox(toppingPizzaGlutenFree);
checkbox(toppingHotSub);
checkbox(toppingColdSub);
checkbox(toppingDesert);
checkbox(saladDressing);
checkbox(wingSauce);
checkbox(pastaType);
checkbox(marinaraSauce);
checkbox(desertSauce);
document.querySelector('#updateMenuItem').addEventListener('submit', updateMenuItem);
document.querySelector('#deleteButton').addEventListener('click', deleteMenuItem);