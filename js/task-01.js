const numCategories = document.querySelectorAll('.item');
console.log('Number of categories: ' + numCategories.length);

numCategories.forEach(category => {
  console.log('Category:' + category.firstElementChild.textContent);
  console.log('Elements: ' + category.querySelectorAll('li').length);
});


