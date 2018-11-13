import { log } from './utils/log.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';
import './utils/array.js';

import { invoiceService as service } from './invoice/service.js';

const operations = pipe(
  partialize(takeUntil, 3),
  partialize(debounceTime, 500)
);

const action = operations(() =>
  service
    .sumItems('2143')
    .then(log)
    .catch(log)
);

document
  .querySelector('#fetchButton')
  .onclick = action;

