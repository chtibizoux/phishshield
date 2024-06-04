const email = document.getElementById("mail");
const trash = document.getElementById("trash");
const check = document.getElementById("check");
const dialogInfo = document.getElementById("trick-dialog");
const trickTitle = document.getElementById("trick-title");
const explanationText = document.getElementById("explanation");
const startScreen = document.getElementById("start-screen");
const continueButton = document.getElementById("continue-button");
const startButton = document.getElementById("play-button");
const trueSvg = document.getElementById("true");
const falseSvg = document.getElementById("false");
const endScreen = document.getElementById("end-screen");
const replayButton = document.getElementById("replay-button");
const scoreText = document.getElementById("score");
const totalText = document.getElementById("total");
const wrongText = document.getElementById("wrong");
const rightText = document.getElementById("right");
const encouragingText = document.getElementById("encouraging-text");

const objectElement = document.getElementById("object");
const avatarElement = document.getElementById("avatar");
const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const dateElement = document.getElementById("date");
const replytoElement = document.getElementById("replyto");
const replytoContainer = document.getElementById("replyto-container");
const sendbyElement = document.getElementById("sendby");
const signedbyElement = document.getElementById("signedby");
const securityElement = document.getElementById("security");
const contentElement = document.getElementById("content");
const mute = document.getElementById("mute");
const foreground = document.getElementById("foreground");
const warning = document.getElementById("warning");
const badLink = document.getElementById("bad-link");

const end = new Audio("sounds/end_game.mp3");
const right = new Audio("sounds/win.mp3");
const wrong = new Audio("sounds/loose.mp3");
const ambiance = new Audio("sounds/musique_fond.mp3");
const badLinkSound = new Audio("sounds/bad_link.mp3");

ambiance.loop = true;
ambiance.volume = 0.2;

let index = 0;
let score = 0;

let offsetX, offsetY;

mute.onclick = () => {
  ambiance.muted = !mute.classList.contains("muted");
  mute.classList.toggle("muted");
};

setText(data[index].content);

const encouragingPhrases = {
  right: [
    "Bien joué ! Tu as commencé fort. Reste vigilant pour éviter les emails de phishing !",
    "Tu as tout compris !",
    "Impressionnant !",
    "Tu gères ! Garde les yeux ouverts.",
    "Bien joué ! Reste vigilant.",
    "Tu es sur la bonne voie, ne lâche pas !",
    "Tu navigues comme un pro ! Continue comme ça.",
    "Tu deviens un expert en cybersécurité !",
    "Sur la bonne voie, reste concentré !",
    "Les obstacles ne t'arrêtent pas, continue.",
    "Super !",
    "Les hackers tremblent !",
    "Tu découvres tous les pièges, c'est impressionnant.",
    "Bravo, champion de la sécurité !",
    "La dernière ligne droite ! Reste focus.",
    "Le phishing n'a plus de secret pour toi !",
  ],
  wrong: [
    "Essaie encore !",
    "Analyse et reprends le contrôle.",
    "Pas de panique, même les experts trébuchent parfois. Apprends de tes erreurs et relève-toi !",
    "Pas grave, apprends de tes erreurs.",
    "Rien n'arrête un disciple déterminé.",
    "Les meilleurs apprennent de leurs erreurs. Quelle leçon vas-tu tirer de celle-ci ?",
    "Ce n'est qu'un revers, pas une défaite. La prochaine fois, tu seras plus fort(e) !",
    "Pas de souci, même les experts ont des jours difficiles. Réessaie !",
    "Ne te décourage pas. Les maîtres de la sécurité ont tous commencé par quelques erreurs.",
    "Le hacker peut être rusé, mais chaque échec est une chance d'apprendre. Tu peux le faire !",
    "Tu peux te rattraper !",
    "Chaque erreur est une leçon. Réessaie !",
  ],
};

const wrongEmojis = [
  "🙄",
  "😔",
  "🙁",
  "😒",
  "😟",
  "☹️",
  "😞",
  "😢",
  "😣",
  "😓",
];

warning.onclick = badLink.onclick = (e) => {
  e.currentTarget.close();
};

window.onmessage = (e) => {
  switch (e.data) {
    case "badLink":
      badLinkSound.play();
      badLink.showModal();
      foreground.style.boxShadow = "inset 0px 0px 100px 20px #7e0000";
      setTimeout(() => {
        foreground.style.boxShadow = "";
      }, 1300);
      break;
    case "warning":
      warning.showModal();
      break;
    default:
      console.error("Unrecognized message", e.data);
      break;
  }
};

startButton.onclick = () => {
  startScreen.style.transform = "scale(1.4)";
  startScreen.style.opacity = 0;
  ambiance.play();
  setTimeout(() => {
    startScreen.remove();
  }, 300);
};

replayButton.onclick = () => {
  endScreen.style.transform = "";
  endScreen.style.opacity = 0;
  score = 0;
  index = 0;
  setText(data[index].content);
  reset();
  setTimeout(() => {
    endScreen.style.display = "";
  }, 300);
};

