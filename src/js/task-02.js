const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const ingredientEl = document.createElement('li');

// ingredients.forEach(ingredient =>{ 
  
//   ingredientEl.textContent = ingredient;
  
//   ingredientEl.classList.add('item');  
    
//     }    
//   ); 

//   const listItem = document.querySelectorAll('#ingredients')
//   // console.log(listItem);
//   listItem.append(ingredientEl);

const listItem = document.querySelector('#ingredients');
  
const  elements = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient
  itemEl.classList.add('item');
  return itemEl;
})

console.log(elements);

listItem.append(...elements);

