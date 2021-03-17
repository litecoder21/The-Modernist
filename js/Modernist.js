$(document).ready(function () {
    //banner slider
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200000,
        arrows: true,
        fade: false,
        prevArrow:'.arow-left',
        nextArrow:'.arow-right',
    });
    
    //card slider
    $('.card-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        
         responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
    
    //venobox js
    $('.venobox').venobox({
        share: ['facebook', 'twitter', 'download']
    });
    
    //wow js
    new WOW().init();
    
});