let slideIndex = 1;
let myIndex = 0;
showSlides(slideIndex);
carousel();
function plusSlides(n) { showSlides(slideIndex += n); }

function currentSlide(n) { showSlides(slideIndex = n); }

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("logo");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
function carousel() {
    var i;
    var x = document.getElementsByClassName("logo");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}