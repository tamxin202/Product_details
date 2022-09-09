var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 12,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
//   var swiper = this;
// if (swiper.originalParams.loop && swiper.loopedSlides < swiper.originalParams.slidesPerView) {
// swiper.params.slidesPerView = swiper.loopedSlides;
// swiper.destroy(false, false);
// swiper.init();
// }