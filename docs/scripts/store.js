// ADD STICKY
const createForm = document.querySelector('#create-form');

createForm.addEventListener('submit', (e) => {
  e.preventDefault();

  db.collection('guides').add({
    title: createForm['title'].value,
    content: createForm['content'].value
  }).then(() => {
    // guide was added
    // clear the form and close the modal
    const modal = document.querySelector('#modal-create');
    M.Modal.getInstance(modal).close();
    createForm.reset();
  }).catch(error => {
    console.log(error.message);
  });
});