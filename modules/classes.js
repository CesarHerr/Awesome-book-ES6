import Book from './books.js';

const booksTable = document.getElementById('books-table');

// add, remove and display.
class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  displayBooks() {
    booksTable.innerHTML = this.books
      .map(
        (book, index) => `
      <tr>
        <td> "${book.title}" by ${book.author}</td>    
        <td><button class='remove-book-btn' data-book-index=${index}>Remove</button></td>
      </tr>
`,
      )
      .join('');
  }

  addRemoveBtnListeners() {
    booksTable.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-book-btn')) {
        const index = event.target.dataset.bookIndex;
        this.removeBook(index);
        this.displayBooks();
      }
    });
  }
}

export default Library;