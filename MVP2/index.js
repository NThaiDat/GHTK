//slide header
let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");

function plusSlides(n) {
    showSlides(slideIndex += n);
}

plusSlides(1)


function showLearnSlide() {
    let learnSlide = document.getElementsByClassName("slideLearn__item");
    for (let i = 0; i < learnSlide.length; i++) {
         // learnSlide[i].style.display = "none";
    }
}

setTimeout(showLearnSlide, 0);


function showSlides(n) {
    let i;

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
// Slide Learn
