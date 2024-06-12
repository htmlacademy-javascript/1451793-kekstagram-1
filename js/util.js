const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let lastIdGenerator = 0;

  return () => {
    lastIdGenerator += 1;

    return lastIdGenerator;
  };
};

export { getRandomInteger, getRandomArrayElement, createIdGenerator };
