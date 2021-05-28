const ham = document.querySelector('.ham');
const sidebar = document.querySelector('.sidebar')
ham.addEventListener('click', function () {
  ham.classList.toggle('close');
  sidebar.classList.toggle('navtoggle');
});

let slidePosition = 0;
const slides = document.querySelectorAll('.carousel__item');
const totalSlides = slides.length;

document.querySelector('#carousel__button--next').addEventListener('click', function () {
  moveToNextSlide();
});
document.querySelector('#carousel__button--prev').addEventListener('click', function () {
  moveToPrevSlide();
});

function updateSlidePosition() {
  slides.forEach((value) => {
    value.classList.remove('carousel__item--visible');
    value.classList.add('carousel__item--hidden');
  });

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
};
function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
};

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 600,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    786: {
      slidesPerView: 3,
    }
  }
});