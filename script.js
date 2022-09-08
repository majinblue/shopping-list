let list = document.querySelector("ul");
let button = document.querySelector('#enter');
let input = document.querySelector("input")

function inputLength() {
  return input.value.length;
}

function createItem() {
  if (input.value.length > 0) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li)
    input.value = ''
  }
}

function addListAfterClick () {
  if (inputLength() > 0) {
    createItem()
  }
}

function addListAfterKeypress (event) {
  if (input.value.length > 0 && event.keyCode === 13) {
    createItem()
  }
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)
