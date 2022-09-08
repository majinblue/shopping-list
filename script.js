let list = document.querySelector("ul");
let button = document.querySelector('#enter');
let input = document.querySelector("input")
let listItems = document.querySelectorAll('li')

function inputLength() {
  return input.value.length;
}

function createDeleteButton() {
  let button = document.createElement('button')
  button.appendChild(document.createTextNode('Delete'))
  // When the delete button is clicked, remove it's parent li element from the DOM
  button.addEventListener('click', () => {
    button.parentElement.remove()
  })
  return button
}

function createItem() {
  if (inputLength() > 0) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value = '';
    li.append(createDeleteButton());
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

// Give every list item a button on startup
listItems.forEach(item => {
  let button = createDeleteButton();
  item.append(button)
})

// Loop over the listItems array and add an event listener to each li element
listItems.forEach(item => {
  item.addEventListener("click", function() {
    item.classList.add('done')
  })
})
