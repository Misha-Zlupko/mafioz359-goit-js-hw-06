const listEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${listEl.length}`);
// for (const liEl of listEl) {
//   let nameChange = liEl.querySelector("h2").textContent;
//   console.log(`Category: ${nameChange}`);
//   let numberChange = liEl.querySelectorAll("li").length;
//   console.log(`Elements: ${numberChange}`);
// }
// let list = document.querySelector("#categories");
// let items = list.querySelectorAll("li.item");

console.log(`Number of categories: ${listEl.length}`);

listEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
