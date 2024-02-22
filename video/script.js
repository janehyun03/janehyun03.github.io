("use strict");

const image = [
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXac4B6lYp_TuXGWiKjl7bdi61gNgKJZCHhReQWPUpDBDcicvBWdZfikRoNuzO8GuKfMkA26zB7N8OiRFD-Vw5TxwoVf-b1CuWQ.webp?r=cc9",
    "spongebob",
    "BRANDING",
  ],
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcKQCXwNL4Z6bES6BIDHO6f71mDRzPi1KDAhGf0a8VY-0nEL1uneXJV4FNRDyHNT7wYB4bBgnZswnhsBs6DXv5T1HEBxoIobCgw.webp?r=037",
    "Gilmore Girls",
    "BRANDING",
  ],
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ6etTknB17-u4ojryDHotwPSa40wj4xCAFHnZsbeyWzDd_adm0q7oYQEKMYc6K9ms-hIeG8qr141NX0eK6vzsvAJeZR-NYB_bk.webp?r=e01",
    "The Good Place",
    "BRANDING",
  ],
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaP68dChF92vYQXNUomJBK6roGbMdaYC409Z05OaYw6_cwOAgMs6JnXjueiGdM0r6BhVHWbEKh-5Ao2_DcTfpsTEzGSK8P9g97g.webp?r=925",
    "Shameless",
    "BRANDING",
  ],
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYXqRA6lFDGQkNf5FF3Lvvb8u5XJfduVioXBomE99BqbD5QcjXZBnx0b7M5q8rkJRkFyBN8anxacOEiG0X7I9tc8GAuR2F0EoHc.webp?r=77d",
    "The Office",
    "BRANDING",
  ],
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXH0Mj6kfV94GEA080TM0j0ULZBgqr5wt9pVtPxdbboajkkcqdJPCHO0Nm6V7VYm_9mouxyMhdRhK-8AHBMDkjSWqxJ9yvASbyjRBcjJMomHqYLpGCgLjnZx1dxC5bWqN6iuvIj79zUctpkpULYYyNwm8Xbh3ubMS8spQoURniBM5jMrxUxiYQrQ4YTfsK68akIR1ogfx8QNuBHdR610UNFIpBb7xv2OdSmZQsR3jYhYhu63nYqBmxDRL9XcknDwmbNGcnrRrAV381ZUfihP90zTIQ.webp?r=54d",
    "Bad Moms",
    "BRANDING",
  ],
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfj-MZdGCLIOkB1OrtyaJLzx8N5xk2GjPL_aRfminOyHVNRhj4J56DznpVW0b-ouVzmMQzFYn8E-DtepEDbfe8JVYSveiY4RdnA.webp?r=a8a",
    "Brooklyn",
    "BRANDING",
  ],
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZl15VIZVw1OQ2DRiDNYoFYhGUIBnRetrWa6bZkA_wiV0keRCyntY1dgzzx4G21cDoQZ7-oJY38ZY-icQPBho-Mb8qvkO0o2JLEVrqMn0exY9tnduedDHbK8QOdRAlfGbU8K.jpg?r=44e",
    "inventing anna",
    "BRANDING",
  ],
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdnZR0fG5gM6Nw9bwFJZOThF_vA4dPwuz_0qHzc23VHOJUGBvseEIxPjT-kqu9J77SQGsSYJSlTf6q41UyJ-I66RzBkwszhhKS4.webp?r=985",
    "Catch me if you can",
    "ILLUSTRATION",
  ],
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU4aCUoSizldUA9q4zqVVFhKjDiZFcuwxxWnCDUEpMyxjuXV2hkQr-77ZolH0fs27dOMBAaXJaFEFg_uIPRvmxLMcVVsx1wj92nSqgj4H6w3Vi0-RYosVKt9MUvDfV-B1w0j55iG56kCskig4S9LXMCL5YG6MVK5f0GWNPqoHE0Cbi9-sxpFck24G7fzb0IENOTqbSPkT1hnDkL3Ee4M0U-8zVExA06u0q_I0ctfXTbs-WADme6MsMe8uFyObl1BU2D1w0K9nK6SJx99SlctOXoTBfslIw2zZGpXu0tYvoH2miUoMizoEQ-agRkZJt_Y6hQ9Pe2HxTRApFzlVTEu7onQsATbTOmIFcK3K9zpr3c-c437n4A.jpg?r=632",
    "DOONA",
    "BRANDING",
  ],
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVFdTZeNINo1sgWyki2-8siEk_-OdO5XRrxTB-em-YQ56L7_Twdi_eQU_OnAgY8FDSxC9y8k0frGKy770-wIAR8owAhw8f_KC1FO-vvPvGg_gR6frkvLYoRKfwXFp45M1Rlw.jpg?r=93f",
    "Queen's Gambit",
    "BRANDING",
  ],
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVf7f6v1AQL8Hp077YJrGM2-FSHpiuON0EOkbEV4Uy4FzZpiYuDak4kVS9lKImJ43JCTyTfbewKzlaXqtInhrI5GuV_x-G2uygw.webp?r=25d",
    "Trolls",
    "BRANDING",
  ],
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb-8LfHxs3nGoE0q7GQIugKlGPdk_53QFGN_kQ5r9GaIFRbO1DqGX3HvX6wVJ1BCCxUrYWJ2oeFlRK8kDXGDE8DDJa-UF4DE8ho.webp?r=a44",
    "Backstreet Rookie",
    "BRANDING",
  ],
  [
    "https://occ-0-293-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQA492Q-zN-anecKPJRLDDg0qfLYiZipmP19c_VHZf0L2rRoB_kQMmJNLOsME42ispl8pLa5dpMoJ7VDiEMq1Srq-3raDyy1BDF3JB-Q3Q3RM7b6YcW3DIcO1adW-Ah7hsxJ.jpg?r=2a8",
    "When we first met",
    "BRANDING",
  ],
];

//open profile
const mouseOver = document.getElementById("profile-drop");

function openProfile() {
  const arrow = document.querySelector(".profile-arrow");
  if (mouseOver.style.display === "none") {
    mouseOver.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
  } else {
    mouseOver.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  }
}
document.getElementById("profile").addEventListener("mouseover", openProfile);

mouseOver.addEventListener("mouseleave", openProfile);

// modal for movie description
let Modal = document.querySelector(".modal");
let Overlay = document.querySelector(".overlay");
function OpenModal() {
  Modal.classList.remove("hidden");
  Modal.classList.add("visible");
  Overlay.classList.add("visible");
  Overlay.classList.remove("hidden");
}
function CloseModal() {
  Modal.classList.add("hidden");
  Modal.classList.remove("visible");
  Overlay.classList.add("hidden");
  Overlay.classList.remove("visible");
}

// scroll and change the bg of nav
window.onscroll = function () {
  const nav = document.querySelector(".navigation");
  const top = window.scrollY;
  if (top > 60) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

// movie slider
let arr = [];
const inner = "";
const list = document.querySelectorAll(".main_items");

for (let i = 0; i < image.length; i++) {
  const imageTag =
    '<div class="item" clickon=""><div class="img_wrap"><a onclick="OpenModal()" href="#"><img class="img" src="' +
    image[i][0] +
    '" alt="img" /></div></div>';
  arr.push(imageTag);
}

for (let j = 0; j < list.length; j++) {
  list[j].innerHTML = arr.join("");
}

$(document).ready(function () {
  $(".main_items").slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: '<button class="next">></button>',
    prevArrow: '<button class="prev"><</button>',
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
});
