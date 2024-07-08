const btnPrev = document.querySelector(".btn-left");
const btnNext = document.querySelector(".btn-right");
const curentNumberCard = document.querySelector(
  ".slider__title-number-current"
);
const sliderContainer = document.querySelector(".slider__cards");
const sliderLine = document.querySelector(".slider__line");
const card = document.querySelector(".slider__card");
const cardWidth = card.offsetWidth;
let currentIndex = 3;
let position = 0;

console.log(cardWidth);
console.log(card);

function updateBtnStatus() {
  btnPrev.disabled = currentIndex == 3;
  btnNext.disabled = currentIndex == 6;
}

btnNext.addEventListener("click", () => {
  currentIndex++;
  curentNumberCard.textContent = currentIndex;
  position += cardWidth + 20;
  sliderLine.style.transform = `translateX(-${position}px)`;
  updateBtnStatus();
});

btnPrev.addEventListener("click", () => {
  currentIndex--;
  curentNumberCard.textContent = currentIndex;
  position -= cardWidth + 20;
  sliderLine.style.transform = `translateX(-${position}px)`;
  updateBtnStatus();
  console.log(position)
});

updateBtnStatus();
