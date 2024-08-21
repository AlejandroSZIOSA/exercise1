const inputEl = document.getElementById("textInput");
const ulEl = document.getElementById("listBody");

btn.addEventListener("click", (e) => {
  let input = inputEl.value;

  //Creating new elements
  const newItem = document.createElement("li");
  newItem.innerHTML = input;
  const newBtn = document.createElement("button");
  newBtn.innerHTML = "Remove";

  //Adding new elements
  ulEl.appendChild(newItem);
  newItem.appendChild(newBtn);

  //Event listener remove (nested event listeners)
  newItem.addEventListener("click", function () {
    this.remove();
  });

  //Cleaning Input Element
  inputEl.value = "";
});
