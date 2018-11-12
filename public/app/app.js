import { handleStatus }  from './utils/fetch-helpers.js';

document
  .querySelector('#fetchButton')
  .onclick = () =>
    fetch('http://localhost:3000/invoices')
      .then(handleStatus)
      .then(invoices => invoices.reduce((accumulator, invoice) => accumulator.concat(invoice.items), []))
      .then(items => items.filter(item => item.id == '2143'))
      .then(items => items.reduce((total, item) => total + item.value, 0))
      .then(console.log)
      .catch(console.log);
