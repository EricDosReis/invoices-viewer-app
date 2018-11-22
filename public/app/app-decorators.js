import { Person } from './models/person.js';

const person = new Person('Eric', 'Reis');

console.log(person.speak('I\'m a developer'));
console.log(person.getFullName());
