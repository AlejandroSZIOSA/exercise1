const inputEl = document.getElementById("textInput");
const ulEl = document.getElementById("listBody");

btn.addEventListener("click", function () {
  let input = inputEl.value;

  //Creating new elements
  const newItem = document.createElement("li");
  newItem.innerHTML = input;
  const newBtn = document.createElement("button");
  newDeleteBtn.innerHTML = "Remove";

  //Adding new elements
  ulEl.appendChild(newItem);
  newItem.appendChild(newBtn);

  //Nested Event listener
  newDeleteBtn.onclick = function () {
    newItem.remove();
  };

  //Cleaning Input Element
  inputEl.value = "";
});
