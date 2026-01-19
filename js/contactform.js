const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_5l5b6rk';
   const templateID = 'template_qwu1yok';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("message").value="";
      document.getElementById("phone").value="";
      document.getElementById("subject").value="";

    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});