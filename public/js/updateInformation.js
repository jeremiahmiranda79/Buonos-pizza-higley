// Update the Information through the API
const updateInformation = async(event) => {
  event.preventDefault();
  const infoId = document.querySelector('input[name="info-id"]').value;
  const name = document.querySelector('#name').value.trim();
  const company = document.querySelector('#company').value.trim();
  const phoneNumber = document.querySelector('#phoneNumber').value.trim();
  const telNumber = document.querySelector('#telNumber').value.trim();
  const address = document.querySelector('#address').value.trim();
  const map = document.querySelector('#map').value.trim();
  const email = document.querySelector('#email').value.trim();
  const style = document.querySelector('#style').value.trim();
  const description = document.querySelector('#description').value.trim();
  const information1_switch = document.querySelector('#information1_switch').value.trim();
  const response = await fetch(`../../api/information/updateInformation/${infoId}`, {
    method: 'PUT',
    body: JSON.stringify({
      name,
      company,
      phoneNumber,
      telNumber,
      address,
      map,
      email,
      style,
      description,
      information1_switch
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) {
    document.location.replace('/');
  } 
  else {
    alert(response.statusText);
  }
};
const deleteInformation = async (event) => {
  if (confirm("Are you sure you want to delete this information and all things related to it? This action cannot be undone!!") == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/information/deleteInformation/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        document.location.replace('/');
      } 
      else {
        alert(response.statusText);
      };
    };
  }
  else 
  {
    document.location.replace('/');
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
checkbox(information1_switch);
document.querySelector('#updateInformation').addEventListener('submit', updateInformation);
document.querySelector('#deleteButton').addEventListener('click', deleteInformation);