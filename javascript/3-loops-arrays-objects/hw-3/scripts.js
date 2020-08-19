// Your JS code is here

// // The Reading List
// // Keep track of which books you read and which books you want to read!

// // Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// // Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// // Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

// console.log("work#3 -----------------------------")

var myBooks = [
    {
      title: "To Kill a Mockingbird",
      author:"Harper Lee",
      alreadyRead: false,
  
    },
    {
      title: "Ceremony",
      author: "Leslie Marmon Silko",
      alreadyRead: false,
  
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      alreadyRead: true,
  
    },
    {
      title: "Schindler’s List",
      author: "Thomas Keneally",
      alreadyRead: true,
  
    },
    {
      title: "Harry Potter and the Philosopher’s Stone",
      author: "J.K. Rowling",
      alreadyRead: true,
  
    },
    {
      title:"The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true,
  
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      alreadyRead: false,
  
    }
  ]
  for(let i = 0; i < myBooks.length; i++){
    for(let key in myBooks[i]){
      if(key === "title"){
        // console.log(`${myBooks[i]["title"]} by ${myBooks[i]["author"]}`)
      }
    }
  }
  
  
  for(let i = 0; i < myBooks.length; i++){
    for(var key in myBooks[i]){
      // console.log(myBooks[i][key])
      if(key === "alreadyRead"){
        if(myBooks[i][key] === true){
          console.log("You are already read '" + myBooks[i]["title"] + "' by " + myBooks[i]["author"]) 
        }
         if(myBooks[i][key] !== true){
          console.log("You still need to read '" + myBooks[i]["title"] + "' by " + myBooks[i]["author"]) 
        }
        // console.log(key, myBooks[i][key])
      }  
    }
  }
  