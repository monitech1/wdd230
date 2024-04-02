
let slideIndex = 1;
showSlides(slideIndex);

/* plusSlides is a function that increments the slideIndex
and calls the showSlides function */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/* currentSlide is a function that sets the slideIndex
to the current slide and calls the showSlides function */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* showSlides is a function that displays the current slide */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
