const colorRed = 'lightcoral';
const colorYellow = 'khaki';
const colorGreen = 'lightgreen';
const units = ' kgs'; // need to allow this to change depending on user preference

// Determine ethicality rating circle color based on backend value
function getColorEthic(value) {
  if (value < 4) {
    return colorRed;
  } else if (4 <= value && value < 7) {
    return colorYellow;
  } else {
    return colorGreen;
  }
}

// Determine color of co2 emissions box based on value
function getColorCO2(value) {
  if (value < 1000) {
    return colorGreen;
  } else if (value >= 1000 && value < 5000) {
    return colorYellow;
  } else {
    return colorRed;
  }
}

// Determine ethicality rating remark based on backend value
function getRemark(value) {
  if (value < 4) {
    return 'Bad';
  } else if (4 <= value && value < 7) {
    return 'Okay';
  } else {
    return 'Good';
  }
}

window.onload = function() {
  // Get numbers for display
  const ethicalityRating = 8;
  const emissionsEstimate = 40000;

  // Set colors/remark to display -- read values and convert to color depending on value
  const circleElement = document.getElementById('ethic-rater-circle-id');
  const boxElement = document.getElementById('co2-units-display-id');
  const circleColor = getColorEthic(ethicalityRating);
  const boxColor = getColorCO2(emissionsEstimate);
  console.log(circleColor, boxColor);

  // Put statistics into the HTML
  document.getElementById('ethic-rater-rating-id').innerHTML = ethicalityRating;
  document.getElementById('co2-units-display-id').innerHTML = emissionsEstimate + units;

  // Set the background color of the element
  circleElement.style.backgroundColor = circleColor;
  boxElement.style.backgroundColor = boxColor;

  // Add a fun fact... grab from backend eventually
  document.getElementById('funfact-id').innerHTML = 'X';

}