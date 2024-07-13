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
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".about").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,	
    fade: true,
    fadeSpeed: 1000,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
  });

const typed = new Typed(".animate", {
  strings: ["Jane.", "a lecturer.", "a travaler.", "a developer."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});



///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
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


///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});


///////////////////////////////////////////////////////////
// Smooth scrolling animation
///////////////////////////////////////////////////////////

const allLinks = document.querySelectorAll("a");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    // Skip smooth scrolling for external links
    if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("./")) {
      return;
    }

    // Prevent default behavior for internal links
    e.preventDefault();


    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

});