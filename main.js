let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.toggleRead = function () {
  this.isRead = !this.isRead;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}



function render() {
  let libraryEl = document.querySelector(".library");

  // Check if #library element exists
  if (libraryEl) {
    libraryEl.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i];
      let bookEl = document.createElement("div");
      bookEl.setAttribute("class", "book-info");

      bookEl.innerHTML = `
                <div>
                    <h3>Title: ${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>Pages: ${book.pages}</p>
                    <p>Status: ${book.isRead ? "Read" : "Not Read"}
                    <button onclick="removeBook(${i})">Remove</button>
                    <button class="toggle-read-btn" onclick="toggleRead(${i})">ToggleRead</button>
                </div>
            `;
      libraryEl.appendChild(bookEl);
    }
  } else {
    console.error("#library element not found");
  }
}

function removeBook(index) {
  console.log(index);
  myLibrary.splice(index, 1);

  render();
}

function addBookToLibrary() {
  //do stuff here

  let title = document.querySelector("#title").value;
  let author = document.getElementById("author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  render();
}

let addBookBtn = document.querySelector(".add-book");
addBookBtn.addEventListener("click", () => {
  let formEl = document.querySelector(".form");
  formEl.style.display = "flex";
});

document.querySelector("#new-book-form").addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
  console.log("clicked");

  let formEl = document.querySelector(".form");
  formEl.style.display = "none";
});
