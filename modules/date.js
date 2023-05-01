//date

import { DateTime } from './luxon.js';

const insertDate = () => {
  const now = DateTime.now();
  const dateFormat = now.toLocaleString(DateTime.DATETIME_MED);
  const main = document.querySelector('body');
  const createDate = document.createElement('div');
  createDate.classList.add('date');

  createDate.innerHTML = dateFormat;

  return main.appendChild(createDate);
}

export default insertDate;