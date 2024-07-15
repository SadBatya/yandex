// import { transformationSlider } from "./js/transformationSlider.js";

// const btnPrev = document.querySelector(".btn-left");
// const btnNext = document.querySelector(".btn-right");
// const curentNumberCard = document.querySelector(
//   ".slider__title-number-current"
// );
// const sliderContainer = document.querySelector(".slider__cards");
// const sliderLine = document.querySelector(".slider__line");
// const card = document.querySelector(".slider__card");
// const cardWidth = card.offsetWidth;
// let currentIndex = 3;
// let position = 0;

// function updateBtnStatus() {
//   btnPrev.disabled = currentIndex == 3;
//   btnNext.disabled = currentIndex == 6;
// }

// btnNext.addEventListener("click", () => {
//   currentIndex++;
//   curentNumberCard.textContent = currentIndex;
//   position += cardWidth + 20;
//   sliderLine.style.transform = `translateX(-${position}px)`;
//   updateBtnStatus();
// });

// btnPrev.addEventListener("click", () => {
//   currentIndex--;
//   curentNumberCard.textContent = currentIndex;
//   position -= cardWidth + 20;
//   sliderLine.style.transform = `translateX(-${position}px)`;
//   updateBtnStatus();
//   console.log(position);
// });

// updateBtnStatus();

// //slider 2

// transformationSlider();

const btnPrev = document.querySelector(".btn-left");
const btnNext = document.querySelector(".btn-right");
const currentNumberCard = document.querySelector(
  ".slider__title-number-current"
);
const sliderCards = document.querySelectorAll(".slider__card");

const sliderLine = document.querySelector(".slider__line");
const userScreenWidth = window.screen.width;
let countVisibleCard = 3;
let currentIndex = countVisibleCard;
let position = 0;

function sizeCard() {
  sliderCards.forEach((card) => {
    card.style.width = `${userScreenWidth / countVisibleCard - 60}px`;
  });
}

btnNext.addEventListener("click", moveNext);

function moveNext() {
  const sliderCardWidth = document.querySelector(".slider__card").offsetWidth;
  position -= sliderCardWidth + 20;
  sliderLine.style.transform = `translateX(${position}px)`;
  currentIndex++;
  currentNumberCard.textContent = currentIndex;

  if (currentIndex > 6) {
    position = 0;
    currentIndex = countVisibleCard;
    currentNumberCard.textContent = currentIndex;
    sliderLine.style.transform = `translateX(0px)`;
  }
}

setInterval(moveNext, 4000)

btnPrev.addEventListener("click", movePrev);

function movePrev(){
  const sliderCardWidth = document.querySelector(".slider__card").offsetWidth;
  position += sliderCardWidth + 20;
  sliderLine.style.transform = `translateX(${position}px)`;
  currentIndex--;
  currentNumberCard.textContent = currentIndex;

  if(currentIndex < 3){
    position = sliderCardWidth * 3 + 60;
    currentIndex = 6;
    currentNumberCard.textContent = currentIndex;
    sliderLine.style.transform = `translateX(-${position}px)`;
  }
}

sizeCard();
