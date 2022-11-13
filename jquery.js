let hamburger=document.getElementById("img2");
let close=document.getElementById("close");
let navitems=document.getElementById("navitems");
hamburger.addEventListener("click",shownavbar);
close.addEventListener("click",hidenavbar);
function shownavbar(){
    navitems.style.display="block";
    hamburger.style.display="none";
    close.style.display="block";
    navitems.style.backgroundColor="#636bf5"

}
function hidenavbar(){
    navitems.style.display="none";
    hamburger.style.display="block";
    close.style.display="none"

}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("div");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex >3) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 5000); 
}

$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
});


let navbar=document.getElementById("navLI");
let dropdownul=document.getElementById("dropdown-content");
dropdownul.addEventListener("mouseover",dropdown_list)
dropdownul.addEventListener("mouseout",dropdown_list_hide)
navbar.addEventListener("mouseover",dropdown_list);
function dropdown_list(){
    dropdownul.style.display="block"
    // setTimeout(dropdown_list,1000)


}
function dropdown_list_hide(){
    dropdownul.style.display="none"


}



window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      1000
  )
});


document.querySelector("#close1").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});



let popup_visible=document.getElementById("popup-visible");
popup_visible.addEventListener("click",visible_popup);

function visible_popup(){
  document.querySelector(".popup").style.display = "block";

}
