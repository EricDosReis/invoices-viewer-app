export const logExecutionTime = (method, property, args) => {
  console.time(property);

  const result = method(...args);

  console.timeEnd(property);

  return result;
}

export const inspectMethod = (method, property, args) => {
  console.log(`Method decorated: ${property}`);
  console.log(`Method arguments: ${args}`);

  const result = method(...args);

  console.log(`Method result: ${result}`);

  return result;
}
