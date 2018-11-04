'use strict';
(function () {

    // Dodanie klasy "show" do modala o id="modal-overlay"

    var showModal = function (event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.add('show');
    };

    // Dodanie klasy "show" do modala o id="modal-one"


    var addClass = function (event) {
        event.preventDefault();
        document.querySelector('#modal-one').classList.add('show');

    };

    var addClass_a = document.querySelectorAll('[href*="#modal-one"]');
    
    for (var i = 0; i < addClass_a.length; i++) {
        addClass_a[i].addEventListener('click', addClass);
    }


    // Dodanie klasy "show" do modala o id="modal-two"

    var addClass2 = function (event) {
        event.preventDefault();
        document.querySelector('#modal-two').classList.add('show');

    };

    var addClass_b = document.querySelectorAll('[href*="#modal-two"]');
    
    for (var i = 0; i < addClass_b.length; i++) {
        addClass_b[i].addEventListener('click', addClass2);
    }

    // Dodanie klasy "show" do modala o id="modal-three"

    var addClass3 = function (event) {
        event.preventDefault();
        document.querySelector('#modal-three').classList.add('show');

    };

    var addClass_c = document.querySelectorAll('[href*="#modal-three"]');
    
    for (var i = 0; i < addClass_c.length; i++) {
        addClass_c[i].addEventListener('click', addClass3);
    }

    // Usuwanie klasy "show" z modala o id="modal-one" oraz o id="modal-overlay"

    var modalLinks = document.querySelectorAll('.show-modal');
    
    for (var i = 0; i < modalLinks.length; i++) {
        modalLinks[i].addEventListener('click', showModal);

    }

    var hideModal = function (event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.remove('show');
        document.querySelector('#modal-one').classList.remove('show');
    };

    // Usuwanie klasy "show" z modala o id="modal-two"

    var modalLinks2 = document.querySelectorAll('.show-modal');
    
    for (var i = 0; i < modalLinks2.length; i++) {
        modalLinks2[i].addEventListener('click', showModal);
    }

    var hideModal2 = function (event) {
        event.preventDefault();
        document.querySelector('#modal-two').classList.remove('show');
    };


    // Usuwanie klasy "show" z modala o id="modal-three"

    var modalLinks3 = document.querySelectorAll('.show-modal');
    
    for (var i = 0; i < modalLinks3.length; i++) {
        modalLinks3[i].addEventListener('click', showModal);
    }

    var hideModal3 = function (event) {
        event.preventDefault();
        document.querySelector('#modal-three').classList.remove('show');
    };


    var closeButtons = document.querySelectorAll('.modal .close');
    
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', hideModal);
    }

    var closeButtons2 = document.querySelectorAll('.modal .close');
    
    for (var i = 0; i < closeButtons2.length; i++) {
        closeButtons2[i].addEventListener('click', hideModal2);
    }

    var closeButtons3 = document.querySelectorAll('.modal .close');
    
    for (var i = 0; i < closeButtons3.length; i++) {
        closeButtons3[i].addEventListener('click', hideModal3);
    }


    document.querySelector('#modal-overlay').addEventListener('click', hideModal);
    document.querySelector('#modal-overlay').addEventListener('click', hideModal2);
    document.querySelector('#modal-overlay').addEventListener('click', hideModal3);


    var modals = document.querySelectorAll('.modal');

    for (var i = 0; i < modals.length; i++) {
        modals[i].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }


})();