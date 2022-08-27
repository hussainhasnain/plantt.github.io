/* ==================== JS File =================== */

/* ==================== Make mobile navigation work =================== */
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
  headerEl.classList.toggle("nav-open");
});

/* ==================== Sticky Navigation =================== */
const sectionHeroEl = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function(entries){
    const ent = entries[0];
    console.log(ent);

    if(ent.isIntersecting === false){
      document.body.classList.add("sticky");
    }
    if(ent.isIntersecting === true){
      document.body.classList.remove("sticky")
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

/* ==================== Scroll Reveal =================== */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal('.footer__line')
sr.reveal('.product__item, .footer__logo, .footer__nav--item, .footer__copyright', {interval:100})
sr.reveal('.hero__photo, .gallery__textbox, .plant__photo', {origin: 'left'})
sr.reveal('.hero__textbox, .plant__textbox, .gallery__photo', {origin:'right'})

/* ==================== Smooth Scroll =================== */
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});