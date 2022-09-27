const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientEl = document.createElement('li');
// ingredientEl.textContent = 'kjhgljkgljkg'
// console.log(ingredientEl);

ingredients.forEach(ingredient =>{ 
  
  ingredientEl.textContent =ingredient;
  // console.log(ingredient)
  ingredientEl.classList.add('item') 
  console.log(ingredientEl);} 
  );

  const listItem = document.querySelectorAll('#ingredients')
  // console.log(listItem);
  listItem.append(ingredientEl);
  
  

