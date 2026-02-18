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
  popup?.classList.remove("display-flex");
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
const overlayy = document.querySelector(".overlay");

burger?.addEventListener("click", () => {
  navLinks?.classList.toggle("active");
  overlayy?.classList.toggle("display-block");
});

overlayy?.addEventListener("click", () => {
  navLinks?.classList.remove("active");
  overlayy?.classList.remove("display-block");
});

//Carousel

const track = document.querySelector(".page");
const cards = document.querySelectorAll(".cards");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
if (cards.length != 0) {
  let index = 0;
  function cardsPerView() {
    if (window.innerWidth < 560) return 1;
    if (window.innerWidth < 768) return 2;
    return 3;
  }

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    const maxIndex = cards.length - cardsPerView();
    index = Math.min(index + 1, maxIndex);
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = Math.max(index - 1, 0);
    updateCarousel();
  });

  window.addEventListener("resize", () => {
    index = 0;
    updateCarousel();
  });
}
