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
