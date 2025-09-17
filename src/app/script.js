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
