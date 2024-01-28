'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const openModal = function () {
    // class list have several funcations like add and delete we are going to delete
    //hidden class that is why we are using remove here(to display overlay)
    // we don't need to use (.) for clas here
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

buttonCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !(modal.classList.contains('hidden')))
        closeModal();
});