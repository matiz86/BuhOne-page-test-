var swiper = new Swiper(".main__swiper", {
  pagination: {
    el: ".main .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".main .arrow__next",
    prevEl: ".main .arrow__prev",
  },
});

var swiper = new Swiper(".clients__swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  pagination: {
    el: ".clients .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".clients .arrow__next",
    prevEl: ".clients .arrow__prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1010: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var swiperReviews = new Swiper(".reviews__swiper", {
  pagination: {
    el: ".reviews .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".reviews .arrow__next",
    prevEl: ".reviews .arrow__prev",
  },
});
