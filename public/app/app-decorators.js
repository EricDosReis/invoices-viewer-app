import { Person } from './models/person.js';

import { decorate } from './utils/decorate.js';
import { logExecutionTime, inspectMethod } from './utils/decorators.js';

decorate(Person, {
  speak: [inspectMethod, logExecutionTime],
  getFullName: [logExecutionTime]
});

const person = new Person('Eric', 'Reis');

person.speak('I\'m a developer');
person.getFullName();
