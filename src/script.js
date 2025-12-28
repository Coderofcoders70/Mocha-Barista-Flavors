const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('max-h-0');
    menu.classList.toggle('opacity-0');
    menu.classList.toggle('pointer-events-none');
    menu.classList.toggle('max-h-96');
    menu.classList.toggle('opacity-100');

    menu.classList.toggle('bg-[#F39C6B]');    
});


const searchIcon = document.getElementById('search-bar');
const searchInput = document.getElementById('search-input');
const searchPopup = document.getElementById('search-popup');
const backdrop = document.getElementById('backdrop');

searchIcon.addEventListener("click", () => {
    backdrop.classList.remove("hidden");
    backdrop.classList.add("opacity-100");
    searchPopup.classList.remove("w-0", "opacity-0");
    searchPopup.classList.add("w-full", "opacity-100");

    setTimeout(() => searchInput.focus(), 300);
});

backdrop.addEventListener("click", () => {
    backdrop.classList.add("hidden");
    backdrop.classList.remove("opacity-100");
    searchPopup.classList.add("w-0", "opacity-0");
    searchPopup.classList.remove("w-full", "opacity-100");
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
        backdrop.click();
    }
});

const searchMobileIcon = document.getElementById('search-mobile-bar');
const searchMobileInput = document.getElementById('search-mobile-input');
const searchMobilePopup = document.getElementById('search-mobile-popup');
const backdropMobile = document.getElementById('backdrop-mobile');

searchMobileIcon.addEventListener("click", () => {
    backdropMobile.classList.remove("hidden");
    backdropMobile.classList.add("opacity-100");
    searchMobilePopup.classList.remove("w-0", "opacity-0");
    searchMobilePopup.classList.add("w-full", "opacity-100");

    setTimeout(() => searchInput.focus(), 300);
});

backdropMobile.addEventListener("click", () => {
    backdropMobile.classList.add("hidden");
    backdropMobile.classList.remove("opacity-100");
    searchMobilePopup.classList.add("w-0", "opacity-0");
    searchMobilePopup.classList.remove("w-full", "opacity-100");
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
        backdropMobile.click();
    }
});
// Swiper JS

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    760: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');

    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove('-bottom-1/2');
        scrollUpBtn.classList.add('bottom-4');
    }
    else{
        scrollUpBtn.classList.add('-bottom-1/2');
        scrollUpBtn.classList.remove('bottom-4');
    }
}

window.addEventListener("scroll", scrollUp);

// Scroll Reveal Animation 
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "1500",
    delay: "300",
    reset: true,
})

sr.reveal(`.hero_top, .ingredients_top, .article_top, .article_btn, .newsletter, .footer_icon, .footer_content`);
sr.reveal(`.hero_image, .promo_image`, {scale: 0.5});
sr.reveal(`.hero_cartoon_img1, .hero_cartoon_img2`, {scale: 0.5, distance: "0px", delay: 1000});
sr.reveal(`.hero_smoke_img1, .hero_smoke_img2, .hero_smoke_img3, .hero_smoke_img4`, {origin: "bottom", delay: 1500});

sr.reveal(`.about_leaf`, {origin: "right", delay: 1000});
sr.reveal(`.about-content1, about_item2`, {origin: "right"});
sr.reveal(`.about-content2, about_item1`, {origin: "left"});

sr.reveal(`.feature_left, .promo_content`, {origin: "left"});
sr.reveal(`.feature_right`, {origin: "right"});

sr.reveal(`.ingredients_items_left`, {origin: "left", interval: 100});
sr.reveal(`.ingredients_items_right`, {origin: "right", interval: 100});

sr.reveal(`.article_item`, {interval: 100});
