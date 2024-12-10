const getCardValue = require("../get-card-value");
// test("get Value to 2", () => {
//   expect(getCardValue("2", "♦️")).toBe(2);
// });
test("get Value to 2", () => {
  expect(getCardValue("2♦️")).toBe(2);
});

test("Invalid card suit", () => {
  expect(() => getCardValue("2X")).toThrow("Invalid card suit");
});
test("Invalid card rank", () => {
  expect(() => getCardValue("l❤️")).toThrow("Invalid card rank");
});
test("Check 02♦️", () => {
  expect(getCardValue("02♦️")).toBe(2);
});
test("checking 10❤️", () => {
  expect(getCardValue("10❤️")).toBe(10);
});
test("checking K❤️", () => {
  expect(getCardValue("10❤️")).toBe(10);
});
