const navbar = document.querySelector('nav');
 window.onscroll = () => { 
    if (window.scrollY > 80) {
         navbar.classList.add('nav-active');
         } else { 
            navbar.classList.remove('nav-active'); } };



            AOS.init({
              duration: 1200,
            })


 window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {

  if ( document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.8) ) && videoClientRect >= ( 0 - ( videoHeight*.8 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }
  }

}

const menuIcon = document.querySelector(".menu-icon")
const navList = document.querySelector("ul")



    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle("active");
      navList.classList.toggle("active");
    })