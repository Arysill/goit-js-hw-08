import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onInputChangeValue, 500));
formEl.addEventListener('submit', onSubmitForm);

const STORAGE_KEY = ' feedback-form-state';
let formDate = {};

function onInputChangeValue(e) {
    const { name, value } = e.target;
    formDate[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formDate));

}
document.addEventListener('DOMContentLoaded', function () {
    try {
        const dateLocalStore = localStorage.getItem(STORAGE_KEY);
        if (!dateLocalStore) return;
        formDate = JSON.parse(dateLocalStore);
        Object.entries(formDate).forEach(([key, val]) => {
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
function onSubmitForm(e) {
    e.preventDefault();
    console.log(formDate);
    formDate = {};
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
