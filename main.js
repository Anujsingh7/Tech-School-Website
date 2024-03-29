// change navbar style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide faqs

const faqs = document.querySelectorAll(".faq");
faqs.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("open");

    // change icon
    const icon = e.querySelector(".faq_icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // when window size is >=600 px
  breakpoints: {
    600: {
        slidesPerView: 2
    }
  }
});

// show/hide menu

const menu=document.querySelector(".nav_menu")
const menuBtn=document.querySelector("#open-menu-btn")
const closeBtn=document.querySelector("#close-menu-btn")

menuBtn.addEventListener('click',()=>{
  menu.style.display='flex'
  closeBtn.style.display="inline-block"
  menuBtn.style.display="none"
})


//close nav menu
const closeNav =()=>{
  menu.style.display='none'
  closeBtn.style.display='none';
  menuBtn.style.display="inline-block"
}

closeBtn.addEventListener('click',closeNav)