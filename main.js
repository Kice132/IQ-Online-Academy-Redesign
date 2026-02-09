const track = document.querySelector(".track");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentPage = 0;
const totalPages = 2;

function updateCarousel() {
  track.style.transform = `translateX(-${currentPage * 100}%)`;
}

next?.addEventListener("click", () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    updateCarousel();
  }
});

prev?.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updateCarousel();
  }
});

const carouselTrack = document.querySelector(".track1");
const carouselPages = document.querySelectorAll(".page1");
const nextButton = document.querySelector(".next1");
const prevButton = document.querySelector(".prev1");

let currentIndex = 0;

nextButton?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselPages.length;
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevButton?.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselPages.length) % carouselPages.length;
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
});

//POPUPS

const openPop = document.querySelectorAll(".open-popup");
const popupBlock = document.querySelectorAll(".popup-block");
const popup = document.querySelector(".popups");
const overLay = document.querySelector(".overlay");
const closePopupBlock = document.querySelectorAll(".close-btn");

function closePopup() {
  popup.classList.remove("display-flex");
  openPop.forEach((nav) => nav.classList.remove("display-block"));
  popupBlock.forEach((sec) => sec.classList.remove("popup-open"));
  overLay.classList.remove("display-block");
}

openPop &&
  openPop.forEach((item) => {
    item.addEventListener("click", function (e) {
      popup.classList.add("display-flex");
      //Removing the active classes

      overLay.classList.add("display-block");

      const idParent = item.parentElement.parentElement.id + "-pop";
      const text = this.textContent.trim();

      switch (idParent) {
        case "digital-marketing-pop":
          document
            .getElementById("digital-marketing-pop")
            .classList.add("popup-open");
          break;

        case "graphic-design-pop":
          document
            .getElementById("graphic-design-pop")
            .classList.add("popup-open");
          break;

        case "ux-ui-pop":
          document.getElementById("ux-ui-pop").classList.add("popup-open");
          break;
        case "motion-graphics-pop":
          document
            .getElementById("motion-graphics-pop")
            .classList.add("popup-open");
          break;
        case "interior-desing-pop":
          document
            .getElementById("interior-desing-pop")
            .classList.add("popup-open");
          break;

        case "front-end-pop":
          document.getElementById("front-end-pop").classList.add("popup-open");
          break;
      }
    });
  });

overLay?.addEventListener("click", closePopup);
closePopupBlock?.forEach((item) => {
  item.addEventListener("click", closePopup);
});

const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
