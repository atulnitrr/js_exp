var button = document.querySelector("button");

var count = 0;
button.addEventListener("click", (event) => {
  count++;
  button.textContent = `I was clicked ${count} times`;

  document.title = `I was clicked ${count} times`;
});
console.log(button);
