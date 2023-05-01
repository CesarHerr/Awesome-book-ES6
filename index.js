import Library from './modules/classes.js';
import navBar from './modules/navbar.js';
import { insertContact, insertFooter } from './modules/contact.js';
import addEvent from './modules/buttons.js';

navBar();
insertContact();
insertFooter();
addEvent();

const libraryOfBooks = new Library();

const addBooksForm = document.getElementById('add-books-form');
const addBookBtn = document.getElementById('add-book-btn');

addBookBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const title = addBooksForm.elements.title.value.trim();
  const author = addBooksForm.elements.author.value.trim();

  if (title !== '' && author !== '') {
    libraryOfBooks.addBook(title, author);
    libraryOfBooks.displayBooks();
    addBooksForm.reset();
  }
});

libraryOfBooks.displayBooks();
libraryOfBooks.addRemoveBtnListeners();