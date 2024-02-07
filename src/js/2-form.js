document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    
    function saveFormState() {
        const formData = {
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
    
    function populateFormFromStorage() {
        const storedData = localStorage.getItem('feedback-form-state');
        if (storedData) {
            const formData = JSON.parse(storedData);
            emailInput.value = formData.email;
            messageInput.value = formData.message;
        }
    }
    
    populateFormFromStorage();
    
    form.addEventListener('input', () => {
        saveFormState();
    });
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
       
        if (emailInput.value.trim() !== '' && messageInput.value.trim() !== '') {
            const formData = {
                email: emailInput.value.trim(),
                message: messageInput.value.trim()
            };
            console.log(formData); 
            
            localStorage.removeItem('feedback-form-state');
            emailInput.value = '';
            messageInput.value = '';
        } else {
            alert('Please fill in both fields before submitting.');
        }
    });
});