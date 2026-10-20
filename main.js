/* EVENTS */
function keyInfo(e) {
  heading.classList.add("hidden-element");
  keyHide.classList.remove("hidden-element");
  key.textContent = e.key;
  cards.forEach((card, index) => {
    card.querySelector(".key-info-title").textContent = info[index].title;
    card.querySelector(".key-pressed").textContent = info[index].keyValue(e);
    card.querySelector(".key-info-description").textContent =
      info[index].description;
  });
}

function toggleBack(e) {
  if (e.key === " ") {
    heading.classList.remove("hidden-element");
    keyHide.classList.add("hidden-element");
  }
}

/* SELECTORS */
const key = document.querySelector("#key");
key.classList.add("key-style");
const keyHide = document.querySelector("#key-select");
keyHide.classList.add("hidden-element");
const cards = document.querySelectorAll(".key-card");
const info = [
  {
    title: "event.key",
    keyValue: (e) => e.key,
    description:
      "Returns a string representing the logical character or function name produced by the key press.",
  },
  {
    title: "event.code",
    keyValue: (e) => e.code,
    description:
      " Returns a string representing the physical key pressed on the keyboard layout, completely independent of layout changes or modifier states.",
  },
  {
    title: "event.keyCode",
    keyValue: (e) => e.keyCode,
    description:
      "An old, system-dependent numerical code representing the unmodified value of the pressed key.",
  },
];

/* LISTENERS */
document.body.addEventListener("keydown", keyInfo);
document.body.addEventListener("keydown", toggleBack);
