$(function(){
   $('.disign-slider').slick({
      dots: false,
      slidesToShow: 4,
      variableWidth: true,
      prevArrow: '<img class="arrow arrow-left" src="images/A-left.svg" alt="">',
      nextArrow: '<img class="arrow arrow-right" src="images/A-right.svg" alt="">',
      responsive: [
         {
            breakpoint: 860,
            settings: {
               variableWidth: false,
               slidesToShow: 2,
            },
            breakpoint: 560,
            settings: {
               variableWidth: false,
               slidesToShow: 1,
            }
         }
      ]
   });
});