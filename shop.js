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