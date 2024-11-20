const getCardValue = require("../get-card-value");
test("get Value to 2", () => {
  expect(getCardValue("2", "♦️")).toBe(2);
});
