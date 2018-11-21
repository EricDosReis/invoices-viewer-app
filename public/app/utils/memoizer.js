export const memoizer = fn => {
  const cache = new Map();

  const newFn = (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);

      cache.set(key, result);

      return result;
    }
  };

  newFn.clearCache = () => cache.clear();

  return newFn;
};
