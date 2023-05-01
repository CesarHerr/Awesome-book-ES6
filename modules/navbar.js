// create navBar
const navBar = () => {
  const main = document.querySelector('body');
  const createNavBar = document.createElement('div');
  createNavBar.classList.add('nav-bar');

  createNavBar.innerHTML = `  
    <h3>Awesome Books</h3>   
    <nav>
      <ul>
        <li><button class="list-btn">List</button></li>
        <li><button class="add-btn">Add new</button></li>
        <li><button class="contact-btn">Contact</button></li>
      </ul>
    </nav>  
      `;
  return main.insertAdjacentElement('afterbegin', createNavBar);
};

export default navBar;