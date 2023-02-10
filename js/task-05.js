// const inputsEl = document.querySelector("#name-input");
// const nameEl = document.querySelector("#name-output");

// inputsEl.addEventListener("input", (event) => {
//   nameEl.textContent = event.target.value;
//   if (inputsEl.textContent === "") {
//     return Anonymus;
//   }
// });
const inputsEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputsEl.addEventListener("input", (event) => {
  nameEl.textContent = event.target.value;
  if (inputsEl.textContent === "") {
    return Anonymus;
  }
});
