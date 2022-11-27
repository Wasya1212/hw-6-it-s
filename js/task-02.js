const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListContainer = document.querySelector('ul#ingredients');

ingredients.forEach(ingredientName => {
  const ingredientsListItem = document.createElement('li');
  ingredientsListItem.textContent = ingredientName;
  ingredientsListItem.classList.add('item');
  ingredientsListContainer.appendChild(ingredientsListItem);
});