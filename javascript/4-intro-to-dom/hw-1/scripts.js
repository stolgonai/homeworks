// Your JS code is here
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <title>About Me</title>
  <style>
    #nickname,
    #favorites,
    #hometown {
      color: green
    }
  </style>
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
   
   <script>
     /// how i can change the color of liTags textContent 
       var bodyTag = document.querySelector("body");
       bodyTag.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"

       var liTags = document.querySelector("ul").children
       console.log(liTags)
       var nickname = document.getElementById("nickname").textContent = "Barsik";
       var fav = document.getElementById("favorites").textContent = "Fish";
       var hometown = document.getElementById("hometown").textContent ="Where the love lives" ;

        for(let i = 0; i< liTags.length; i++){
            liTags[i].classList.add("listItem");
            liTags[i].style.color = "blue"
            
        }
      
        var imgItem = document.createElement("img")
        imgItem.setAttribute("src", "data:image/jpeg;base64,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")
        bodyTag.appendChild(imgItem)
   
   </script>
 
 </body>
</html>

