const myLibrary = [];
let addButton = document.querySelector(".addBook");
const bookForm = document.querySelector(".bookForm");
const submit = document.querySelector(".submit");
let divInstance = 0;
let delInstance = 0;
let uID = "";


function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      return(title + " by " + author + ", " + pages + " pages, " + read);
    }
    myLibrary.push(this);    
  }
  function createUniqueDiv(target) {          
    divInstance++;
    console.log(target+divInstance);
    return target+divInstance;       
    }

  function createUniqueDel(target) {          
    delInstance++;
    console.log(target+delInstance);
    return target+delInstance;       
    }

  function addBook() {    
    let newDiv = document.createElement('div');
    let newBG = document.createElement('div');
    let newDel = document.createElement('button');
    newDel.textContent = 'Delete Me';    
    newDel.id = createUniqueDel("newDel"); 
    newDiv.id = createUniqueDiv("newDiv");  
    newDel.className = 'delButton';   
    newDiv.className = 'book';
    newBG.className = 'bookBG';       
    document.querySelector(".bookArea").appendChild(newBG);
    newBG.appendChild(newDiv);
    
    return { newBG, newDiv, newDel};
  }

  
  function listAll(myLibrary) {
     let parentDiv = document.querySelector(".bookArea");
    while (parentDiv.firstChild) {
      parentDiv.removeChild(parentDiv.firstChild);
  }
    for (let i = 0; i < myLibrary.length; i++) {
      let { newBG, newDiv, newDel } = addBook();
      //console.log(myLibrary[i].title);
      newDiv.textContent = myLibrary[i].title;
      newDiv.appendChild(newDel);
    }
  }

  function newBook() {    
    bookForm.style.display = "grid";
    addButton.style.display = "none";
    submit.style.display = 'block';    
  }

  function submitBook() {
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;
    let hasRead = document.getElementById("read").checked;
    let readCheck = hasRead ? "I've read this." : "I haven't read this.";
    
    if (bookTitle !== "") {
    const newBookInstance = new book(bookTitle, bookAuthor, bookPages, readCheck);
    bookForm.style.display = "none";
    submit.style.display = 'none';
    addButton.style.display = "block";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
    listAll(myLibrary);
    divInstance = 0;
    delInstance = 0;
  }
  }


  

  
  
  
  //console.log(listAll(myLibrary));
  //
  addButton.addEventListener("click", newBook);
  submit.addEventListener("click", submitBook);