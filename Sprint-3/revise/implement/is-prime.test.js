// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
const isPrimeNumber = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};
test("checking negative number", () => {
  expect(isPrimeNumber(-1)).toBe(false);
});
test("checking negative number", () => {
  expect(isPrimeNumber(0)).toBe(false);
});
test("checking negative number", () => {
  expect(isPrimeNumber(1)).toBe(false);
});
test("checking prime number", () => {
  expect(isPrimeNumber(5)).toBe(true);
});
test("checking not prime number", () => {
  expect(isPrimeNumber(4)).toBe(false);
});
test("Checking multiply", () => {
  expect(isPrimeNumber(7 * 11)).toBe(false);
});
// expect(isPrimeNumber(7*11)).toBe(false);
// console.log(isPrimeNumber(1));
