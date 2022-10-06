function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const createBoxesBtn = document.querySelector('[data-create]');
// console.log(createBoxesBtn);
const deleteBoxesBtn = document.querySelector('[data-destroy]');
// console.log(deleteBoxesBtn);
const numberInput = document.querySelector('#controls').firstElementChild;
// console.log(numberInput);
const divBoxesRef =document.querySelector('#boxes');

createBoxesBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = numberInput.value;

  // if(amount = '') {
  //   alert('Write number');
  //   return 
  //     } 

  const divElemets =[];

  for (let i=0; i<=amount;  i+=1) {
    const divEl = document.createElement('div');    
    divEl.style.width = 30+10*i+'px';
    divEl.style.height = 30+10*i+'px';
    divEl.style.backgroundColor = getRandomHexColor();

    divElemets.push(divEl);
  //  console.log(divElemets);

  } 
  divBoxesRef.append(...divElemets);
    
};


deleteBoxesBtn.addEventListener('click', onClickDeleteBoxes);

function onClickDeleteBoxes() {
  divBoxesRef.innerHTML = '';
  numberInput.value = '';
}