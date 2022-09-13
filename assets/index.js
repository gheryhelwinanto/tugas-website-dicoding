function notExisted() {
    alert("Maaf! Halaman yang Anda tuju saat ini masih belum tersedia. Silahkan nikmati halaman saat ini. Terimakasih.");
}

let slideIndex = 0;
showSlide();

function showSlide() {
    let i;
    let slides = document.getElementsByClassName("slideImage");
    let dots = document.getElementsByClassName("dot");
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIndex++;

    if(slideIndex > slides.length){slideIndex = 1;}

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlide, 3500);
} 