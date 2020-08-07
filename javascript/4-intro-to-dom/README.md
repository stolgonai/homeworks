# JavaScript Homeworks from Class 4

## Section Intro to DOM

### 1. Logo Hijack

- Open up www.google.com in Chrome or Firefox, and open up the console.
- Find the Google logo and store it in a variable.
- Modify the source of the logo IMG so that it's a Yahoo logo instead. (http://www.logostage.com/logos/yahoo.GIF)

### 2. About Me

Start with this HTML and save it as "aboutme.html":

```
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8"/>
  <title>About Me</title>
</head>
<body>
  <h1>About Me</h1>

  <ul>
    <li>Nickname:
      <span id="nickname"></span>
    </li>
    <li>Favorites:
      <span id="favorites"></span>
    </li>
    <li>Hometown:
      <span id="hometown"></span>
    </li>
   </ul>

 </body>
</html>
```

- Add a script tag to the bottom.
- (In JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
- (In JavaScript) Replace the content of each of the spans (nickname, favorites, hometown) with your own information.
- Iterate through each li and add a class of "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
- Create a new img element and set its src attribute to a picture of you. Append that element to the body.

### 3. The Reading List Part II

Create a webpage with an `h1` of "My Book List".
Add a script tag to the bottom of the page, where all your JavaScript will go.
Copy the array of books from the previous exercise.
Iterate through the array of books. For each book, create a `p` element with the book title and author and append it to the page.
**_Bonus:_** Use a `ul` and `li` to display the books.
**_Bonus:_** add a property to each book with the URL of the book cover, and add an `img` element for each book on the page.
**_Bonus:_** Change the style of the book depending on whether you have read it or not.

### Challenge Question: The Counter

Write a function that takes a certain type of tag and counts the number of elements with that tag. The function should return "There a X tags of type y on the page. For example:

```
countTags('p'): 'There are 3 tags of type p on the page'
```

#### If you stuck please reach out to mentors/instructors

#### References

- [Khan Academy - Intro to JS: Drawing & Animation](https://www.khanacademy.org/computing/computer-programming/programming)
- [Code Academy - JavaScript](https://www.khanacademy.org/computing/computer-programming/programming)
