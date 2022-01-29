var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
var slideIndexNo = 1;
showSlide(slideIndexNo);

function plusSlide(n) {
  showSlide(slideIndexNo += n);
}

function currentSli(n) {
  showSlide(slideIndexNo = n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  if (n > slides.length) {slideIndexNo = 1}    
  if (n < 1) {slideIndexNo = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndexNo-1].style.display = "block";  
}

$(document).ready(function() {

  $(".cta").css({"opacity" : "0"})
  
$(window).scroll(function() {
if($(this).scrollTop() < 400) {
  $(".apply-btn").removeClass("cta")
}
else {
  $(".apply-btn").addClass("cta")
}
})
})