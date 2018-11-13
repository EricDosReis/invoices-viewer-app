if (!Array.prototype.$flatMap) {
  Array.prototype.$flatMap = function(cb) {
    return this
      .map(cb)
      .reduce((flattenedArray, array) => flattenedArray.concat(array), []);
  }
}
