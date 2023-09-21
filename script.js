// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "#%&*";
var passwordLength;
var passwordChoices = "";
var placeholder = "";

// Write password to the #password input
function writePassword() {
  let question1 = prompt("Please enter a number between 8 and 128 characters");
  passwordLength = question1;
  if (question1 < 8 || question1 > 128) {
    return alert("You didn't choose between 8 and 128 characters");
  }
  let includeUppercase = confirm("Do you want to include uppercase letters?");
  if (includeUppercase) {
    passwordChoices += uppercase;
  }
  let includeLowercase = confirm("Do you want to include lowercase letters?");
  if (includeLowercase) {
    passwordChoices += lowercase;
  }
  let includeNum = confirm("Do you want to include numbers?");
  if (includeNum) {
    passwordChoices += numbers;
  }
  let includeSpecial = confirm("Do you want to include special characters?");
  if (includeSpecial) {
    passwordChoices += specialChar;
  }
  if (
    !includeUppercase &&
    !includeLowercase &&
    !includeNum &&
    !includeSpecial
  ) {
    return alert("You must choose at least one option");
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {
    console.log(passwordChoices);
    const randomNum = generateRandomNum();
    const randomValue = passwordChoices[randomNum];
    placeholder += randomValue;
  }
  console.log(password);
  return placeholder;
}

function generateRandomNum() {
  const num = Math.floor(Math.random() * passwordChoices.length);
  return num;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
