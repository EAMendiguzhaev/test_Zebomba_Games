import { data } from './data.js';

const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.button-rating');
const closePopup = document.querySelector('.popup__button-close');
const overlay = document.querySelector('.overlay');

const popupWrapper = document.querySelector('.popup__rating-wrapper');
const popupTemplate = document.querySelector('#popup-template').content.querySelector('.popup__rating-players');

let count = -120;
let speed = 5;

const animatePopupOpen = () => {
  count += speed;
  popup.style.transform = `translateY(${count}%)`;

  if (count < 0) {
    requestAnimationFrame(animatePopupOpen);
  }
};

openPopup.addEventListener('click', () => {
  animatePopupOpen();
  overlay.style.display = 'block';
});

const animatePopupClose = () => {
  count -= speed;
  popup.style.transform = `translateY(${count}%)`;

  if (count > -120) {
    requestAnimationFrame(animatePopupClose);
  }
};

closePopup.addEventListener('click', () => {
  animatePopupClose();
  overlay.style.display = 'none';
});

const renderRatingPlayers = (item, index) => {
  const ratingPlayers = popupTemplate.cloneNode(true);
  ratingPlayers.querySelector('.player-position').textContent = `${index}`;
  ratingPlayers.querySelector('.player-experience').textContent = `${item.points}`;
  ratingPlayers.querySelector('.popup__rating-image').src = item.img;

  if (item.hasFriends) {
    ratingPlayers.querySelector('.popup__rating-list').style.color = 'red';
    ratingPlayers.querySelector('.player-name').textContent = `${item.name} ${item.lastName}*`;
  } else {
    ratingPlayers.querySelector('.player-name').textContent = `${item.name} ${item.lastName}`;
  }

  popupWrapper.append(ratingPlayers);
  return ratingPlayers;
};

const getSortedItems = (items, fn) => {
  return items.slice().sort(fn);
};

const getFiltredRaitings = (raitings, friends) => {
  return getSortedItems(raitings, (a, b) => {
    return b.points - a.points;
  }).map((item) => {
    const hasFriends = friends.some((friend) => {
      return item.name === friend.name && item.lastName === friend.lastName;
    });
    return { ...item, hasFriends };
  });
};

const friends = getFiltredRaitings(data.rating, data.friends);

friends.forEach((item, index) => {
  renderRatingPlayers(item, index + 1);
});
