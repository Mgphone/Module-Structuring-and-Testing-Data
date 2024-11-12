// Predict and explain first...
//predict i think the error is on the Parameter for capitalise is undefined
//read is str has already been declared so that mean function parameter can not replace

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//remove the redeclare variable
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("mgphone"));
