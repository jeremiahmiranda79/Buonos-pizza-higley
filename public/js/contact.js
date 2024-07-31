function sendEmail() {
  var params = {
    name_id: document.getElementById('name_id').value,
    email_id: document.getElementById('email_id').value,
    phone_id: document.getElementById('phone_id').value,
    message_id: document.getElementById('message_id').value
  }

  emailjs.send('service_i3q79o7', 'template_ndi0r6f', params).then(function (res) {
    alert('Success! ' + res.status);
  })
}