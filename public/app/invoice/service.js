import { handleStatus } from '../utils/fetch.js';

const API = 'http://localhost:3000/invoices';

const sumItems = (id) => invoices => invoices
  .$flatMap(invoice => invoice.items)
  .filter(item => item.id == id)
  .reduce((total, item) => total + item.value, 0);

export const invoiceService = {
  listAll() {
    return fetch(API)
      .then(handleStatus)
      .catch(err => {
        console.log(err);

        return Promise.reject('Could not get invoices');
      });
  },

  sumItems(id) {
    return this.listAll()
      .then(sumItems(id));
  }
}
