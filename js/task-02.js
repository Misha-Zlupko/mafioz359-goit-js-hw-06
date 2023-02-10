const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const liEls = [];
const itemEl = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  liEls.push(liEl);
}

itemEl.append(...liEls);
// const inputsEl = document.querySelector("#name-input");
// const nameEl = document.querySelector("#name-output");

// inputsEl.addEventListener("input", (event) => {
//   nameEl.textContent = event.target.value;
//   if (inputsEl.textContent === "") {
//     return Anonymus;
//   }
// });
