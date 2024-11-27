const rotateCharacter = require("../rotate-char");
test("first argument Invalid Alphabet", () => {
  expect(rotateCharacter("2", 2)).toBe("2");
});

// test("last letter to be number", () => {
//   expect(rotateCharacter("2", "2")).toBe("Check Your Number");
// });
