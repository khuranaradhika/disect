const optionsForm = document.getElementById('options-form');

optionsForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const unitsSystem = document.querySelector('input[name="options-units-system"]:checked').value;

  // Do something with the selected units system value
  console.log(`Selected units system: ${unitsSystem}`);
});