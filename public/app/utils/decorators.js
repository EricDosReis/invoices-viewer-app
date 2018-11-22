export const logExecutionTime = (method, property, args) => {
  console.time(property);

  const result = method(...args);

  console.timeEnd(property);

  return result;
};

export const inspectMethod = ({ excludeReturn } = {}) =>
  (method, property, args) => {
    console.log('-----------------------------');
    console.log(`Method decorated: ${property}`);
    console.log(`Method arguments: ${args}`);

    const result = method(...args);

    if (!excludeReturn) console.log(`Method result: ${result}`);

    return result;
  };
