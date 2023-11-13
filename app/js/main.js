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



document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            const videoUrl = `https://www.youtube.com/embed/${videoId}`;
            document.querySelector('.video-container iframe').src = videoUrl;

            // Убираем активный стиль со всех табов
            tabs.forEach(t => t.classList.remove('active'));

            // Добавляем активный стиль только к текущему табу
            this.classList.add('active');
        });
    });
});
