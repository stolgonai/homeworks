# JavaScript Homeworks from Class 2

## Section - Functions

### 1. The Fortune Teller: With Functions!

Let's turn one of the "Intro To Programming" Exercises into a function.

- Write a function named `tellFortune` that:
  - takes 4 arguments: number of children, partner's name, geographic location, job title.
  - outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.

### 2. What number is bigger?

Write a function that compares two numbers and returns the larger one. Be sure to try it out with some different numbers. Bonus: add error messages if the numbers are equal or cannot be compared.

Don't forget to test it!

### 3. Pluralize

Write a function `pluralize` that takes in two arguments, a number and a word, and returns the plural. For example:

```
pluralize(5, 'cat'): '5 cats'
pluralize(7, 'turtle'): '7 turtles'
```

Bonus: Make it handle a few collective nouns like "sheep" and "geese".

### 4. The Calculator

- Write a function called `squareNumber`that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
- Write a function called `halfNumber` that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
- Write a function called `percentOf` that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
- Write a function called `areaOfCircle` that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
  - Bonus: Round the result so there are only two digits after the decimal.
- Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:

1. Take half of the number and store the result.
2. Square the result of #1 and store that result.
3. Calculate the area of a circle with the result of #2 as the radius.
4. Calculate what percentage that area is of the squared result (#3).

### Challenge Question: String Manipulation

If you feel comfortable with the other exercises, it's time to expand your knowledge! These puzzles involve manipulating strings; to try them out, you'll need to use some of the [built-in JavaScript methods for strings](http://www.w3schools.com/jsref/jsref_obj_string.asp). Methods are pre-written functions that are built into the language.

These questions are not as straightforward as the others. They challenge you to really think like a programmer. Really try to solve them before you peek at the answer.

### MixUp

Create a function called `mixUp`. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

```
mixUp('mix', 'pod'): 'pox mid'
mixUp('dog', 'dinner'): 'dig donner'
```

### FixStart

Create a function called fixStart. It should take a single argument, a string, and return a version where all occurrences of its first character have been replaced with '\*', except for the first character itself. You can assume that the string is at least one character long. For example:

```
fixStart('babble'): 'ba**le'
fixStart('turtle'): 'tur*le'
```

#### If you stuck please reach out to mentors/instructors

#### References

- [Khan Academy - Intro to JS: Drawing & Animation](https://www.khanacademy.org/computing/computer-programming/programming)
- [Code Academy - JavaScript](http://www.codecademy.com/en/tracks/javascript)
