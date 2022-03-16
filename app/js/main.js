$(document).ready(function () {
   $('.slider__inner').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="prev"</button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="next"</button>',
   });
   $('.slider-reviews').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev prev-reviews"><img src="images/prev.svg" alt="prev"</button>',
      nextArrow: '<button type="button" class="slick-next next-reviews"><img src="images/next.svg" alt="next"</button>',
      infinite: false,
   });


});
document.querySelector('.questions').addEventListener('click', (event) => {
   let elem = event.target;
   if (elem.classList == 'questions__line-qst') {
      elem = elem.closest('.questions__line');
   }
   let ans = elem.nextElementSibling;
   if (elem.classList[0] !== 'questions__line-ans') {
      ans.classList.toggle('show');
      elem.classList.toggle('questions__line-active');
   }
});