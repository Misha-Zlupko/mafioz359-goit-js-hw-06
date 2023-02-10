const listEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listEl.length}`);
for (const liEl of listEl) {
  let nameChange = liEl.querySelector("h2").textContent;
  console.log(`Category: ${nameChange}`);
  let numberChange = liEl.querySelectorAll("li").length;
  console.log(`Elements: ${numberChange}`);
}
