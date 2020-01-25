"use strict";
exports.__esModule = true;
var segOne = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
var prefix = ['twen', 'thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'];
var digitsToGroup = [
    { digit: 3, text: 'hundred' },
    { digit: 4, text: 'thousand' },
    { digit: 7, text: 'million' },
    { digit: 10, text: 'billion' },
    { digit: 13, text: 'trillion' },
    { digit: 16, text: 'quadrillion' },
    { digit: 19, text: 'quintillion' },
    { digit: 22, text: 'sextillion' },
    { digit: 25, text: 'septillion' },
    { digit: 28, text: 'octillion' },
    { digit: 31, text: 'nonillion' },
    { digit: 34, text: 'decillion' },
    { digit: 37, text: 'undecellion' },
    { digit: 40, text: 'duodecillion' },
    { digit: 43, text: 'tredecillion' },
    { digit: 46, text: 'quattuordecillion' },
    { digit: 49, text: 'quindecillion' },
    { digit: 52, text: 'sexdecillion' },
    { digit: 55, text: 'septen-decillion' },
    { digit: 58, text: 'octodecillion' },
    { digit: 61, text: 'novemdecillion' },
    { digit: 64, text: 'vigintillion' },
];
exports.numberToText = function (number) {
    var numString = number.toString();
    var digits = numString.length;
    if (number >= 1 && number <= 12) {
        return segOne[number - 1];
    }
    if (number >= 13 && number <= 19) {
        return prefix[number - 12] + 'teen';
    }
    if (number >= 20 && number < 100) {
        return number % 10
            ? prefix[Math.floor(number / 10) - 2] + 'ty' + ' ' + segOne[number % 10 - 1]
            : prefix[Math.floor(number / 10) - 2] + 'ty';
    }
    var result = '';
    var num = number.toString();
    var segLength = digits % 3;
    if (segLength === 0) {
        if (num[0] !== '0') {
            result += segOne[parseInt(num[0], 10) - 1] + ' hundred ';
        }
        num = num.toString().slice(1);
        if (parseInt(num, 10)) {
            result += exports.numberToText(num) + '';
        }
    }
    else {
        var segment = num.substring(0, segLength);
        var comp = parseInt(segment, 10);
        if (comp >= 1 && comp <= 12) {
            result += segOne[comp - 1] + ' ';
        }
        else if (comp >= 13 && comp <= 19) {
            result += prefix[comp - 12] + 'teen' + ' ';
        }
        else if (comp >= 20 && comp < 100) {
            result += comp % 10
                ? prefix[Math.floor(comp / 10) - 2] + 'ty ' + segOne[comp % 10 - 1] + ' '
                : prefix[Math.floor(comp / 10) - 2] + 'ty ';
        }
        num = num.toString().slice(segLength);
        var dPos_1 = 0;
        digitsToGroup.forEach(function (group, index) { if (group.digit <= digits) {
            dPos_1 = index;
        } });
        if (dPos_1) {
            result += digitsToGroup[dPos_1].text;
        }
        if (num) {
            result += ' ' + exports.numberToText(num);
        }
    }
    return result.trim();
};
exports["default"] = exports.numberToText;
