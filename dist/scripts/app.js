// SECTION TRANSITIONS
const addSection = document.getElementById('add-section');
const mainSection = document.getElementById('main-section');
const accessSection = document.getElementById('access-section');

const toAddSection = document.getElementById('to-add-section');
const addSticky = document.getElementById('add-sticky');
const enterButton = document.getElementById('access-button-enter');

let user = 'n';

// ACCESS SECTION
// ENTERING PIN CODE, ACCESS MAIN SECTION
enterButton.addEventListener('click', () => {
  accessSection.classList.add('hidden');
    mainSection.classList.remove('hidden');
  // // get input from #access-input
  // db.collection('users').doc('user-l').get().then(doc => {
  //   if (input === doc.data().number) {
  //     user = 'l';
  //   }
  // });
  // if (user === 'n') {
  //   db.collection('users').doc('user-g').get().then(doc => {
  //     if (input === doc.data().number) {
  //       user = 'g';
  //     }
  //   });
  // }
  // if (user !== 'n') {
  //   // check if input matches
  //   accessSection.classList.add('hidden');
  //   mainSection.classList.remove('hidden');
  // }
});

// MAIN SECTION
// PRESSING + IN MAIN, GO TO ADD STICKY SECTION FORM
toAddSection.addEventListener('click', () => {
  mainSection.classList.add('hidden');
  addSection.classList.remove('hidden');
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  addSticky['form-footer'].value = `${date.toString().padStart(2, '0')} / ${month.toString().padStart(2, '0')} / ${year}`
});

// ADD SECTION
// BACK BUTTON, RETURN TO MAIN -> NO ADDING
const goBack = document.getElementById('to-main-section');

goBack.addEventListener('click', () => {
  addSection.classList.add('hidden');
  mainSection.classList.remove('hidden');
});

// ADDING STICKY, RETURN TO MAIN -> ADDING
addSticky.addEventListener('submit', event => {
  event.preventDefault();
  // console.log(addSticky['form-title'].value);
  // console.log(addSticky['form-text'].value);
  // console.log(addSticky['form-footer'].value);
  // console.log(addSticky.elements['color'].value);

  addSection.classList.add('hidden');
  mainSection.classList.remove('hidden');
});

// DYNAMIC RADIO COLORS
const colorSection = document.getElementById('color-section');

colorSection.addEventListener('click', event => {
  if (event.target.tagName == 'LABEL' && event.target !== event.currentTarget) {
    const colors = ['yellow', 'green', 'red', 'blue', 'purple'];
    for(let i = 0; i < colors.length; i++) {
      addSticky.classList.remove(colors[i]);
    }
    addSticky.classList.add(event.target.dataset.color);
  }
});
