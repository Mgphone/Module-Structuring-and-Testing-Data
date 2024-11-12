// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  if (!time || time.length !== 5) {
    return "Invalid Number";
  }
  const splitTime = time.split(":");

  if (splitTime.length !== 2) {
    return "Invalid format time";
  }

  const hours = Number(splitTime[0]);
  const minutes = +splitTime[1];
  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    minutes < 0 ||
    minutes > 59 ||
    hours < 0 ||
    hours > 23
  ) {
    return "Invalid Time value";
  }

  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  if (hours == 0) {
    return `12:${minutes} am`;
  }
  if (hours == 12) {
    return `12:${minutes} pm`;
  }
  return `${hours}:${minutes} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
