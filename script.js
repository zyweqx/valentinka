// 💖 Сердечки
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('img');
  heart.src = 'images/heart.png';
  heart.className = 'heart';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (8 + Math.random() * 6) + 's';

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}

setInterval(createHeart, 600);

// 🎁 Открытие подарков
function toggleGift(gift) {
  gift.classList.toggle('open');
}
