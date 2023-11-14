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


document.addEventListener('DOMContentLoaded', function() {
    var tabItems = document.querySelectorAll('.tab-item');
   
    tabItems.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var tabId = this.getAttribute('data-tab');
        var content = document.getElementById(tabId);
   
        // Удаляем активный класс у текущих вкладок и контента
        document.querySelector('.tab-item.active').classList.remove('active');
        document.querySelector('.video-lesson__item.active').classList.remove('active');
   
        // Добавляем активный класс для выбранной вкладки и контента
        this.classList.add('active');
        content.classList.add('active');
      });
    });
  });