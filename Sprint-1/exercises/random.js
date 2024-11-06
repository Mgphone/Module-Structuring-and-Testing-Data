const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);

// explain
// there is Math.random mean random number and maximum(100) minus 2 and then
// Math.random can be 0 to .9 aything and value is 98
// all the value to plus 1
// instead i can use Math.floor(Math.random()*100) that will give you 0 to 99
// if i want 1 to 100 add +1
