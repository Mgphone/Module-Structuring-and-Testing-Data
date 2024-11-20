// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
const countChar = (str, char) => {
  let numberToWord = [
    "0",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  let splitValue = str.split("");
  let result = 0;
  for (let i = 0; i < splitValue.length; i++) {
    if (splitValue[i] == char) {
      result += 1;
    }
  }
  return result == 0
    ? "no occurrences of the char were found in the case-sensitive str"
    : `"${char}" appears ${numberToWord[result]} ${
        result > 1 ? "times" : "time"
      } in "${str}"`;
};
console.log(countChar("hello s", "a"));

test("not found char in str", () => {
  expect(countChar("You can not find me", "z")).toBe(
    "no occurrences of the char were found in the case-sensitive str"
  );
});

test("find/finds char in str", () => {
  expect(countChar("aaaaa", "a")).toBe(`"a" appears five times in "aaaaa"`);
});
