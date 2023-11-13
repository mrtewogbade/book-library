const addBookBtn = document.querySelector('.add-book');
const submitBtn = document.querySelector ('.submit');
const form = document.querySelector('form');




addBookBtn.addEventListener('click', () => {
     form.style.display = 'flex';
})



const errorMsg = querySelector('#para');
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const isRead = document.querySelector('#isRead')

const inputs = [author, pages, isRead, title]

inputs.forEach((input) => {
    input.addEventListener('focusin', () =>{
        errorMsg.textContent = '';
        item.classList.remove('error');

    })
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#isRead').value;

    if(title === '' || author === '' || pages === '' || isRead === ''){
        errorMsg.textContent = 'Please fill in all fields';
        item.classList.add('error');
    } else {
        addBookToLibrary(title, author, pages, isRead);
        form.style.display = 'none';
    }

})

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