$(document).ready(function(){
  $('.center').slick({
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed:1000,
    easing:'_ease_',
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    pauseOnDotHover:true,
    variableWidth:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});