import { EventEmitter } from '../utils/event-emitter.js';
import { log } from '../utils/log.js';

EventEmitter.on('itemsTotalValue', log);
