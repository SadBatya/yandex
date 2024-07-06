import { sliderPlayers } from "../data/slider_players.js";

const sliderCards = document.querySelector(".slider__cards");

export function renderPlayers() {
  sliderPlayers.forEach((player) => {
    const cardHTML = `
    <div class="slider__card">
      <img class="slider__card-img" src="./assets/player.png" alt="" />
      <div class="slider__card-name">${player.name}</div>
      <div class="slider__card-status">${player.status}</div>
      <button class="slider__card-button">Подробнее</button>
    </div>
    `;
    sliderCards.innerHTML += cardHTML;
  });
}

