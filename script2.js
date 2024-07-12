$(document).ready(function () {
  $(".skills").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    slidesToShow:10,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
},

);

$(document).ready(function () {
  $(".about").slick({
    // infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows:false,
    dots: true,
  })}
)

const typed = new Typed(".animate", {
  strings: ["Jane.", "a lecturer", "a travaler.", "a developer."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});