const menu_btn = document.querySelector('.menu');
const modal = document.querySelector('.modal');
const close_btn = document.querySelector('.close');
const menu__links = document.querySelectorAll('.nav-menu__link');
const shadow_box = document.querySelector('.shadow-box');


menu_btn.addEventListener('click', function(e) {
    modal.classList.add('modal-active');
    shadow_box.classList.add('shadow-box-active');
    document.body.classList.add('no-scroll');
});

close_btn.addEventListener('click', function(e) {
    modal.classList.remove('modal-active');
    shadow_box.classList.remove('shadow-box-active');
    document.body.classList.remove('no-scroll');
});

menu__links.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
        elem.classList.toggle('nav-menu__link-active');
        elem.parentNode.children[1].classList.toggle('nav-menu-sub__list-active');
    });
});