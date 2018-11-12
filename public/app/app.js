import { handleStatus }  from './utils/fetch-helpers.js';

document
  .querySelector('#fetchButton')
  .onclick = () =>
    fetch('http://localhost:3000/invoices')
      .then(handleStatus)
      .then(console.log)
      .catch(console.log);
