const sliderWrapper = document.querySelector('.friends-panel__wrapper');
const sliderTrack = document.querySelector('.friends-panel__slider-track');
const sliderItem = document.querySelectorAll('.friends-panel__slider-item');
const buttonRight = document.querySelector('.friends-panel__button-right');
const buttonLeft = document.querySelector('.friends-panel__button-left');

let position = 0;
const slidesToShow = 8;
const slidesToScroll = 1;
const itemWidth = sliderWrapper.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
const itemCount = sliderItem.length;

sliderItem.forEach((item) => {
  item.style.minWidth = itemWidth + 'px';
});

buttonRight.addEventListener('click', () => {
  const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

buttonLeft.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

const setPosition = () => {
  sliderTrack.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  buttonRight.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
  buttonLeft.disabled = position === 0;
};

checkBtns();
