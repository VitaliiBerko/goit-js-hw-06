
const form = document.querySelector('.login-form');


form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    const {elements: {email, password}} = event.currentTarget;
    
    if(email.value ==="" || password.value ==="") {
        alert('Please fill in ALL the fields!');
        
    }  else {
        const formData ={
            email: email.value,
            password: password.value,
        };

        console.log(formData);
        event.currentTarget.reset();
        return formData;
    }
      
};