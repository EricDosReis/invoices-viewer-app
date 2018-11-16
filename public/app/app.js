import { log } from './utils/log.js';
import { EventEmitter } from './utils/event-emitter.js';
import { timeoutPromise, retry } from './utils/promise-helpers.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';
import './utils/array.js';

import { invoiceService as service } from './invoice/service.js';

const operations = pipe(
  partialize(takeUntil, 3),
  partialize(debounceTime, 500)
);

const action = operations(() =>
  retry(3, 100, () => timeoutPromise(3000, service.sumItems('2143')))
    .then(total => EventEmitter.emit('itemsTotalValue', `Invoices total value $${total}`))
    .catch(log)
);

document
  .querySelector('#fetchButton')
  .onclick = action;

