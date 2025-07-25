const message = "Thank you for the countless sacrifices, unconditional love, and never-ending support you've given me. Thank you for guiding me closer to God and showing me what faith looks like in action. Your wisdom, love, and patience are gifts I treasure deeply. You are my safe place — a reflection of God's grace, comfort, and protection. I love you more than words could ever express. 💖";

let i = 0;

function openLetter() {
  // Hide envelope
  document.getElementById("envelope-container").style.display = "none";

  // Show message
  const msgContainer = document.getElementById("message-container");
  msgContainer.classList.remove("hidden");

  // Show hearts + hugs burst
  burstHearts();

  // Typewriter message
  const msgText = document.getElementById("message-text");
  function type() {
    if (i < message.length) {
      msgText.innerHTML += message.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  type();
}

function burstHearts() {
  const burst = document.getElementById("burst-container");
  const emojis = ["❤️", "💗", "💖", "🫂", "💕", "🥰", "💞"];

  for (let j = 0; j < 40; j++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.top = `${100 + Math.random() * 100}px`;
    emoji.style.fontSize = `${Math.random() * 20 + 20}px`;

    burst.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 2000);
  }
}
