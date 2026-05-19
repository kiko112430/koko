const greetBtn = document.getElementById('greetBtn');
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

greetBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  greeting.textContent = name ? `Halo, ${name}! Selamat datang di Koko Hosting.` : 'Silakan masukkan nama untuk mendapatkan salam.';
});
