const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listItem = document.querySelector('#ingredients');
  
// const  elements = ingredients.map(ingredient => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient
//   itemEl.classList.add('item');
//   return itemEl;
// })

// console.log(elements);

// listItem.append(...elements);

const makeListItem = items => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient
    itemEl.classList.add('item');
    return itemEl;
  })

}
const elements = makeListItem(ingredients);
listItem.append(...elements);

