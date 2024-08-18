let slideIndex = 1;

function openSlideshow(n) {
    document.getElementById('slideshowModal').style.display = 'block';
    showSlides(slideIndex = n);
}

function closeSlideshow() {
    document.getElementById('slideshowModal').style.display = 'none';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
