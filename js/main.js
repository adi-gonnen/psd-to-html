'use strict'

function toggleNavBar() {
    document.querySelector('.fa').classList.toggle('fa-times');         //hamburger
    document.querySelector('.fa').classList.toggle('fa-bars');          //X
    document.querySelector('.nav').classList.toggle('navbar-open');     //culomn navbar
    document.querySelector('.modal-dropdown').classList.add('hide');
    document.querySelector('.main-blogs').classList.toggle('opacity');
}

function openModal() {
    document.querySelector('.modal-read-more').classList.remove('hide');
    document.querySelector('.main-blogs').classList.add('opacity');
}

function closeModal() {
    document.querySelector('.modal-read-more').classList.add('hide');
    document.querySelector('.main-blogs').classList.remove('opacity');
}

function toggleDropdown() {
    document.querySelector('.modal-dropdown').classList.toggle('hide');
    // document.querySelector('.navbar-open').classList.toggle('opacity');
}
