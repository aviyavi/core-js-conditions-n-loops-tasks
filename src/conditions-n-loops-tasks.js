/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://mozilla.org *
 * https://mozilla.org         *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns a boolean value whether the number is positive.
 *
 * @param {number} number - The number to test.
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
 *  1, 2, 3      => 3
 *  -5, 0, 5     => 5
 *  -0.1, 0, 0.2 => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }

  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 *
 * @param {Object} queen - The position of the queen {x: number, y: number}.
 * @param {Object} king - The position of the king {x: number, y: number}.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example:
 *  {x: 1, y: 1}, {x: 5, y: 5} => true (diagonal match)
 *  {x: 1, y: 1}, {x: 1, y: 5} => true (row match)
 *  {x: 1, y: 1}, {x: 5, y: 1} => true (column match)
 *  {x: 1, y: 1}, {x: 2, y: 3} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Turns a number into a string, replacing digits with words.
 *
 * @param {string} numberStr - The string representation of a number.
 * @return {string} The string representation of a number as words.
 *
 * @example:
 *  '1' => 'one'
 *  '10' => 'one zero'
 *  '-10' => 'minus one zero'
 *  '10.5' => 'one zero point five'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    let word = '';

    switch (numberStr[i]) {
      case '0':
        word = 'zero';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      case '-':
        word = 'minus';
        break;
        case '.':
          word = 'point';
          break;
        case ',':
          word = 'point';
          break;  
      default:
        word = '';
    }

    if (word !== '') {
      if (result !== '') {
        result += ' ';
      }
      result += word;
    }
  }

  return result;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
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
 *  3, 3, 3   => true
 */
function isIsoscelesTriangle(/* a, b, c */) {
  throw new Error('Not implemented');
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => 'I'
 *  5   => 'V'
 *  10  => 'X'
 *  21  => 'XXI'
 *  29  => 'XXIX'
 *  39  => 'XXXIX'
 */
function convertToRomanNumerals(/* num */) {
  throw new Error('Not implemented');
}

/**
 * Converts a direction letter to an angle in degrees.
 * Min value is 0 degree, max value is 360 degree.
 *
 * @param {string} direction - The direction letter ('W', 'S', 'E', 'N').
 * @return {number} The angle in degrees.
 *
 * @example:
 *  'W' => 0
 *  'S' => 90
 *  'E' => 180
 *  'N' => 270
 */
function convertToDegrees(/* direction */) {
  throw new Error('Not implemented');
}

/**
 * Checks if a string is a palindrome.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qwertytrewq' => true
 *  'A man, a plan, a canal: Panama' => true
 *  'abcd'      => false
 */
function isPalindrome(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Finds the first occurrence of a letter in a string.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q' => 0
 *  'qwerty', 't' => 4
 *  'qwerty', 'Q' => -1
 *  'qwerty', 'x' => -1
 */
function getIndexOf(/* str, letter */) {
  throw new Error('Not implemented');
}

/**
 * Checks if a number contains a specific digit.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123, 3  => true
 *  123, 4  => false
 *  -123, 1 => true
 */
function isContainNumber(/* num, digit */) {
  throw new Error('Not implemented');
}

/**
 * Reverses a total number of digits of a number.
 *
 * @param {number} num - The number to reverse.
 * @return {number} The reversed number.
 *
 * @example:
 *  12345 => 54321
 *  -1234 => -4321
 *  120   => 21
 */
function getBalanceIndex(/* num */) {
  throw new Error('Not implemented');
}

/**
 * Generates a spiral matrix of a given size, filled with numbers from 1 to size * size in clockwise order.
 *
 * @param {number} size - The size of the matrix.
 * @return {Array} The spiral matrix.
 *
 * @example:
 *        [
 *,
 *  3  =>,
 *          [7, 6, 5]
 *        ]
 *        [
 *,
 *  4  =>,
 *,
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(/* size */) {
  throw new Error('Not implemented');
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 *
 * @param {Array} matrix - The matrix to rotate.
 * @return {Array} The rotated matrix.
 *
 * @example:
 *       [                 [
 *,  ,
 *,  =>,
 *         [7, 8, 9]         [9, 6, 3]
 *       ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 *
 * @param {Array} arr - The array to sort.
 * @return {Array} The sorted array.
 *
 * @example:
 *  [2, 9, 5, 1, 3] => [1, 2, 3, 5, 9]
 *  [3, 0, -1, -4, 2] => [-4, -1, 0, 2, 3]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Shuffles characters in a string so that characters with an odd index are moved to the end of the string matching their relative order.
 *
 * @param {string} str - The string to shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345' => '024135'
 *  'qwerty' => 'qetwry'
 *  '0123456789' => '0246813579'
 */
function shuffleChar(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 *
 * @param {number} number - The positive integer.
 * @return {number} The nearest largest integer or the original number if not found.
 *
 * @example:
 *  12345    => 12354
 *  123450   => 123504
 *  12344    => 12434
 *  123440   => 124034
 *  1203450  => 1203504
 *  90       => 90
 *  11111    => 11111
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  convertNumberToString, // убедитесь, что имя здесь именно такое
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertToDegrees,
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
