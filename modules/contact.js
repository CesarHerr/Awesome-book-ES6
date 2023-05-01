// add contact info
const insertContact = () => {
  const main = document.querySelector('body');
  const createContact = document.createElement('div');
  createContact.classList.add('contact');

  createContact.innerHTML = `
      <h2>Contact Information</h2>
      <p>Do you have any questions or you just want to say "Hello"? <br> you can reach out to us!</p>
      <ul>
        <li>Our e-mail: mail@mail.com</li>
        <li>Our phone number: 0043586534422</li>
        <li>Our address: Street name 22, 84503 City, Country</li>
      </ul>
    `;
  return main.appendChild(createContact);
};

// add Footer info
const insertFooter = () => {
  const main = document.querySelector('body');
  const createFooter = document.createElement('footer');
  createFooter.innerHTML = `
    <h4>Copyright  ...</h4>  
    `;
  main.appendChild(createFooter);
};

export { insertContact, insertFooter };