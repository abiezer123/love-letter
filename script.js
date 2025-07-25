const message = "Thank you for the countless sacrifices, unconditional love, and never-ending support you've given me. Thank you for guiding me closer to God and showing me what faith looks like in action. Your wisdom, love, and patience are gifts I treasure deeply. You are my safe place — a reflection of God's grace, comfort, and protection. I love you more than words could ever express. 💖";

let i = 0;
const textEl = document.getElementById("love-text");

function typeText() {
  if (i < message.length) {
    textEl.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeText, 40);
  }
}
typeText();

document.getElementById("love-button").onclick = () => {
  document.getElementById("gif-box").classList.remove("hidden");
};
