const successMessage = document.querySelector('.success');
const button = document.querySelector('button');

function showSuccessMessage() {
    successMessage.style.display = 'block';

    if(!input.value) {
        successMessage.textContent = 'Por favor preencha';
        return;
    }

    successMessage.textContent = `O usuario ${input.value} foi cadastrado!`
    input.value = '';
}

button.onclick = showSuccessMessage;