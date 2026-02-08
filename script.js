/* Typing Effect */
const text = `Minnu jii 💖

From the moment you entered my life,
everything felt warmer and brighter.

I don’t want a perfect story,
I just want YOU in every chapter of my life.

Hold my hand today, tomorrow, and forever…
Because my soul chose you long ago 💍💞

I love you endlessly ❤️`;

let i = 0;
function typeText() {
  if (i < text.length) {
    document.getElementById("typeText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 50);
  }
}
typeText();

/* Heart Rain */
setInterval(() => {
  let heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "-20px";
  heart.style.fontSize = "25px";
  document.body.appendChild(heart);

  let fall = setInterval(() => {
    heart.style.top = heart.offsetTop + 2 + "px";
  }, 20);

  setTimeout(() => {
    clearInterval(fall);
    heart.remove();
  }, 5000);
}, 300);

/* Slideshow */
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 3000);
