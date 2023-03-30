// Example backend value
const myElement = document.getElementById('ethic-rater-rating-id') ;


// Example function to determine color based on backend value
function getColor(value) {
  if (value < 4) {
    value.style.color = 'red';
  } else if (4 <value < 7) {
    value.style.color = 'yellow';
  } else if (value > 7) {
    value.style.color = 'green';
  }
}


// Get the content of the element and convert it to a number
const myNumber = parseFloat(myElement.textContent);

// Get a reference to the HTML element
const element = document.getElementById('myElement');

// Get the color based on the backend value
const color = getColor(ethic-rater-rating-id);

// Set the background color of the element
element.style.backgroundColor = color;