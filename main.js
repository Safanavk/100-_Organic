//Header scroll
let nav = document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop>50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}
//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function (e) {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    });
});





el = document.getElementById("simple-ss");
el.onclick = links;

function links() {
  left = parseInt(getComputedStyle(el).getPropertyValue("background-position").split(" ", 1));
   
  /* DEFINE POSITIONS FOR CLICK EVENTS */
  if (left >= -400) {
  
    // First until about half way scrolled over
    alert("first");
    //window.open("https://www.google.com");
  
  } else if (left >= -1200) {
  
    // Second when half way scrolled either side
    alert("second");
    //window.open("https://www.google.com");
    
  } else if (left >= -1600) {
    
    // Third when over half way into banner
    alert("third");
    //window.open("https://www.google.com");
    
  }
   
}




