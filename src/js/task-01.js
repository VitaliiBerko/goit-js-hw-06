const categories =document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

const nameCtegory =document.querySelectorAll('h2');


nameCtegory.forEach(category =>console.log(`Category: ${category.textContent};`, 
 `Elements: ${category.nextElementSibling.children.length}`));



// nameCtegory.forEach(category =>
//     console.log(`Elements: ${category.nextElementSibling.children.length}`));





// const categories = document.querySelectorAll('.item');

// console.log(`Number of categories: ${categories.length}`);

// categories.forEach(category => {
//     const group = [...category.children];   
//      group.forEach(element => {
//         if (element.tagName === 'H2') {
//             console.log(`Elements: ${element.textContent}`);
//         }
//     });    group.forEach(element => {
//         if (element.tagName === 'UL') {
//             console.log(`Elements: ${element.children.length}`);
//         }
//     });
    
// });