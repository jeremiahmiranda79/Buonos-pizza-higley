// Update category
const updateCategory = async(event) => {
  event.preventDefault();
  const categoryId = document.querySelector('input[name="item-id"]').value;
  const name = document.querySelector('#name').value.trim();
  const response = await fetch(`../../api/menu/updateCategory/${categoryId}`, {
    method: 'PUT',
    body: JSON.stringify({ 
      name
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
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
// checkbox(pizza);
document.querySelector('#updateCategory').addEventListener('submit', updateCategory);