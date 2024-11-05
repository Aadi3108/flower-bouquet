document.addEventListener('DOMContentLoaded', () => {
  const bouquet = document.getElementById('bouquet');
  const flowerCount = 12; // Number of flowers to display

  // Create flowers and add click event
  for (let i = 0; i < flowerCount; i++) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.addEventListener('click', () => {
      flower.classList.toggle('bloom');
    });
    bouquet.appendChild(flower);
  }

  // Optional: Message after clicking all flowers
  const message = document.createElement('p');
  message.innerText = "Each flower blooms for you 🌹";
  message.style.display = 'none';
  bouquet.appendChild(message);

  // Check if all flowers are bloomed
  bouquet.addEventListener('click', () => {
    const allBloomed = document.querySelectorAll('.bloom').length === flowerCount;
    if (allBloomed) {
      message.style.display = 'block';
    }
  });
});
