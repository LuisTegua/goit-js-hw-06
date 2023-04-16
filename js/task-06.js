const txt = document.querySelector('#validation-input');

txt.addEventListener("blur", () => {
  if (txt.value.length == txt.attributes[2].value)
    txt.className = 'valid';
  else
    txt.className = 'invalid';
});