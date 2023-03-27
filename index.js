import BooksList from './modules/bookList.js';
import { DateTime } from './modules/luxon.js';
const booksList = new BooksList();

const addButton = document.getElementById('add-book');
addButton.addEventListener('click', () => {
  booksList.addNewBook();
  booksList.createContainer();
  localStorage.setItem('data', JSON.stringify(booksList.booksList));
});

// Setting date and time.

document.getElementById('date').innerHTML = DateTime.now()
  .setLocale('en-US')
  .toFormat('ff');

// Event listeners.

const listBook = document.getElementById('listBooks');
const addNewSection = document.getElementById('addNewBook');
const contactSection = document.getElementById('contactSection');
const sectionUno = document.getElementById('list');
const sectionDos = document.getElementById('add-new');
const sectionTres = document.getElementById('contact');

listBook.addEventListener('click', () => {
  sectionUno.style.display = 'block';
  sectionDos.style.display = 'none';
  sectionTres.style.display = 'none';
  listBook.style.color = 'blue';
  addNewSection.style.color = 'black';
  contactSection.style.color = 'black';
});

addNewSection.addEventListener('click', () => {
  sectionUno.style.display = 'none';
  sectionDos.style.display = 'block';
  sectionTres.style.display = 'none';
  listBook.style.color = 'black';
  addNewSection.style.color = 'blue';
  contactSection.style.color = 'black';
});

contactSection.addEventListener('click', () => {
  sectionUno.style.display = 'none';
  sectionDos.style.display = 'none';
  sectionTres.style.display = 'flex';
  listBook.style.color = 'black';
  addNewSection.style.color = 'black';
  contactSection.style.color = 'blue';
});

window.onload = () => {
  booksList.createContainer();
};
