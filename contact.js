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

// btn
let sbtn = document.querySelector(".Btn");