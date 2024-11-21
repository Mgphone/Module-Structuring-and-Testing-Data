// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
const repeatString = (str, count) => {
  if (typeof str !== "string" || typeof count !== "number") {
    return "Make Sure Parameter have to be String or Number";
  }
  if (count < 0) {
    throw new Error("Negative counts are not valid");
  }
  let outputResult = "";
  for (let i = 0; i < count; i++) {
    outputResult += str;
  }
  return outputResult;
};
// console.log(repeatString(true, 2));
test("Check valid string", () => {
  expect(repeatString(2, 1)).toBe(
    "Make Sure Parameter have to be String or Number"
  );
});
test("Check valid count", () => {
  expect(repeatString(2, true)).toBe(
    "Make Sure Parameter have to be String or Number"
  );
});
//to throw have to be empty or anonymous function
test("Check count less than zero", () => {
  //   expect(repeatString("Hello", -1)).toThrow("Negative counts are not valid");
  expect(() => repeatString("Hello", -1)).toThrow(
    "Negative counts are not valid"
  );
});

test("Check count is zero", () => {
  expect(repeatString("Hello", 0)).toBe("");
});
test("Check count is more than one positive Integer", () => {
  expect(repeatString("Hello", 3)).toBe("HelloHelloHello");
});
