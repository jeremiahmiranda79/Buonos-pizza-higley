const radioButton1 = document.getElementById('one');
const radioButton2 = document.getElementById('two');
const radioButton3 = document.getElementById('three');
const radioButton4 = document.getElementById('four');
const radioButton5 = document.getElementById('five');

const buttons = [radioButton1, radioButton2, radioButton3, radioButton4, radioButton5];

buttons.forEach(setFalse);
setFirst();

function setFalse() {
  buttons.checked = false;
}

function setFirst() {
  buttons[0].checked  = true;
  buttons[0].click();
}

function myFunction(event) {
  function myFunction(event) {
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;
    document.getElementById("demo").innerHTML = x + ", " + y;
  }
}