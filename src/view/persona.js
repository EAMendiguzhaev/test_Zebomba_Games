const start = document.querySelector('.start-button');
const persona = document.querySelector('.canvas__image-persona');

let currentIndex = 0;
let defaultTop = 438;
let defaultleft = 434;

const arrayCordinates = [
  { top: 405, left: 340 },
  { top: 449, left: 266 },
  { top: 469, left: 179 },
  { top: 440, left: 100 },
  { top: 378, left: 112 },
  { top: 321, left: 132 },
  { top: 284, left: 204 },
  { top: 214, left: 165 },
  { top: 160, left: 128 },
  { top: 130, left: 190 },
  { top: 177, left: 243 },
  { top: 140, left: 286 },
  { top: 90, left: 320 },
  { top: 45, left: 361 },
];

start.addEventListener('click', () => {
  if (arrayCordinates.length > currentIndex) {
    if (currentIndex <= arrayCordinates.length) {
      characterMove();
    }
  } else {
    persona.style.cssText = `
    top: ${defaultTop}px;
    left: ${defaultleft}px;
    `;
    currentIndex = -1;

    // Можно отключить кнопку по окончанию маршрута
    // start.disabled = true;
  }

  currentIndex++;
});

const characterMove = () => {
  let currentCordinates = arrayCordinates[currentIndex];

  persona.style.cssText = `
  top: ${currentCordinates.top}px;
  left: ${currentCordinates.left}px;
  `;
};
