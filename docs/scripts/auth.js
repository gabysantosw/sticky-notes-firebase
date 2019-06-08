// ACCESS
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    // user is logged in
    // close modal
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();

    // clear the form fields
    loginForm.reset();
    loginForm.querySelector('.error').innerHTML = '';
  }).catch(error => {
    loginForm.querySelector('.error').innerHTML = error.message;
  });
});