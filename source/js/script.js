'use strict';
  var swiperFavorites = new Swiper('.swiper-container--favorites', {
    slidesPerView: 10,
    spaceBetween: 0,
    slidesPerGroup: 1,
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
  slidesPerGroup: 1,
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
let menuLink = document.querySelector('.main-menu-items__item');
  if(menuLink.lastElementChild.className  =='menu-dropdown'){
  let dropdown = menuLink.querySelector('.menu-dropdown');
    delayShow(menuLink, function() {
      dropdown.style.display = 'block';
  });
}


function delayShow (elem, callback) {
var timeout = null;
elem.onmouseover = function() {
    // Set timeout to be a timer which will invoke callback after 1s
    timeout = setTimeout(callback, 200);
};
   elem.onmouseout = function() {
    // Clear any timers set to timeout
    clearTimeout(timeout);
};
}
