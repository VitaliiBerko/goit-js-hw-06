const inputRangeRef =document.querySelector('#font-size-control');
console.log(inputRangeRef.value);


const textOutput = document.querySelector('#text');

console.log(textOutput);


inputRangeRef.addEventListener('input', onRangeChange);

function onRangeChange(event) {
   textOutput.style.fontSize = event.currentTarget.value - 36 + 'px';
}