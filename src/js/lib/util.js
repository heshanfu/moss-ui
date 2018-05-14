export { default as scrollIt } from './methods/scroll-it';
export { default as scrollTo } from './methods/scrollTo';
export * from './methods/icon';

/**
 * location.search to Object.
 *
 * @return {object|null}
 */
export function locationSearchToObject() {
  return searchToObject(window.location.search);
}

/**
 * searchToObject
 *
 * @param  {string} search HTMLAnchorElement.search
 * @return {object|null}
 */
export function searchToObject(search) {
  if (search === '') return null;

  const queries = search.substring(1).split('&');
  const obj = {};

  queries.forEach((value) => {
    const q = value.split('=');
    if (!q[1]) return;
    obj[decodeURIComponent(q[0])] = decodeURIComponent(q[1]);
  });

  return obj;
}

/**
 * returns true if 'big' contains 'small'.
 *
 * @param  {any}  big
 * @param  {any}  small
 * @return {boolean}
 */
export function isContains(big, small) {
  if (typeof big !== typeof small) return false;

  if (Array.isArray(big) && Array.isArray(small)) {
    let correct = 0;
    big.forEach((v) => {
      if (small.includes(v)) correct++;
    });
    return correct == small.length;
  } else if (Object(big) === big && Object(small) === small) {
    for (const p in small) {
      if (!(p in big && isContains(big[p], small[p]))) return false;
    }

    return true;
  } else {
    return big === small;
  }
}

/**
 * Determine whether value is empty.
 * @link https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
 *
 * @param  {any}  val
 * @return {boolean}
 */
export function isEmpty(val) {
  if (typeof val === 'undefined') return true;
  if (val === null) return true;
  if (typeof val === 'boolean') return !val;
  if (typeof val === 'number') return val <= 0;
  if (typeof val === 'string') return val.length === 0;
  if (Array.isArray(val)) return val.length === 0;
  if (typeof val === 'object') {
    return Object.keys(val).length === 0 && val.constructor === Object;
  }
}

/**
 * isMobileSize
 *
 * @param  {number}  [size = 800] window width point. (pixels)
 * @return {boolean}
 */
export function isMobileSize(size = 800) {
  return window.innerWidth < size;
}

/**
 * String to CamelCase
 * @deprecated in v0.6.x. use Case.camel or Case.pascal instead.
 *
 * @param {string} str
 * @param {boolean} [isSmallCamel=false] If true, returns as smallCamelCase.
 * @returns {string}
 */
export function strToCamel(str, isSmallCamel = false) {
  return strToNormal(str)
    .split(' ')
    .map((word, i) => (i === 0 && isSmallCamel) ? word : word[0].toUpperCase() + word.substr(1))
    .join('');
}

/**
 * String to kebab-case.
 * @deprecated in v0.6.x. use Case.kebab instead.
 *
 * @param {string} str
 * @returns {string}
 */
export function strToKebab(str) {
  return strToNormal(str).replace(/([\s])/g, '-');
}

/**
 * String to normal case. e.g. 'hello world'
 * @deprecated in v0.6.x. use Case.lower instead.
 *
 * @param {string} str
 * @returns {string}
 */
export function strToNormal(str) {
  return str.replace(/([A-Z][a-z])/g, ' $1')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([\W|_]+)/g, ' ')
    .trim().toLowerCase();
}

/**
 * Capitalize first letters.
 * @deprecated in v0.6.x. use Case.capital instead.
 *
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  return strToNormal(str)
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}
