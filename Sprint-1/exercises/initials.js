let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

let first = firstName[0];
let middle = middleName.slice(0, 1);
let last = lastName.charAt(0);
console.log(first + middle + last);
