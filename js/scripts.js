const togglemenuElement = document.getElementById('nav-toggle');
const mainnavbarElement = document.getElementById('nav-menu');
const navEl = document.querySelector('header');

togglemenuElement.addEventListener('click', () => {
  mainnavbarElement.classList.toggle('nav-menu-show');
});

window.addEventListener('scroll' , () => {
    if (window.scrollY > 10) {
        navEl.classList.add('navbar-scrolled');
    }   else if (window.scrollY < 10) {
        navEl.classList.remove('navbar-scrolled');
    }
});

var swiper = new Swiper(".news-card-content", {

    spaceBetween: 20,

    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },


  });