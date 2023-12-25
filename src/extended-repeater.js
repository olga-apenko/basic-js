const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  let repeatedString = "";

  for (let i = 0; i < repeatTimes; i++) {
    repeatedString += str;

    for (let j = 0; j < additionRepeatTimes; j++) {
      repeatedString += addition;

      if (j < additionRepeatTimes - 1) {
        repeatedString += additionSeparator;
      }
    }

    if (i < repeatTimes - 1) {
      repeatedString += separator;
    }
  }

  return repeatedString;
}

module.exports = {
  repeater,
};
