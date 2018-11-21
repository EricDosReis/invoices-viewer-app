# Memoization

Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

## Implementation

```js
const memoizer = fn => {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log('Returned from cache.');

      return cache.get(key);
    } else {
      const result = fn(...args);

      cache.set(key, result);
      console.log('Added to cache.');

      return result;
    }
  };
};

const sumTwoNumbers = (num1, num2) => num1 + num2;

const memoizedSumTwoNumbers = memoizer(sumTwoNumbers);

console.log(memoizedSumTwoNumbers(5, 5));
console.log(memoizedSumTwoNumbers(7, 2));
console.log(memoizedSumTwoNumbers(3, 3));
console.log(memoizedSumTwoNumbers(5, 5));
```

### Memoizer with recursive factorial

```js
const factorial = memoizer(
  n => {
    if (n <= 1) return 1;

    return n * factorial(--n);
  }
);

console.log('Memoized factorial');
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(4));
```

[10th chapter - Decorator](https://github.com/EricDosReis/invoices-viewer-app/blob/master/DECORATOR.md).
