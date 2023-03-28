import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form')

const STORAGE_KEY = 'feedback-form-state';

let feedbackFormData = verificationLocalStorage();

onSaveDataFormReload();

formEl.addEventListener('submit',onSubmitForm);
formEl.addEventListener('input',throttle(onInputChange, 500));

function verificationLocalStorage() {
  if (localStorage.getItem(STORAGE_KEY)) {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } else {
    return {};
  }
}

function onSaveDataFormReload() {
  const {elements: {email,message}} = formEl
  
  email.value = feedbackFormData.email ?? '';
  message.value = feedbackFormData.message ?? '';
}

function onInputChange(event) {
  feedbackFormData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
};

function onSubmitForm(event) {
  event.preventDefault();

  console.log(feedbackFormData);

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  
};