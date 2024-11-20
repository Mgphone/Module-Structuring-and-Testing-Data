const isValidTriangle = require("../is-valid-triangle");

test("Is a valid triangle", () => {
  expect(isValidTriangle(3, 3, 3)).toBe(true);
});

test("Invalid Triangle with Negative", () => {
  expect(isValidTriangle(1, -2, 1)).toBe(false);
});

test("Invalid checking triangle with zero sides", () => {
  expect(isValidTriangle(0, 1, 2)).toBe(false);
});
test("checking invalid", () => {
  expect(isValidTriangle(1, 2, 3)).toBe(false);
});
