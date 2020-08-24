// Your JS code is here
// Your JS code is here
let myBooks = [
    {
      img:
        "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY545_FMwebp_QL65_.jpg",
      linkToRead:
        "https://www.barnesandnoble.com/w/to-kill-a-mockingbird-harper-lee/1100151011;jsessionid=003065C95E092A585010E5A9A75E0C1D.prodny_store01-atgap04?ean=9780446310789",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      alreadyRead: false
    },
    {
      img:
        "https://m.media-amazon.com/images/I/71PZNtvJNEL._AC_UY545_FMwebp_QL65_.jpg",
      linkToRead:
        "https://www.barnesandnoble.com/w/ceremony-leslie-marmon-silko/1100470410?ean=9780143104919",
      title: "Ceremony",
      author: "Leslie Marmon Silko",
      alreadyRead: false
    },
    {
      img:
        "https://m.media-amazon.com/images/I/81HBvFY7sjL._AC_UY545_FMwebp_QL65_.jpg",
      linkToRead:
        "https://www.barnesandnoble.com/w/moby-dick-melville-herman/1110282307?ean=9781593080181",
      title: "Moby-Dick",
      author: "Herman Melville",
      alreadyRead: true
    },
    {
      img:
        "https://m.media-amazon.com/images/I/91RUXhkXchL._AC_UY545_FMwebp_QL65_.jpg",
      linkToRead:
        "https://www.barnesandnoble.com/w/schindlers-list-thomas-keneally/1102298238?ean=9780671880316",
      title: "Schindler’s List",
      author: "Thomas Keneally",
      alreadyRead: true
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
      linkToRead:
        "barnesandnoble.com/w/harry-potter-and-the-sorcerers-stone-minalima-design/1136406156?ean=9781338596700",
      title: "Harry Potter and the Philosopher’s Stone",
      author: "J.K. Rowling",
      alreadyRead: true
    },
    {
      img:
        "https://m.media-amazon.com/images/I/81af+MCATTL._AC_UY545_FMwebp_QL65_.jpg",
      linkToRead:
        "https://www.barnesandnoble.com/w/the-great-gatsby-sparknotes/1104681310?ean=9781411469570",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true
    },
    {
      img:
        "https://m.media-amazon.com/images/I/71cMat1+a+L._AC_UL800_FMwebp_QL65_.jpg",
      linkToRead:
        "https://www.barnesandnoble.com/w/barnes-noble-leatherbound-classics-pride-and-prejudice-jane-austen/1106658784?ean=9781435159631",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      alreadyRead: false
    }
  ];
  
  let todoBooks = document.querySelector(".todo-books");
  let doneBooks = document.querySelector(".done-books");
  
  function sortBooks(books) {
    let readed = [];
    let unReaded = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i].alreadyRead) {
        readed.push(books[i]);
      } else {
        unReaded.push(books[i]);
      }
    }
    return { readed, unReaded };
  }
  // console.log(sortBooks(myBooks));
  let { readed, unReaded } = sortBooks(myBooks);
  
  drawBookList(unReaded, todoBooks);
  drawBookList(readed, doneBooks);
  
  function drawBookList(list, container) {
    //list = uread & read/ cont = node
    container.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
      let book = list[i];
      var boxNode = document.createElement("div");
      boxNode.classList.add("oneBox");
  
      var image = document.createElement("img");
      image.classList.add("bookCover");
      image.src = book.img;
  
      var title = document.createElement("a");
      title.classList.add("title");
      title.setAttribute("href", book.linkToRead);
      title.textContent = book["title"];
  
      var author2 = document.createElement("p");
      author2.classList.add("author");
      author2.textContent = "by " + book["author"];
  
      image.addEventListener("click", function () {
        book.alreadyRead = !book.alreadyRead;
        list.splice(i, 1); // unReaded
        if (list !== unReaded) {
          unReaded.unshift(book);
        } else {
          readed.unshift(book);
        }
        drawBookList(unReaded, todoBooks);
        drawBookList(readed, doneBooks);
      });
  
      boxNode.appendChild(image);
      boxNode.appendChild(title);
      boxNode.appendChild(author2);
      container.appendChild(boxNode);
    }
  }
  