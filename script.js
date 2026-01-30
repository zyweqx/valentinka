// Открытие и закрытие подарка
function toggleGift(gift) {
  gift.classList.toggle('open');

  // Мягкая вибрация (если поддерживается)
  if (navigator.vibrate) {
    navigator.vibrate(30); // 30 мс — очень нежно
  }
}

// Летающие сердечки
function createHearts() {
  const heart = document.createElement('img');
  heart.src = 'images/heart.png';
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  const size = 20 + Math.random() * 20;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 12000);
}

setInterval(createHearts, 1500);