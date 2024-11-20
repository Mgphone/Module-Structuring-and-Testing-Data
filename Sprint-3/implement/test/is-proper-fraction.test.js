const isProperFraction = require("../is-proper-fraction");
test("throws error when denominator is zero", () => {
  expect(() => isProperFraction(1, 0)).toThrow("Denominator cannot be zero");
});

test("throws error when both numerator and denominator are zero", () => {
  expect(() => isProperFraction(0, 0)).toThrow("Denominator cannot be zero");
});

test("returns true for a proper fraction", () => {
  expect(isProperFraction(1, 2)).toBe(true);
});

test("returns false for an improper fraction", () => {
  expect(isProperFraction(2, 1)).toBe(false);
});
