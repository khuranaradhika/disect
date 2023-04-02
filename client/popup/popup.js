// Example function to determine color based on backend value
function getColor(value) {
  if (value < 4) {
    return 'red';
  } else if (4 <value < 7) {
    return 'yellow';
  } else if (value > 7) {
    return 'green';
  }
}
function getEmissions(){
  fetch("http://localhost:5000/api/emissions/shipto/1,1&xyr").then((data) => {
    console.log("HELLO");
    console.log(data);
  })
}

window.onload = function() {
  // Get the content of the element and convert it to a number
  const myElement = document.getElementById('ethic-rater-rating-id') ;
  const myNumber = parseFloat(myElement.textContent);

  // Get a reference to the HTML element
  const element = document.getElementById('ethic-rater-circle-id');

  // Get the color based on the backend value
  const color = getColor(myNumber);
  console.log(color);

  // Set the background color of the element
  element.style.backgroundColor = color;

  // document.getElementById("co2-units-display-id").innerHTML = 4;
  getEmissions();

}