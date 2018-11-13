import { handleStatus }  from './utils/fetch.js';
import { log } from './utils/log.js';
import './utils/array.js';

import { invoiceService as service } from './invoice/service.js';

document
  .querySelector('#fetchButton')
  .onclick = () =>
    service
      .sumItems('2143')
      .then(log)
      .catch(log);
