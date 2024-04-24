const isPalindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll(' ', '');

  let reverseString = '';

  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }

  return tempString === reverseString;
};

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }

  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

const isLessOrEqual = (string, length) => string.length <= length;

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');

extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('агент 007');
extractNumber('а я томат');

myPadStart('1', 2, '0');
myPadStart('1', 4, '0');
myPadStart('q', 4, 'werty');
myPadStart('q', 4, 'we');
myPadStart('qwerty', 4, '0');

isLessOrEqual('проверяемая строка', 20);
isLessOrEqual('проверяемая строка', 18);
isLessOrEqual('проверяемая строка', 10);

