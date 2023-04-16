const counterValue = document.querySelector('#value');
const inBtn = document.querySelector('[data-action="increment"]');
const deBtn = document.querySelector('[data-action="decrement"]');

const inValue = event => counterValue.textContent = parseFloat(counterValue.textContent) + 1;
const deValue = event => counterValue.textContent = parseFloat(counterValue.textContent) - 1;

inBtn.addEventListener("click",inValue);
deBtn.addEventListener("click",deValue);