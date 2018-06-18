'use strict'


//open/close hamburger menu
function toggleNavBar() {           
    document.querySelector('.fa').classList.toggle('fa-times');         //X
    document.querySelector('.fa').classList.toggle('fa-bars');          //hamburger
    document.querySelector('.nav').classList.toggle('navbar-open');     //culomn navbar
    document.querySelector('.modal-dropdown').classList.remove('show');
    document.querySelector('.main-blogs').classList.toggle('opacity');
}

//open read more modal
function openModal() {
    document.querySelector('.modal-read-more').classList.remove('hide');
    document.querySelector('.main-blogs').classList.add('opacity');
    // document.querySelector('.modal-read-more').classList.add(`position-${num}`);
}

//close read more modal
function closeModal() {
    document.querySelector('.modal-read-more').classList.add('hide');
    document.querySelector('.main-blogs').classList.remove('opacity');
}

//open/close jurnal menu
function toggleDropdown() {
    document.querySelector('.modal-dropdown').classList.toggle('show');
}
