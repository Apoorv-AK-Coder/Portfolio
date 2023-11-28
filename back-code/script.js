let hamburgerMenu = document.querySelector(".hamburgerMenu");

let navbar = document.querySelector(".navbar")

hamburgerMenu.addEventListener("click", function(){
  navbar.classList.toggle("active");
  console.log("hello")
})
