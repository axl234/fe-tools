/**
 * @module Trade
 * @description trade functions
 */

/**
 * @function luhnCheck
 * @param {number | string} num 
 * @extends to:https://github.com/navyxie/bankcardinfo
 */
export function luhnCheck (num) {
    let arr = (num + '').split('').reverse().map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (
        i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9 || 9), 0
    ));

    sum += lastDigit;
    return sum % 10 === 0;
}

/**
 * @function toCurrency
 * @param {number} n 
 * @param {currency string} curr 
 * @param {country string} LanguageFormat 
 */
export function toCurrency (n, curr, LanguageFormat = undefined) {
    return Intl.NumberFormat(LanguageFormat, {
        style: 'currency',
        currency: curr
    }).format(n);
}