
const btn = document.querySelector ('.add-book');
const submitBtn = document.querySelector ('.submit');
const form = document.querySelector('form');


btn.addEventListener('click', () =>{
     form.style.display = 'flex';
})

console.log(btn);



// function validateForm(){
//     const paraEl = document.getElementById('para');
//     const title = document.querySelector('#title').value;
//     const author = document.querySelector('#author').value;
//     const pages = document.querySelector('#pages').value;
//     const isRead = document.querySelector('#isRead').value;

//     if (title === '' || author === '' || pages === '' || (isRead !== 'yes' && isRead !== 'no')){
//         paraEl.textContent = 'Please fill in all fields'
//         return false;
//     }
//     return true;
// }
// submitBtn.addEventListener('click', validateForm)

const myLibrary = [];

const Book = function(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

const addBookToLibrary = function(title, author, pages, isRead){
    const newBook = new Book (title, author, pages, isRead);
    myLibrary.push(newBook);
}

console.log(Book);