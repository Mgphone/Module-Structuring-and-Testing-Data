// Implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
function getAngleType(degrees) {
  if (degrees < 90 && degrees > 0) {
    return "Actue Angle";
  } else if (degrees == 90) {
    return "Right Angles";
  } else if (degrees > 90 && degrees < 180) {
    return "Obtuse Angle";
  } else if (degrees == 180) {
    return "Straight Angle";
  } else if (degrees > 180 && degrees < 360) {
    return "Reflex Angle";
  } else return "Your angle should not be less than 0 or greater than 360";
}
console.log(getAngleType(181));
