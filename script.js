
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  let counter = 0;

  setInterval(() => {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${-counter * 100}%)`;

    counter++;

    if (counter === slides.length) {
      counter = 0;
      setTimeout(() => {
        slider.style.transition = "none";
        slider.style.transform = "translateX(0)";
      }, 8000);
    }
  }, 3000);
});
// arrow move
let btn2 = document.querySelector(".btn2");
let arrow = document.querySelector(".btn2 i");
btn2.addEventListener("click", (e) => {
  // alert("hello")
  arrow.style.transform = "translateX(100px)";
});

// review slider
let revslide = document.querySelectorAll(".rediv");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let count = 0;
revslide.forEach((e, index) => {
  e.style.left = `${index * 100}%`;
});

next.addEventListener("click", () => {
  if (count >= 3) {
    count = 0;
  }
  if (count < 3) {
    count++;
    slider();
  }
});
prev.addEventListener("click", () => {
  if (count <= 0) {
    count = 3;
    slider();
  } else {
    count--;
    slider();
  }
});

let slider = function () {
  revslide.forEach((e) => {
    e.style.transform = `translateX(-${count * 100}%)`;
  });
};

// shop
// login
let login = document.querySelector("#log");
login.addEventListener("click", function () {
  window.location.href = "login.html";
  console.log("hello");
});

// cruss
let cnav = document.querySelector(".nav")
let crs = document.querySelector(".cursor")

cnav.addEventListener("mousemove" , function(dets){
    // console.log(dets.y)
    crs.style.left = dets.x+"px"
    crs.style.top = dets.y+"px"
    crs.style.opacity = 1
})
cnav.addEventListener("mouseleave",()=>{
  crs.style.opacity = 0;
})
// cart
let icart = document.getElementById("sc")
let cart = document.querySelector("#cart");
let carticon = document.querySelector("#cart i")
console.log(carticon)
icart.addEventListener('click',function(){
  cart.style.display="block";
    cart.style.transform = "none";
})
carticon.addEventListener('click',function(){
  cart.style.display="none";
  cart.style.transform = "translateX(100%)";
})