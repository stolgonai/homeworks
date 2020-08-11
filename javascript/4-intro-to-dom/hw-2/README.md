# JavaScript Homeworks from Class 4

## Section Intro to DOM

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
