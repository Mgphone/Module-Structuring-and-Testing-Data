const rotateCharacter = require("../rotate-char");
test("first argument Invalid Alphabet", () => {
  expect(rotateCharacter("2", 2)).toBe("2");
});
test("first argument Invalid Alphabet", () => {
  expect(rotateCharacter("2", 100)).toBe("2");
});
test("first argument Invalid Alphabet", () => {
  expect(rotateCharacter("a", 100)).toBe("w");
});
test("first argument Invalid Alphabet", () => {
  expect(rotateCharacter("A", 100)).toBe("W");
});

// test("last letter to be number", () => {
//   expect(rotateCharacter("2", "2")).toBe("Check Your Number");
// });
