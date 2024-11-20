// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinaryNumber(number) {
  if (number <= 0) {
    return "Invalid Number ";
  }

  if (number > 100) {
    if (number % 100 == 11) {
      return number + "th";
    }
    if (number % 100 == 12) {
      return number + "th";
    }
    if (number % 100 == 13) {
      return number + "th";
    }
  }
  if (number % 10 == 1) {
    return number + "st";
  } else if (number % 10 == 2) {
    return number + "nd";
  } else if (number % 10 == 3) {
    return number + "rd";
  } else {
    return number + "th";
  }
}
// console.log(getOrdinaryNumber(511));
// console.log(getOrdinaryNumber(111));
// console.log(getOrdinaryNumber(11));

test("checking under 100", () => {
  expect(getOrdinaryNumber(11)).toBe("11st");
});
test("checking over 100", () => {
  expect(getOrdinaryNumber(111)).toBe("111th");
});
test("checking number 12", () => {
  expect(getOrdinaryNumber(12)).toBe("12nd");
});
