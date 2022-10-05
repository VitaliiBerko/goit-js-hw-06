const inputRef =document.querySelector('#validation-input');


inputRef.addEventListener('blur', onBlurInputChange);

function onBlurInputChange(event) {
    // console.log(event.currentTarget.value.length);
   
    if(event.currentTarget.value.length === Number(inputRef.getAttribute('data-length'))) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');        
        
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid') }
   
  
};