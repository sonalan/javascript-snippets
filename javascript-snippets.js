/***
 * screen browser
 ***/

/***
 * @returns {boolean}
 */
const touchSupported = () => {
    ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
}

/***
 *
 * @type {boolean}
 */
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

/**
 *
 * @returns {string}
 */
const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ? 'Mobile'
        : 'Desktop';

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

/**
 *
 * @param el{object}
 * @returns {{x: (number), y: (number)}}
 */
const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

/***
 *
 */
const goToTop = () => window.scrollTo(0, 0);

/**
 *
 */
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

/**
 *
 * @param el{object}
 * @param className{string}
 * @returns {boolean}
 */
const hasClass = (el, className) => el.classList.contains(className);

/**
 *
 * @param el{object}
 * @param className{string}
 * @returns {boolean}
 */
const toggleClass = (el, className) => el.classList.toggle(className);

/**
 *
 * @param el{object[]}
 */
const hideMe = (...el) => [...el].forEach(e => (e.style.display = 'none'));



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
 * @param el(object)
 * @param evt(event)
 * @param fn(func)
 * @param opts
 * @returns {*}
 */
const removeEventOffElement = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);

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


/** url snippets **/
/**
 *
 * @returns {string}
 */
const currentURL = () => window.location.href;

/**
 *
 * @param url
 * @returns {T}
 */
const getURLParameters = url =>
    (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
        {}
    );
/**
 *
 * @param fn
 * @param wait
 * @param args
 * @returns {number}
 */
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);



/***
 * number snippets
 ***/

/***
 *
 * @param n(number)
 * @param fixed(integer)
 * @returns {number}
 */
const fixedNumber = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);

/***
 *
 * @param e{event}
 * @returns {number}
 */
const getInputValueAsInt= e => e.target.valueAsNumber

/***
 *
 * @param num{number}
 * @returns {boolean}
 */
const isEven = num => num % 2 === 0;

/***
 *
 * @param celsius(number)
 * @returns {number}
 */
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;

/***
 *
 * @param fahrenheit(number)
 * @returns {number}
 */
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

/** date time **/

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

/**
 *
 * @param dateInitial{date}
 * @param dateFinal{date}
 * @returns {number}
 */
const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24);


/*
 * array snippets
 */

/***
 *
 * @param args(array)
 * @returns {number}
 */
const average = (...args) => args.reduce((a, b) => a + b) / args.length;

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

/**
 *
 * @param array1(array)
 * @param array2(array)
 * @returns {T[]}
 */
const diffArray = (array1, array2) => array1.concat(array2).filter(item => !array1.includes(item) || !array2.includes(item) )

/***
 *
 * @param values(array)
 * @returns {*}
 */
const getFirstValidValue = (...values) => values.find(v => ![undefined, null].includes(v));

/***
 * string snippets
 ***/

/***
 *
 * @param str(string)
 * @returns {string}
 */
const reverse = str => str.split('').reverse().join('');


/***
 *
 * @returns {string}
 */
const generateRandomColour = () =>   "#" + Math.floor(Math.random()*16777215).toString(16);


/** server requests */

/**
 *
 * @param url{string}
 * @param callback{function}
 * @param err
 */
const httpGet = (url, callback, err = console.error) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = () => callback(request.responseText);
    request.onerror = () => err(request);
    request.send();
};

/**
 *
 * @param url{string}
 * @param data{object}
 * @param callback{function}
 * @param err
 */
const httpPost = (url, data, callback, err = console.error) => {
    const request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.onload = () => callback(request.responseText);
    request.onerror = () => err(request);
    request.send(data);
};

