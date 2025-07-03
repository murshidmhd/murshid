function sendMail() {
  var paramas = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }

  const serviceID = "service_96ntbbu";
const templateId = "template_eypswkz";

emailjs
  .send(serviceID, templateId, paramas)

  .then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    document.getElementById("message").value = "";
    console.log(res)
    alert("📨 Message sent! I'll get back to you soon.");
  })
.catch((err) => console.log(err));
}

