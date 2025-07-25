const message = "Thank you for the countless sacrifices, unconditional love, and never-ending support you've given me. Thank you for guiding me closer to God and showing me what faith looks like in action. Your wisdom, love, and patience are gifts I treasure deeply. You are my safe place — a reflection of God's grace, comfort, and protection. I love you more than words could ever express. 💖";

let i = 0;

function openLetter() {
  document.getElementById("envelope-container").style.display = "none";
  const msgContainer = document.getElementById("message-container");
  msgContainer.classList.remove("hidden");

  startEmojiRain();
  typeMessage();
}

function typeMessage() {
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

function startEmojiRain() {
  const rainContainer = document.getElementById("emoji-rain");
  const emojis = ["❤️", "💖", "💕", "💗", "🫂", "🥰", "💘", "💞"];

  setInterval(() => {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji-drop");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.fontSize = `${Math.random() * 20 + 20}px`;
    emoji.style.animationDuration = `${3 + Math.random() * 2}s`;

    rainContainer.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 5000);
  }, 200);
}

function sendLoveReply() {
  const reply = document.getElementById("loveReply").value.trim();

  if (reply === "") {
    alert("Don't be shy 😊 Please type your answer first!");
    return;
  }

  emailjs.send("service_d8inoee", "template_zzd510q", {
    action_clicked: "Love reply: " + reply
  }).then(() => {
    console.log("Love response sent:", reply);

    // Show shy but happy emoji burst
    const responseBox = document.querySelector(".love-response");
    responseBox.innerHTML = "<p style='font-size:1.2em;'>Thank you 🥹💖😊</p>";

    for (let j = 0; j < 20; j++) {
      const emoji = document.createElement("div");
      emoji.className = "emoji-drop";
      emoji.innerText = ["😊", "🥹", "❤️", "💖", "🥰", "🤗"][Math.floor(Math.random() * 6)];

      emoji.style.left = `${Math.random() * 100}%`;
      emoji.style.fontSize = `${Math.random() * 20 + 20}px`;
      emoji.style.animationDuration = `${3 + Math.random() * 2}s`;

      document.getElementById("emoji-rain").appendChild(emoji);

      setTimeout(() => emoji.remove(), 5000);
    }
  }).catch((error) => {
    console.error("Failed to send:", error);
    alert("Something went wrong 😢 Please try again.");
  });
}

