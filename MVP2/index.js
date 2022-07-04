let slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
console.log(slides.length, slides, "Hi")
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    console.log(slides);
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    console.log(slides.length)
    for (i = 0; i < slides.length; i++) {
        console.log("Hello");
        slides[i].style.display = "none";
    }
    console.log(slides[0])
    slides[slideIndex - 1].style.display = "block";
}