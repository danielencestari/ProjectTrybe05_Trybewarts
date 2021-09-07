const loginEmailInput = document.querySelector('#email');
const loginPasswordInput = document.querySelector('#password');
const loginButton = document.querySelector('#submit');
const agreed = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

function validateEmailAndPassword() {
  loginButton.addEventListener('click', () => {
    if ((loginEmailInput.value === 'tryber@teste.com') && (loginPasswordInput.value === '123456')) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

validateEmailAndPassword();

submitBtn.disabled = true;
agreed.addEventListener('change', () => {
  if (agreed.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
