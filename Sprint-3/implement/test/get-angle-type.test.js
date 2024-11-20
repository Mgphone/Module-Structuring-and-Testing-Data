const getAngleType = require("../get-angle-type");
test("one to 89 degree should return acture angle", () => {
  //   expect(getAngleType(40).toBe("Actue Angle"));
  expect(getAngleType(1)).toBe("Actue Angle");
  expect(getAngleType(89)).toBe("Actue Angle");
});

test("to get 90 degrees right angles", () => {
  expect(getAngleType(90)).toBe("Right Angles");
});

test("91 to 179 to get obtuse angle", () => {
  expect(getAngleType(91)).toBe("Obtuse Angle");
  expect(getAngleType(179)).toBe("Obtuse Angle");
});

test("180 Straight Angle", () => {
  expect(getAngleType(180)).toBe("Straight Angle");
});

test("181 and 259 to be Reflex angle", () => {
  expect(getAngleType(181)).toBe("Reflex Angle");
  expect(getAngleType(259)).toBe("Reflex Angle");
});

test("lest than zero and higher 360 or other number to get invalid", () => {
  expect(getAngleType(-1)).toBe(
    "Your angle should not be less than 0 or greater than 360"
  );
  expect(getAngleType(360)).toBe(
    "Your angle should not be less than 0 or greater than 360"
  );
});
