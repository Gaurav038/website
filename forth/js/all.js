// ----------------------Hammerburger---------------------
trigger = document.querySelector('.nav-trigger');
content = document.querySelector('.site-content-wrapper');

trigger.addEventListener('click', ()=>{
    content.classList.toggle('scaled');
})



    //  ---------------Image-Slider--------------------------
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("food-card");
    var dots = document.getElementsByClassName("dot");
    // if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[(slideIndex-1)%4].style.display = "block";
    dots[(slideIndex-1)%3].className += " active";
  }



