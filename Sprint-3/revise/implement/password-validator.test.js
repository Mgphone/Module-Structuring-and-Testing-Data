/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
//using outside to check lower alphabet
const isLowerCase = (newPassword) => {
  const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
  const makeArrayPassword = newPassword.split("");
  for (i = 0; i < makeArrayPassword.length; i++) {
    if (lowerCaseLetter.includes(makeArrayPassword[i])) {
      return true;
    }
    return false;
  }
};
const checkPasswordValidation = (newPassword) => {
  //this is for 5 characters
  //   if (newPassword.length < 5) {
  //     return "Character should be more than 5";
  //   }
  const isCharAtLeaseFive = newPassword.length >= 5;
  //   return newPassword;
  //this is for upperCase Regex
  const upperCaseRegex = /[A-Z]/g;
  const isCharContainOneCapital = !!newPassword.match(upperCaseRegex);
  //   return !!newPassword.match(upperCaseRegex);
  //this is lowerCase
  //   return isLowerCase(newPassword);
  const isCharContainOneLowerLetter = isLowerCase(newPassword);
  //this is for zero to 9
  const digitRegex = /[0-9]/g;
  const isCharContainOneNumber = !!newPassword.match(digitRegex);
  //   return isCharContainOneNumber;
  //   return !!newPassword.match(digitRegex);
  //this is for special character "!", "#", "$", "%", ".", "*", "&"
  const specialRegex = /[!#$%.*&]/g;
  const isCharContainOneSpecialLetter = !!newPassword.match(specialRegex);
  //   return !!newPassword.match(specialRegex);
  //old password
  //   return isCharContainOneSpecialLetter;
  const previousPassword = ["mg-Phone", "Phone."]; //this might coming from somewhere from database
  //   return previousPassword.includes(newPassword);
  const isPasswordMatchOld = !previousPassword.includes(newPassword);
  //   return !isPasswordMatchOld;
  return isCharAtLeaseFive &&
    isCharContainOneCapital &&
    isCharContainOneLowerLetter &&
    isCharContainOneNumber &&
    isCharContainOneSpecialLetter &&
    isPasswordMatchOld
    ? "Password Valid"
    : "Password Invalid";
};
// console.log(checkPasswordValidation("ancd0A."));
test("Checking Invalid", () => {
  expect(checkPasswordValidation("abcd")).toBe("Password Invalid");
});

test("Checking Valid", () => {
  expect(checkPasswordValidation("ancd0A.")).toBe("Password Valid");
});
test("Checking inValid A$.$$$A", () => {
  expect(checkPasswordValidation("A$.$$$A.")).toBe("Password Invalid");
});
