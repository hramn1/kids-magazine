'use strict';
  var swiperFavorites = new Swiper('.swiper-container--favorites', {
    slidesPerView: 10,
    spaceBetween: 0,
    slidesPerGroup: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
var swiperBrands = new Swiper('.swiper-container--brands', {
  slidesPerView: 7,
  spaceBetween: 10,
  slidesPerGroup: 7,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
