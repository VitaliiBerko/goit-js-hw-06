const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listItem = document.querySelector('#ingredients');
  
const makeListItem = () => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient
    itemEl.classList.add('item');
    return itemEl;
  })

}
const elements = makeListItem(ingredients);
listItem.append(...elements);

