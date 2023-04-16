const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const table = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const element = document.createElement('li');
  element.className = 'item';
  element.textContent = ingredient;
  table.append(element);
});
