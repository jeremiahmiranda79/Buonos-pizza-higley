// Update Home Page
const updateHomePage = async(event) => {
  event.preventDefault();
  const homeId = document.querySelector('input[name="home-id"]').value;
  const name = document.querySelector('#name').value.trim();
  const name1 = document.querySelector('#name1').value.trim();
  const description1 = document.querySelector('#description1').value.trim();
  const name1Switch = document.querySelector('#name1Switch').value.trim();
  const name2 = document.querySelector('#name2').value.trim();
  const description2 = document.querySelector('#description2').value.trim();
  const name2Switch = document.querySelector('#name2Switch').value.trim();
  const name3_1 = document.querySelector('#name3_1').value.trim();
  const description3_1 = document.querySelector('#description3_1').value.trim();
  const name3_1Switch = document.querySelector('#name3_1Switch').value.trim();
  const description3_2 = document.querySelector('#description3_2').value.trim();
  const name3_2Switch = document.querySelector('#name3_2Switch').value.trim();
  const name4 = document.querySelector('#name4').value.trim();
  const description4 = document.querySelector('#description4').value.trim();
  const name4Switch = document.querySelector('#name4Switch').value.trim();
  const name5_1 = document.querySelector('#name5_1').value.trim();
  const description5_1 = document.querySelector('#description5_1').value.trim();
  const name5_1Switch = document.querySelector('#name5_1Switch').value.trim();
  const description5_2 = document.querySelector('#description5_2').value.trim();
  const name5_2Switch = document.querySelector('#name5_2Switch').value.trim();
  const description5_3 = document.querySelector('#description5_3').value.trim();
  const name5_3Switch = document.querySelector('#name5_3Switch').value.trim();
  const description5_4 = document.querySelector('#description5_4').value.trim();
  const name5_4Switch = document.querySelector('#name5_4Switch').value.trim();
  const description5_5 = document.querySelector('#description5_5').value.trim();
  const name5_5Switch = document.querySelector('#name5_5Switch').value.trim();
  const slice_switch = document.querySelector('#slice_switch').value.trim();
  const doordash_switch = document.querySelector('#doordash_switch').value.trim();
  const ubereats_switch = document.querySelector('#ubereats_switch').value.trim();
  const grubhub_switch = document.querySelector('#grubhub_switch').value.trim();
  const response = await fetch(`../../api/home/updateHome/${homeId}`, {
    method: 'PUT',
    body: JSON.stringify({
      name,
      name1,
      description1,
      name1Switch,
      name2,
      description2,
      name2Switch,
      name3_1,
      description3_1,
      name3_1Switch,
      description3_2,
      name3_2Switch,
      name4,
      description4,
      name4Switch,
      name5_1,
      description5_1,
      name5_1Switch,
      description5_2,
      name5_2Switch,
      description5_3,
      name5_3Switch,
      description5_4,
      name5_4Switch,
      description5_5,
      name5_5Switch,
      slice_switch,
      doordash_switch,
      ubereats_switch,
      grubhub_switch
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) {
    document.location.replace('/');
  }
  else {
    alert(response.statusText);
  }
}
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
checkbox(name1Switch);
checkbox(name2Switch);
checkbox(name3_1Switch);
checkbox(name3_2Switch);
checkbox(name4Switch);
checkbox(name5_1Switch);
checkbox(name5_2Switch);
checkbox(name5_3Switch);
checkbox(name5_4Switch);
checkbox(name5_5Switch);
checkbox(slice_switch);
checkbox(doordash_switch);
checkbox(ubereats_switch);
checkbox(grubhub_switch);
document.querySelector('#updateHomePage').addEventListener('submit', updateHomePage);