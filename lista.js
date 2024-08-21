const inputEl = document.getElementById("textInput");
const olEl = document.getElementById("list");

btn.addEventListener("click", (e) => {
  let input = inputEl.value;

  //Create new element
  const newItem = document.createElement("li");
  newItem.innerHTML = `<li>${input}</li>`;

  //Add new element
  olEl.appendChild(newItem);
});
