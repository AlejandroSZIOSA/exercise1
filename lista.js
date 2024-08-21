const inputEl = document.getElementById("textInput");
const olEl = document.getElementById("list");

btn.addEventListener("click", (e) => {
  let input = inputEl.value;

  //Create new elements
  const newItem = document.createElement("li");
  newItem.innerHTML = input;
  const newBtn = document.createElement("button");
  newBtn.innerHTML = "Remove";

  //Add new elements
  olEl.appendChild(newItem);
  newItem.appendChild(newBtn);

  //Clean Input Element
  inputEl.value = "";
});
