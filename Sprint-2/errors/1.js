// Predict and explain first...
//error because decimalNumber is redeclare and wrong calling function

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on
// i did call the convertToPercentage with parameter
function convertToPercentage(decimalNumber) {
  // decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
