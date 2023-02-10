const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

const counter = {
  value: 0,
  incrementEls() {
    this.value += 1;
    valueEl.textContent = this.value;
  },
  decrementEls() {
    this.value -= 1;
    valueEl.textContent = this.value;
  },
};

decrementEl.addEventListener("click", function () {
  counter.decrementEls();
});
incrementEl.addEventListener("click", function () {
  counter.incrementEls();
});
