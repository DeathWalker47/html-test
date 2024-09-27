import { burger } from "../functions/burger";
import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".offer-items-slider", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    475: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});

let timerElement = document.querySelector(".sale-time");
let startTime = 30 * 60;
let currentTime = startTime;

function updateTimer() {
  let minutes = Math.floor(currentTime / 60);
  let seconds = currentTime % 60;
  let timeString = `00:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  timerElement.textContent = timeString;
  currentTime--;

  if (currentTime <= 0) {
    currentTime = startTime;
  }
}

setInterval(updateTimer, 1000);

const parallaxContainers = document.querySelectorAll(".parallax-box");

parallaxContainers.forEach((container) => {
  const parallaxImage = container.querySelector(".parallax-img");

  container.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const speed = 0.05;

    const translateX = x * speed;
    const translateY = y * speed;

    parallaxImage.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
});
