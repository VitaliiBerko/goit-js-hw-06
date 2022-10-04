
let caunterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');

const valueRef =document.querySelector('#value');

buttonDecrement.addEventListener('click', () => { 
caunterValue -=1;
valueRef.textContent = caunterValue}
);


const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonIncrement.addEventListener('click', () => {
    caunterValue+=1;
    valueRef.textContent =caunterValue
});

