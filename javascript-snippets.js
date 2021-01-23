/***
 *
 * @param e{event}
 * @returns {number}
 */
const getInputValueAsInt= e => e.target.valueAsNumber

/***
 *
 * @param element{string}
 * @returns {Promise<void>}
 */
const copyToClipboard = element => navigator.clipboard.writeText(document.querySelector(element).value)

/***
 *
 * @returns {boolean}
 */
const isBrowserTabInView = () => document.hidden;


/***
 *
 * @param num{number}
 * @returns {boolean}
 */
const isEven = num => num % 2 === 0;

/***
 *
 * @param date{Date}
 * @param n{number}
 * @returns {string}
 */
const addDaysToDate = (date, n) => {
    date.setDate(date.getDate() + n);
    return date.toISOString().split('T')[0];
};
