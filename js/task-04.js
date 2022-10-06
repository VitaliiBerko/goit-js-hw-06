
let caunterValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]');

const valueRef =document.querySelector('#value');

buttonDecrement.addEventListener('click', () => { 
caunterValue -=1;
valueRef.textContent = caunterValue}
);

const buttonIncrement = document.querySelector('[data-action="increment"]');

buttonIncrement.addEventListener('click', () => {
    caunterValue+=1;
    valueRef.textContent =caunterValue
});

