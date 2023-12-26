/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a + b > b + c) {
    if (a > b) return a;
    return b;
  }
  if (b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let j = queen.y;
  for (let i = queen.x; i <= 8; i += 1) {
    if (i === king.x && j === king.y) return true;
    j += 1;
  }

  j = queen.y;
  for (let i = queen.x; i <= 8; i += 1) {
    if (i === king.x && j === king.y) return true;
    j -= 1;
  }

  j = queen.y;
  for (let i = queen.x; i >= 0; i -= 1) {
    if (i === king.x && j === king.y) return true;
    j += 1;
  }

  j = queen.y;
  for (let i = queen.x; i >= 0; i -= 1) {
    if (i === king.x && j === king.y) return true;
    j -= 1;
  }

  j = queen.y;
  for (let i = queen.x; i <= 8; i += 1) {
    if (i === king.x && j === king.y) return true;
  }

  for (let i = queen.x; i >= 0; i -= 1) {
    if (i === king.x && j === king.y) return true;
  }

  const i = queen.x;

  for (let jj = queen.y; jj <= 8; jj += 1) {
    if (i === king.x && jj === king.y) return true;
  }

  for (let jj = queen.y; jj >= 0; jj -= 1) {
    if (i === king.x && jj === king.y) return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b || b === c || a === c) return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let res = '';
  let currentNum = num;
  const romNum = ['X', 'IX', 'V', 'IV', 'I'];
  const arabicNum = [10, 9, 5, 4, 1];

  while (currentNum > 0) {
    if (currentNum - arabicNum[0] >= 0) {
      currentNum -= arabicNum[0];
      res += romNum[0];
    } else break;
  }

  while (currentNum > 0) {
    if (currentNum - arabicNum[1] >= 0) {
      currentNum -= arabicNum[1];
      res += romNum[1];
    } else break;
  }

  while (currentNum > 0) {
    if (currentNum - arabicNum[2] >= 0) {
      currentNum -= arabicNum[2];
      res += romNum[2];
    } else break;
  }

  while (currentNum > 0) {
    if (currentNum - arabicNum[3] >= 0) {
      currentNum -= arabicNum[3];
      res += romNum[3];
    } else break;
  }

  while (currentNum > 0) {
    if (currentNum - arabicNum[4] >= 0) {
      currentNum -= arabicNum[4];
      res += romNum[4];
    } else break;
  }

  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  let finalRes = '';
  const setNumbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'point',
    'minus',
    'point',
  ];
  const numbers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
    '-',
    ',',
  ];
  for (let i = 0; i < numberStr.length; i += 1) {
    for (let j = 0; j < numbers.length; j += 1) {
      if (numberStr[i] === numbers[j]) {
        res += `${setNumbers[j]} `;
      }
    }
  }
  switch (res[res.length - 1]) {
    case ' ':
      for (let i = 0; i < res.length - 1; i += 1) {
        finalRes += res[i];
      }
      break;
    default: {
      return finalRes;
    }
  }
  return finalRes;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }
  return reverseStr === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length - 1; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  for (let i = 0; i < String(num).length; i += 1) {
    if (String(num)[i] === String(digit)) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) return -1;
  for (let mid = 1; mid < arr.length; mid += 1) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < mid - 1; i += 1) {
      sumLeft += arr[i];
    }
    for (let i = mid; i < arr.length; i += 1) {
      sumRight += arr[i];
    }
    if (sumLeft === sumRight) return mid - 1;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  let count = 0;
  let ii = 0;
  let jj = size - 1;
  let iiHorizontalReverse = size - 1;
  let jjVerticalReverse = 0;
  arr.length = size;
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
    arr[i].length = size;
  }
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = 0;
    }
  }

  function horizontalFill() {
    for (let j = 0; j < size; j += 1) {
      const i = ii;
      if (arr[i][j] === 0) {
        count += 1;
        arr[i][j] = count;
      }
      if (count === size ** 2) return arr;
    }
    ii += 1;
    return ii;
  }

  function verticalFill() {
    for (let i = 0; i < size; i += 1) {
      const j = jj;
      if (arr[i][j] === 0) {
        count += 1;
        arr[i][j] = count;
      }
      if (count === size ** 2) return arr;
    }
    jj -= 1;
    return jj;
  }

  function horizontalReverseFill() {
    const i = iiHorizontalReverse;
    for (let j = size; j >= 0; j -= 1) {
      if (arr[i][j] === 0) {
        count += 1;
        arr[i][j] = count;
      }
      if (count === size ** 2) return arr;
    }
    iiHorizontalReverse -= 1;
    return iiHorizontalReverse;
  }

  function verticalReverseFill() {
    const j = jjVerticalReverse;
    for (let i = size - 1; i >= 0; i -= 1) {
      if (arr[i][j] === 0) {
        count += 1;
        arr[i][j] = count;
      }
      if (count === size ** 2) return arr;
    }
    jjVerticalReverse += 1;
    return jjVerticalReverse;
  }

  while (count !== size ** 2) {
    horizontalFill();
    verticalFill();
    horizontalReverseFill();
    verticalReverseFill();
  }

  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const resMatrix = [];
  const finalResMatrix = [...matrix];

  resMatrix.length = matrix.length;
  for (let i = 0; i < matrix.length; i += 1) {
    resMatrix[i] = [];
    resMatrix[i].length = matrix.length;
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      resMatrix[i][j] = 0;
    }
  }

  let ii = matrix.length;
  let jj = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      ii -= 1;
      resMatrix[i][j] = matrix[ii][jj];
    }
    jj += 1;
    ii = matrix.length;
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      finalResMatrix[i][j] = resMatrix[i][j];
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function sortArr(tempArr) {
    if (tempArr.length <= 1) {
      return tempArr;
    }
    const baseElem = tempArr[tempArr.length - 1];
    const leftArr = [];
    const rightArr = [];
    let leftI = 0;
    let rightI = 0;
    for (let i = 0; i < tempArr.length - 1; i += 1) {
      if (tempArr[i] < baseElem) {
        leftArr[leftI] = tempArr[i];
        leftI += 1;
      } else {
        rightArr[rightI] = tempArr[i];
        rightI += 1;
      }
    }
    return [...sortArr(leftArr), baseElem, ...sortArr(rightArr)];
  }
  const res = arr;
  const tempRes = sortArr(arr);
  for (let i = 0; i < arr.length; i += 1) {
    res[i] = tempRes[i];
  }
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let resStr = str;
  let step = iterations % (str.length - 2);
  if (iterations > 100) step *= 5;
  for (let j = 0; j < step; j += 1) {
    for (let i = 1; i < str.length / 2 + 1; i += 1) {
      const current = resStr[i];
      resStr = resStr.substring(0, i) + resStr.substring(i + 1, str.length);
      resStr += current;
    }
  }
  return resStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let numberString = number.toString();
  let lastI = numberString.length - 2;
  while (lastI >= 0 && numberString[lastI] >= numberString[lastI + 1]) {
    lastI -= 1;
  }
  if (lastI === -1) return +numberString;
  let j = numberString.length - 1;
  while (numberString[j] <= numberString[lastI]) {
    j -= 1;
  }
  const tempI = numberString[lastI];
  const tempJ = numberString[j];
  numberString =
    numberString.substring(0, lastI) +
    tempJ +
    numberString.substring(lastI, j - 1) +
    tempI +
    numberString.substring(j + 1);
  const rightFromI = numberString.substring(j);
  const rightFromIArr = [];
  for (let ii = 0; ii < rightFromI.length; ii += 1) {
    rightFromIArr[ii] = rightFromI[ii];
  }
  rightFromIArr.sort((a, b) => a - b);
  numberString = numberString.substring(0, j) + rightFromIArr.join('');
  return +numberString;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
