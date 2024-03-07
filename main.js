const myLibrary = [];
let addButton = document.querySelector(".addBook");
const bookForm = document.querySelector(".bookForm");
const submit = document.querySelector(".submit");
const bookContainer = document.querySelector(".bookArea");
let divInstance = 0;

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

function createUniqueID(target) {          
    return target+divInstance;       
}

function showForm() {    
  bookForm.style.display = "grid";
  addButton.style.display = "none";
  submit.style.display = 'block';    
}

function populate() {
  let parentDiv = document.querySelector(".bookArea");
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
  for (let i = 0; i < myLibrary.length; i++) {   // for each index in library, build a card.
    let newBG = document.createElement('div');
    let newDiv = document.createElement('div');
    let newDel = document.createElement('button');
    let newRead = document.createElement('button');
    newRead.textContent = 'Read This';
    newDel.textContent = 'Remove';
    newDiv.textContent = myLibrary[i].title;  
    newRead.id = createUniqueID("newRead");  
    newDel.id = createUniqueID("newDel"); 
    newDiv.id = createUniqueID("newDiv");
    newBG.id = createUniqueID("newBG")
    newRead.className = "readIt";
    newDel.className = 'delButton';   
    newDiv.className = 'book';
    newBG.className = 'bookBG';     
    document.querySelector(".bookArea").appendChild(newBG);
    newBG.appendChild(newDiv);
    newDiv.appendChild(newRead);   
    newDiv.appendChild(newDel);
    console.log(myLibrary.length);    
    newRead.addEventListener('click', readAbook);
    newDel.addEventListener('click', delBook);  
    divInstance++; 
    if (myLibrary[i].read === true) {
      let idElement = "newRead"+ i;  
      document.getElementById(idElement).style.display = "none";
    }           
  }
  if (myLibrary.length > 0) {
    bookContainer.style.display = "grid";
  } else {
    bookContainer.style.display = "none";
  }
  console.log(myLibrary);
}

function rePopulate() {
      populate();
     divInstance = 0;        
  
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
  rePopulate();   
  }
}

function readAbook(buttonID) {
  let element = buttonID.target.id;  
  let result = element.replace(/\D/g, '');  
  myLibrary[result].read = true;//change status in myLibrary
  rePopulate();
}

function delBook(buttonID) {
  let element = buttonID.target.id;  
  let result = element.replace(/\D/g, '');
  myLibrary.splice(result , 1);
  rePopulate();
}

const riven = new book ("The Rise of Riverstone", "Mandy Schimelpfenig", 495, false);
rePopulate();
addButton.addEventListener("click", showForm);
submit.addEventListener("click", submitBook);
