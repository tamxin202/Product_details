const hamburger=document.getElementById('mobile-menu');
const menu =document.getElementById('header__nav-list');
const links =document.querySelector(" .header__nav-list header__list-item");
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
function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("dtl");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";
}

// Plus/Minus Max Value Input

function increment() {
  document.getElementById('demoInput').stepUp();
}
function decrement() {
  document.getElementById('demoInput').stepDown();
}

//header scroll down
window.onscroll = function (){
  if ( document.documentElement.scrollTop > 102){
    document.getElementById('header-scrollBar').className = 'header-scroll';
    document.getElementById('header').className = 'header-scroll header';
    document.getElementById('header__logo').className = 'header-logo';
  }else {
    document.getElementById('header-scrollBar').className = '';
    document.getElementById('header').className = 'header';
    document.getElementById('header__logo').className = '';
  }
}

//Mobile menu
hamburger.onclick = function(){
    //Links
    menu.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade")
    });
    hamburger.classList.toggle("toggle")
}