function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// initial value to zero and each loop it will increase to one of the str
// b) What is the if statement used to check
// to check str char and second parameter got same
// c) Why is index++ being used?
// to add one each time
// d) What is the condition index < str.length used for?
// that is the meaning of 0 less than the length for expression and not over the length of string
