import { handleStatus } from '../utils/fetch.js';
import { partialize, compose, pipe } from '../utils/operators.js';

const API = 'http://localhost:3000/invoices';

const getItemsFromInvoices = invoices => invoices
  .$flatMap(invoice => invoice.items);

const filterItemsById = (id, items) => items
  .filter(item => item.id === id);

const sumItemsValue = items => items
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
    const sumItems = pipe(
      getItemsFromInvoices,
      partialize(filterItemsById, id),
      sumItemsValue
    );

    return this.listAll().then(sumItems);
  }
}
