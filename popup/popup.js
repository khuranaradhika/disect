// Example backend value
const ethic-rater-rating-id = 42;

// Example function to determine color based on backend value
function getColor(value) {
  if (value < 50) {
    return 'red';
  } else if (value < 100) {
    return 'yellow';
  } else {
    return 'green';
  }
}

// Get a reference to the HTML element
const element = document.getElementById('myElement');

// Get the color based on the backend value
const color = getColor(valueFromBackend);

// Set the background color of the element
element.style.backgroundColor = color;