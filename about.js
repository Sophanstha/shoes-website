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