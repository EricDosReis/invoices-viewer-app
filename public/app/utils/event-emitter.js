const events = new Map();

export const EventEmitter = {
  on(event, listerner) {
    if (!events.has(event)) events.set(event, []);

    events.get(event).push(listerner);
  },

  emit(event, data) {
    const listerners = events.get(event);

    if (listerners) listerners
      .forEach(listerner => listerner(data));
  },
};
