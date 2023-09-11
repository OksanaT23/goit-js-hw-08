import throttle from "lodash.throttle";

const form = document.querySelector('form.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const storageKey = 'feedback-form-state';
const lastState = localStorage.getItem(storageKey);

if (lastState) {
    const lastStateObject = JSON.parse(lastState);

    email.value = lastStateObject.email;
    message.value = lastStateObject.message;
}

const grabState = function () {
    return {
        email: email.value,
        message: message.value
    }; 
};
const formInputCallback = function () {
    const state = grabState();

    localStorage.setItem(storageKey, JSON.stringify(state));
};
const formSubmitCallback = function (event) {
    event.preventDefault();

    const state = grabState();
    console.log(state);

    email.value = '';
    message.value = '';

    localStorage.removeItem(storageKey);
};

form.addEventListener('input', throttle(formInputCallback, 500, { leading: true, trailing: true }));
form.addEventListener('submit', formSubmitCallback);
