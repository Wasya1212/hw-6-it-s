const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];

const ingredientsListContainer = document.querySelector('ul#ingredients');
const fragment = document.createDocumentFragment();

ingredients.forEach(ingredientName => {
  const ingredientsListItem = document.createElement('li');
  ingredientsListItem.textContent = ingredientName;
  ingredientsListItem.classList.add('item');
  fragment.appendChild(ingredientsListItem);
});

ingredientsListContainer.appendChild(fragment);