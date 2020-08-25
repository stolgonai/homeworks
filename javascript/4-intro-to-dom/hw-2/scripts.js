// Your JS code is here

var myBooks = [
    {
      img: "t.ly/KhcU",
      linkToRead: "https://www.barnesandnoble.com/w/to-kill-a-mockingbird-harper-lee/1100151011;jsessionid=003065C95E092A585010E5A9A75E0C1D.prodny_store01-atgap04?ean=9780446310789",
      title: "To Kill a Mockingbird",
      author:"Harper Lee",
      alreadyRead: false,
  
    },
    {
      img: "t.ly/ZCR8",
      linkToRead: "https://www.barnesandnoble.com/w/ceremony-leslie-marmon-silko/1100470410?ean=9780143104919",
      title: "Ceremony",
      author: "Leslie Marmon Silko",
      alreadyRead: false,
  
    },
    {
      img: "t.ly/FQMv",
      linkToRead: "https://www.barnesandnoble.com/w/moby-dick-melville-herman/1110282307?ean=9781593080181",
      title: "Moby-Dick",
      author: "Herman Melville",
      alreadyRead: true,
  
    },
    {
      img: "t.ly/lHtS",
      linkToRead: "https://www.barnesandnoble.com/w/schindlers-list-thomas-keneally/1102298238?ean=9780671880316",
      title: "Schindler’s List",
      author: "Thomas Keneally",
      alreadyRead: true,
  
    },
    {
      img: "t.ly/S7pp",
      linkToRead: "barnesandnoble.com/w/harry-potter-and-the-sorcerers-stone-minalima-design/1136406156?ean=9781338596700",
      title: "Harry Potter and the Philosopher’s Stone",
      author: "J.K. Rowling",
      alreadyRead: true,
  
    },
    {
      img: "t.ly/p3cX",
      linkToRead: "https://www.barnesandnoble.com/w/the-great-gatsby-sparknotes/1104681310?ean=9781411469570",
      title:"The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true,
  
    },
    {
      img: "./prideAndPred.jpg",
      linkToRead: "https://www.barnesandnoble.com/w/barnes-noble-leatherbound-classics-pride-and-prejudice-jane-austen/1106658784?ean=9781435159631",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      alreadyRead: false,
  
    }
  ]
  var bodyTag = document.querySelector("body")
  
            // FIRST VERSION
  
  for(let i = 0; i < myBooks.length; i++){
      var  booksObj = myBooks[i]
      for(let book in booksObj){
          if(book === "title" ){
              var titleEl = document.createElement("p");
              titleEl.classList.add("bookTitle")
              var authorEl = document.createElement("p");
              // authorEl.classList.add("author")
              titleEl.textContent = booksObj["title"] +", " + booksObj["author"];
              // authorEl.textContent = booksObj["author"]
              bodyTag.appendChild(titleEl)
              // bodyTag.appendChild(authorEl)
          }
      }
  }
  