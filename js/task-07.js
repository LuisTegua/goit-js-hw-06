const size = document.querySelector('#font-size-control');
const txt = document.querySelector('#text');

size.addEventListener("input", event => {
  txt.style.fontSize = size.value + 'px';
});