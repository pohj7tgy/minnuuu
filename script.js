const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const music = document.getElementById("music");

noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("mouseover", moveNo);

function moveNo() {
  noBtn.style.left = Math.random()*80 + "vw";
  noBtn.style.top = Math.random()*80 + "vh";
}

yesBtn.onclick = () => {
  document.getElementById("love").classList.remove("hidden");
  music.play();
  hearts();
};

function hearts() {
  setInterval(() => {
    let h = document.createElement("div");
    h.innerHTML = "💖";
    h.style.position = "fixed";
    h.style.left = Math.random()*100 + "vw";
    h.style.top = "100vh";
    h.style.fontSize = "30px";
    document.body.appendChild(h);

    let t = setInterval(() => {
      h.style.top = h.offsetTop - 2 + "px";
    }, 20);

    setTimeout(() => {
      clearInterval(t);
      h.remove();
    }, 3000);
  }, 200);
}
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 3000);
