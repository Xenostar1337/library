const myLibrary = [];
let addButton = document.querySelector(".addBook");
const bookForm = document.querySelector(".bookForm");
const submit = document.querySelector(".submit");
const bookContainer = document.querySelector(".bookArea");
let divInstance = 0;
let delInstance = 0;
let readInstance = 0;
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
    return target+divInstance;       
  }
function createUniqueDel(target) {          
    return target+divInstance;       
  }
function createUniqueRead(target) {          
    return target+divInstance;       
  }
function readBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    //console.log(myLibrary[i].read)
  }
  }

  function addBook() {    
    let newDiv = document.createElement('div');
    let newBG = document.createElement('div');
    let newDel = document.createElement('button');
    let newRead = document.createElement('button');
    newRead.textContent = 'Read';
    newDel.textContent = 'Remove';  
    newRead.id = createUniqueRead("newRead");  
    newDel.id = createUniqueDel("newDel"); 
    newDiv.id = createUniqueDiv("newDiv");
    divInstance++;  
    newRead.className = "readIt";
    newDel.className = 'delButton';   
    newDiv.className = 'book';
    newBG.className = 'bookBG';       
    document.querySelector(".bookArea").appendChild(newBG);
    newBG.appendChild(newDiv);



    newRead.addEventListener('click', readAbook);
    newDel.addEventListener('click', delBook);
  
    return { newBG, newDiv, newDel, newRead };
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
  document.getElementById("title").value = ""; //resetting form
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;
  readCheck = hasRead ? true : false;
  if (bookTitle !== "") {
  const newBookInstance = new book(bookTitle, bookAuthor, bookPages, readCheck);
  bookForm.style.display = "none";
  submit.style.display = 'none';
  addButton.style.display = "block";
  listAll(myLibrary);   
  divInstance = 0;
  delInstance = 0;
  readInstance = 0;
  }
}

  function listAll(myLibrary) {
    let parentDiv = document.querySelector(".bookArea");
    while (parentDiv.firstChild) {
      parentDiv.removeChild(parentDiv.firstChild);
    }
    for (let i = 0; i < myLibrary.length; i++) {
      let { newBG, newDiv, newDel, newRead } = addBook();
      let idElement =  "newRead"+ i;          
      newDiv.textContent = myLibrary[i].title;
      newDiv.appendChild(newRead);           
      newDiv.appendChild(newDel);      
      if (myLibrary[i].read === true) {
        let hasRead = document.getElementById(idElement);
        hasRead.style.display = "none";
      }             
    }
    if (myLibrary.length > 0) {
      bookContainer.style.display = "grid";
    }
  }

function readAbook() {
  console.log("read a book", )
}
  
//newBG.remove();


  listAll(myLibrary);
  
  addButton.addEventListener("click", newBook);
  submit.addEventListener("click", submitBook);