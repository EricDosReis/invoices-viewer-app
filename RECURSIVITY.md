# Recursivity

## Factorial example

```js
const factorial = n => {
  if (n <= 1) return 1;

  return n * factorial(--n);
};

// With long numbers the call stack size will be exceeded
console.log(factorial(20000));
```

### Solutions

#### TCO

Tail call optimization means that it is possible to call a function from another function without growing the call stack.

```js
const factorial = (acc, n) => {
  if (n <= 1) return acc;

  return factorial(acc * n, --n);
};

// Whaaat? Javascript engines do not support TCO for now. Oooh God!
console.log(factorial(1, 20000));
```

#### Trampoline pattern will save us

Trampoline pattern is used for implementing algorithms recursively in Java without blowing the stack and to interleave the execution of functions without hard coding them together It is possible by representing a computation in one of 2 states : done | more.

```js
const trampoline = fn => {
  while (typeof fn === 'function') {
    fn = fn();
  }

  return fn;
};

const factorial = (acc, n) => {
  if (n <= 1) return acc;

  return () => factorial(acc * n, --n);
};

// Yesss! Works fine o/
console.log(trampoline(factorial(1, 20000)));
```
