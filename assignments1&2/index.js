// Assignment 1 | 7th July 2021

// Question :
// Print 5 stars in same line
for (let i = 5; i <= 5; i++) {
  console.log("*".repeat(i));
}

// Assignment 2 | 8th July 2021

// Question 1 :
// Fizz Buzz problem
let c3 = 0;
let c5 = 0;
for (i = 1; i <= 100; i++) {
  let s = "";
  c3++;
  c5++;
  if (c3 == 3) {
    s = s + "fizz";
    c3 = 0;
  }
  if (c5 == 5) {
    s = s + "buzz";
    c5 = 0;
  }
  if (s == "") {
    console.log(i);
  } else {
    console.log(s);
  }
}

// Question 2 :
// find palindrome words in a given string.
let str = "madam is driving a civic car with her mom dad ";

str = str + " ";
word = "";
revword = "";
for (let k of str) {
  if (k != " ") {
    word = word + k;
    revword = k + revword;
  } else {
    if (word == revword) {
      console.log(word);
    }
    word = "";
    revword = "";
  }
}
