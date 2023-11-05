const mobileMenu = document.querySelector('.mobile-menu'),
    headerMobile = document.querySelector('.header__mobile'),
    secondmenu = document.querySelector('.header__mobile-dropdown');



mobileMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    headerMobile.classList.toggle('active');
});


secondmenu.addEventListener('click', function () {
    secondmenu.classList.toggle('active');
});

const screen = document.querySelector('.wrapper');
const btnBox = document.querySelector('.blog-item__btn');



if (screen.innerWidth == '1100px') {
    btnBox.style.display = 'none';
}   else {
    btnBox.style.display = 'block';
}