// Add button events for the navbar buttons
const addEvent = () => {
  const listButton = document.querySelector('.list-btn');
  const addButton = document.querySelector('.add-btn');
  const contactButton = document.querySelector('.contact-btn');

  const libraryBooks = document.querySelector('.library');
  const addingBooks = document.querySelector('.books-form');
  const contactInfo = document.querySelector('.contact');

  listButton.addEventListener('click', () => {
    addingBooks.style.display = 'none';
    libraryBooks.style.display = 'inline';
    contactInfo.style.display = 'none';
  });

  addButton.addEventListener('click', () => {
    addingBooks.style.display = 'inline';
    libraryBooks.style.display = 'none';
    contactInfo.style.display = 'none';
  });

  contactButton.addEventListener('click', () => {
    addingBooks.style.display = 'none';
    libraryBooks.style.display = 'none';
    contactInfo.style.display = 'inline';
  });
};

export default addEvent;