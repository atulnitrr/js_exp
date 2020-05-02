var button = document.querySelector("button");
var position = document.querySelector("h3");

var count = 0;
button.addEventListener("click", (event) => {
  count++;
  button.textContent = `I was clicked ${count} times`;

  document.title = `I was clicked ${count} times`;
});
console.log(button);

window.addEventListener("mouseover", (event) => {
  position.textContent = `X: ${event.pageX}, Y: ${event.pageY}`;
});
