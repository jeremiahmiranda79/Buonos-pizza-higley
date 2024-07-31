// Update category
const updateCategory = async(event) => {
  event.preventDefault();
  const categoryId = document.querySelector('input[name="category-id"]').value;
  const name = document.querySelector('#name').value.trim();
  const image = document.querySelector('#image').value;
  const switchy = document.querySelector('#switchy').value.trim().toLowerCase();
  const response = await fetch(`../../api/menu/updateCategory/${categoryId}`, {
    method: 'PUT',
    body: JSON.stringify({ 
      name, image , switchy
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
//Delete Category
const deleteCategory = async(event) => {
  if (confirm(`Are you sure you want to delete this Category and ALL things related to it? This action CAN NOT be undone!!`) == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/menu/deleteCategory/${id}`, {
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
  else {
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
document.querySelector('#updateCategory').addEventListener('submit', updateCategory);
document.querySelector('#deleteButton').addEventListener('click', deleteCategory);