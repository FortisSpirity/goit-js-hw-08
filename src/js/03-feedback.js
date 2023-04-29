import _throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');

feedbackFormRef.addEventListener('input', _throttle(onFormInputText, 500));
feedbackFormRef.addEventListener('submit', onFormSubmit);

const STOREGE_KEY = "feedback-form-state";
let formDate = {
    email: '',
    message: ''
};

startPage()

function onFormInputText(e) {
    formDate[e.target.name] = e.target.value;
    localStorage.setItem(STOREGE_KEY, JSON.stringify(formDate));
}

function onFormSubmit(e) {
    e.preventDefault()

    if(formDate.email === '' || formDate.message === '') {
        alert('Заповніть всі поля')
        return
    }

    console.log(formDate)
    Object.keys(formDate).forEach(key => (formDate[key] = ''));

    e.currentTarget.reset();
    localStorage.removeItem(STOREGE_KEY)
};

function startPage(e) {
    const savedMessage = localStorage.getItem(STOREGE_KEY);
    const parsedMessage = JSON.parse(savedMessage);

    for (const key in parsedMessage) {
        feedbackFormRef.elements[key].value = parsedMessage[key];
        formDate[key] = parsedMessage[key];
      }
    
}
