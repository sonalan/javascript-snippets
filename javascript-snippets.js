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

/***
 *
 * @param date{Date}
 * @returns {string}
 */
const timeFromDate = date => date.toTimeString().slice(0, 8);


/***
 *
 * @returns {boolean}
 */
const isLocalStorageEnabled = () => {
    try {
        const key = `__storage__test`;
        window.localStorage.setItem(key, null);
        window.localStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
};

/***
 *
 * @param el(Object)
 * @returns {boolean}
 */
const isFocused = el => el === document.activeElement;

/***
 *
 * @param array1(array)
 * @param array2(array)
 * @returns {array}
 */
const findDifferences = (array1, array2) =>  {
    const set = new Set(array2);
    return array1.filter(x => !set.has(x));
};

/***
 *
 * @param el(object)
 * @param evt(event)
 * @param fn(func)
 * @param opts
 * @returns {*}
 */
const removeEventOffElement = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);

/***
 *
 * @returns {string}
 */
const generateRandomColour = () =>   "#" + Math.floor(Math.random()*16777215).toString(16);

/***
 *
 * @param values
 * @returns {*}
 */
const getFirstValidValue = (...values) => values.find(v => ![undefined, null].includes(v));

/***
 *
 * @param element
 * @param callback
 */
const onClickOutsideElement = (element, callback) => {
    document.addEventListener('click', e => {
        if (!element.contains(e.target)) callback();
    });
};