continueButton.onclick = () => {
  dialogInfo.close();
  if (index < data.length - 1) {
    index++;
    setText(data[index].content);
    reset();
  } else {
    end.play();
    const wrong = data.length - score;
    if (score > 0) {
      rightText.style.display = "";
      rightText.innerText = `Tu as détecté ${score} e-mail${
        score === 1 ? "" : "s"
      } frauduleux${score === data.length ? ", bien joué ! 🥳👍🎉" : "."}`;
    } else {
      rightText.style.display = "none";
    }
    if (wrong > 0) {
      wrongText.style.display = "";
      wrongText.innerText = `${
        score > 0 ? "Mais m" : "M"
      }alheureusement, tu as laissé passer ${wrong} e-mail${
        wrong === 1 ? "" : "s"
      } frauduleux. ${peak(wrongEmojis, wrong / data.length)}`;
    } else {
      wrongText.style.display = "none";
    }

    scoreText.innerText = score;
    totalText.innerText = data.length.toString();
    endScreen.style.display = "flex";
    setTimeout(() => {
      endScreen.style.transform = "none";
      endScreen.style.opacity = 1;
    }, 1);
  }
};

email.onpointerdown = (e) => {
  e.preventDefault();
  offsetX = e.clientX /*  - draggable.getBoundingClientRect().left */;
  offsetY = e.clientY /*  - draggable.getBoundingClientRect().top */;
  e.currentTarget.setPointerCapture(e.pointerId);
};

email.onpointermove = (e) => {
  e.preventDefault();
  if (e.currentTarget.hasPointerCapture(e.pointerId)) {
    const sep = getSep();

    email.style.transform = `translate(${e.clientX - offsetX}px, ${
      e.clientY - offsetY
    }px) rotate(${(e.clientX - offsetX) / 50}deg) scale(${Math.max(
      0.7,
      Math.min(1, 1 / (Math.abs(e.clientX - offsetX) / sep))
    )})`;

    if (e.clientX - offsetX < -sep) {
      email.style.boxShadow = "0 0 60px red";
      trash.style.fill = "red";
      check.style.fill = "#aaaaaa";
    } else if (e.clientX - offsetX > sep) {
      email.style.boxShadow = "0 0 60px green";
      trash.style.fill = "#aaaaaa";
      check.style.fill = "green";
    } else {
      email.style.boxShadow = "";
      trash.style.fill = "#aaaaaa";
      check.style.fill = "#aaaaaa";
    }
  }
};

email.onpointerup = (e) => {
  if (e.currentTarget.hasPointerCapture(e.pointerId)) {
    const sep = getSep();
    if (e.clientX - offsetX < -sep) {
      info(data[index].explanation, !data[index].good);
    } else if (e.clientX - offsetX > sep) {
      info(data[index].explanation, data[index].good);
    } else {
      email.style.transitionDuration = "0.3s";
      reset();
      setTimeout(() => {
        email.style.transitionDuration = "";
      }, 300);
    }
    e.currentTarget.releasePointerCapture(e.pointerId);
  }
};

function info(explanation, itsTrue) {
  email.style.transitionDuration = "0.2s";
  email.style.transform = email.style.transform.replace(
    /scale\(.+\)/,
    "scale(0)"
  );
  explanationText.innerText = explanation;
  if (itsTrue) {
    right.play();
    score++;
    trickTitle.innerText = "C'est vrai !";
    trueSvg.style.display = "";
    falseSvg.style.display = "none";
    encouragingText.innerText = peak(
      encouragingPhrases.right,
      score / data.length
    );
  } else {
    wrong.play();
    trickTitle.innerText = "C'est faux !";
    trueSvg.style.display = "none";
    falseSvg.style.display = "";
    encouragingText.innerText = peak(
      encouragingPhrases.wrong,
      (index - score) / data.length
    );
  }
  setTimeout(() => {
    email.style.transitionDuration = "";
    dialogInfo.showModal(); /* animation */
  }, 200);
}

function reset() {
  email.style.transform = "";
  email.style.boxShadow = "";
  trash.style.fill = "#aaaaaa";
  check.style.fill = "#aaaaaa";
}

/**
 * @param {typeof data[number]["content"]} content
 */
function setText(content) {
  objectElement.innerText = content.object;
  avatarElement.innerText = content.name[0].toUpperCase();
  nameElement.innerText = content.name;
  emailElement.innerText = content.email;
  dateElement.innerText = new Date(content.date).toLocaleString();
  if (content.replyto) {
    replytoElement.innerText = content.replyto;
    replytoContainer.hidden = false;
  } else {
    replytoContainer.hidden = true;
  }
  sendbyElement.innerText = content.sendby;
  signedbyElement.innerText = content.signedby;
  securityElement.innerText = content.security;

  if (content.contentHtml) {
    const iframe = document.createElement("iframe");
    iframe.srcdoc = content.contentHtml;
    contentElement.replaceChildren(iframe);
  } else {
    contentElement.innerText = content.content;
  }
}

function getSep() {
  return window.innerWidth / 5;
}

function peak(list, ratio) {
  return list[Math.round(ratio * (list.length - 1))];
}
