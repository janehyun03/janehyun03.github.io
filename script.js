const html = document.querySelector("html");
const btnTop = html.querySelector(".btn_top");

window.addEventListener("scroll", () => {
  // 스크롤 노출설정
  if (html.scrollTop > 1170) {
    btnTop.style.visibility = "visible";
  } else {
    btnTop.style.visibility = "hidden";
  }
});

btnTop.addEventListener("click", () => {
  // 클릭시
  window.scroll({
    behavior: "smooth",
    top: 0,
  });
});

let images = [
  {
    picture: "images/img_portfolio2.png",
    description: "camping car",
    isLiked: false,
  },
  {
    picture: "./images/img_portfolio1.png",
    description: "decoration",
    isLiked: false,
  },
  {
    picture: "./images/img_portfolio3.png",
    description: "christmas gift",
    isLiked: true,
  },
  {
    picture: "images/img_portfolio4.png",
    description: "neom",
    isLiked: false,
  },
  {
    picture: "./images/img_portfolio5.png",
    description: "wall",
    isLiked: false,
  },
];

let arr = [];

for (let i = 0; i < images.length; i++) {
  const imageTag =
    '<div class="img-wrap"><img class=img' +
    i +
    ' src="' +
    images[i].picture +
    '" style="width:100%; height:100%"/></div>';
  arr.push(imageTag);
}

let imgDiv = document.querySelector(".img-div");
let buttonDiv = document.querySelector(".button-container");
let listDiv = document.querySelector(".list-container");
let descDiv = document.querySelector(".desc");
let btnLeft = document.querySelector(".left");
let btnRight = document.querySelector(".right");
let btnHeart = document.querySelector(".heart");
let ul = document.querySelector(".ul");
let current = 0;

imgDiv.innerHTML = arr.join("");

descDiv.innerHTML = images[current].description;

showSlide(current);
initDots();
heart(current);

let list = document.querySelectorAll("li");
list = Array.from(list);

btnRight.addEventListener("click", function () {
  // 이미지 길이는 5 길이보다 하나 작으면 +1
  //dot의 index num과 current는 같아
  if (current < images.length - 1) {
    current += 1;
  } else {
    current = 0;
  }
  pagination();
  showSlide(current);
  heart(current);
});
btnLeft.addEventListener("click", function () {
  // 현재 페이지가 0보다 크면 -1
  if (current > 0) {
    current -= 1;
  } else {
    current = images.length - 1;
  }
  pagination();
  showSlide(current);
  heart(current);
});

btnHeart.addEventListener("click", function () {
  if (images[current].isLiked == true) {
    images[current].isLiked = false;
    btnHeart.innerHTML = "LIKE";
  } else if (images[current].isLiked == false) {
    images[current].isLiked = true;
    btnHeart.innerHTML = "LIKED ❤️";
  }
});

function heart(current) {
  if (images[current].isLiked == true) {
    btnHeart.innerHTML = "LIKED ❤️";
  } else if (images[current].isLiked == false) {
    btnHeart.innerHTML = "LIKE";
  }
  console.log(images[current].isLiked);
  console.log(images);
}

function showSlide(current) {
  let arrImg = [];
  for (let i = 0; i < images.length; i++) {
    let img = document.querySelector(`.img${i}`);
    arrImg.push(img);
    arrImg[i].style.display = "none";
  }
  console.log(arrImg);
  arrImg[current].style.display = "block";
}

function initDots() {
  images.forEach((e, i) => {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.value = i;
  });
  document.querySelector("li").style.backgroundColor = "white";
}

function pagination() {
  list.forEach((e, i) => {
    if (i == current) {
      list[i].style.backgroundColor = "white";
      descDiv.innerHTML = images[i].description;
    } else {
      list[i].style.backgroundColor = "black";
    }
  });
}

list.forEach((e, i) => {
  list[i].addEventListener("click", () => {
    current = list[i].value;
    pagination();
    showSlide(current);
    heart(current);
  });
});
