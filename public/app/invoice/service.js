import { handleStatus } from '../utils/promise-helpers.js';
import { partialize, compose, pipe } from '../utils/operators.js';
import { Maybe } from '../utils/maybe.js';

const API = 'http://localhost:3000/invoices';

const getItemsFromInvoices = invoicesMaybe =>
  invoicesMaybe.map(invoices => invoices.$flatMap(invoice => invoice.items));

const filterItemsById = (id, itemsMaybe) =>
  itemsMaybe.map(items => items.filter(item => item.id === id));

const sumItemsValue = itemsMaybe =>
  itemsMaybe.map(items => items.reduce((total, item) => total + item.value, 0));

export const invoiceService = {
  getOne(id) {
    return fetch(`${API}/${id}`)
      .then(handleStatus);
  },

  listAll() {
    return fetch(API)
      .then(handleStatus)
      .then(Maybe.of)
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

    return this.listAll()
      .then(sumItems)
      .then(result => result.getOrElse(0));
  }
}
