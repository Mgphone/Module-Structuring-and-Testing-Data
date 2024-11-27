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
