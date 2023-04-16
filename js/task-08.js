const form = document.querySelector('.login-form');

form.addEventListener("submit", event => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if ((email.value == '') || (password.value == ''))
    alert('No todos los campos estan llenos');
  else { 
    console.log(`Email: ${email.value}`);
    console.log(`Password: ${password.value}`);
  }
  event.currentTarget.reset();
});
