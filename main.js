// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(num1, num2){
    var result;

    if (num1 > num2) {
      result = num1;
    } else if (num2 > num1) {
      result = num2;
    } else if (isNaN(num1) || isNaN(num2)) {
      result = "Please enter valid numbers";
    } else {
      result = "The numbers are equal";
    }

    return result;
}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(num1, num2, num3){
  var result;

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    result = "Please enter valid numbers";
  } else {
    result = Math.max(num1, num2, num3);
  }
  return result;
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
  var result;

  var upperCase = char.toUpperCase();

  if (upperCase == "A" || upperCase == "E" || upperCase == "I" || upperCase == "O" || upperCase == "U") {
    result = true;
  } else {
    result = false;
  }

  return result;
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum(num1, num2) {
  var result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers";
  } else {
    result = num1 + num2;
  }
  return result;
}

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:

function avg(num1, num2, num3) {
  var result;

  if (isNaN(num1) || isNaN(num2), isNaN(num3)) {
    result = "Please enter valid numbers";
  } else {
    result = (num1 + num2 + num3) / 3;
  }
  return result;
}

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength(string) {
  return string.length;
}

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan(num1, num2) {
  var result;

  if (num1 > num2) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet(name) {
  return "Hello, " + name.charAt(0).toUpperCase() + name.slice(1) + "!";
}

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madLib(pronoun, verb, adjective, noun) {
  return pronoun.charAt(0).toUpperCase() + pronoun.slice(1) + " learned how to " + verb + " today so that my " + adjective + " " + noun + " is now better!";
}
