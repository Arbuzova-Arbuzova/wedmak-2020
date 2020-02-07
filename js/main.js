var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
   // Responsive breakpoints https://swiperjs.com/api/
   breakpoints: {

    // when window width is >= 540px
    540: {
      slidesPerView: 2,
    }
  }

});

var menuButton = document.querySelector('.menu-butten');
var menu = document.querySelector('.header');
      // отслеживаем событие-клик 
      menuButton.addEventListener('click', function() {
        // console.log('Клик по кнопке');
        menuButton.classList.toggle('menu-butten-active');
        menu.classList.toggle('header-active');
})
