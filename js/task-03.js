const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulElement = document.querySelector(".gallery");

function addEls(images, ulElement) {
  const liEls = images
    .map(
      ({ url, alt }) =>
        `<li class = "foto">
  <img src="${url}" alt="${alt}">
  </li>`
    )
    .join("");
  ulElement.insertAdjacentHTML("beforeend", liEls);
}
// ulElement.append(...createLiEl);
console.log(images);
addEls(images, ulElement);

// const list = document.querySelector('.list')
// function addEls(users, list) {
//   const liEls = users.map(({ first_name, last_name, email, phone }) => {
//     const fullNameEl = document.createElement('p')
//     fullNameEl.textContent = `${first_name} ${last_name}`

//     const emailEl = document.createElement('p')
//     emailEl.textContent = email

//     const phoneEl = document.createElement('p')
//     phoneEl.textContent = phone

//     const itemEl = document.createElement('li')
//     itemEl.append(fullNameEl, emailEl, phoneEl)

//     return itemEl
//   })

//   console.log(liEls)
//   list.append(...liEls)
// }
// addEls(users, list)
