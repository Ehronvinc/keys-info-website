/* EVENTS */
function keyInfo(e) {
  document.querySelector(".info-container").classList.add("hidden-element");
  document.querySelector("#key-select").classList.remove("hidden-element");
  key.textContent = e.key === " " ? "SPACE" : e.key;
  cards.forEach((card, index) => {
    card.querySelector(".key-info-title").textContent = info[index].title;
    card.querySelector(".key-pressed").textContent = info[index].keyValue(e);
    card.querySelector(".key-info-description").textContent =
      info[index].description;
  });
}

function toggleBack(e) {
  if (e.key === " ") {
    document
      .querySelector(".info-container")
      .classList.remove("hidden-element");
    document.querySelector("#key-select").classList.add("hidden-element");
  }
}

/* SELECTORS */
const key = document.querySelector("#key");
key.classList.add("key-style");
document.querySelector("#key-select").classList.add("hidden-element");
const cards = document.querySelectorAll(".key-card");
const info = [
  {
    title: "event.key",
    keyValue: (e) => (e.key === " " ? "SPACE" : e.key),
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
