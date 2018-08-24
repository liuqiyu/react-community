/**
 * ---------------------------------------------------------------
 *        ** utils.js 工具库 **
 *
 * create by kaway 2018-8-15.
 * 工具包含功能：
 *  1、[isArray]: 判断是否为数组
 *  2、[isObject]: 判断是否为对象 - {}
 *  3、[browserType]: 判断浏览器环境 - pc/移动
 *  4、[isAndroid]: 判断浏览器环境 - 安卓
 *  5、[isIos]: 判断浏览器环境 - ios
 *  6、[isSafari]: 判断浏览器环境 - safari
 *  7、[isWeixin]: 判断浏览器环境 - 微信
 *  8、[deepCopy]: 对象的深拷贝
 *  9、[hasClass]: 判断是否有该类
 *  10、[toPoint]: 百分比转换为小数
 *
 * version update log:
 * ---------------------------------------------------------------
 */

/**
 * 判断是否为数组
 * @param value
 * @returns {*|boolean}
 */
export const isArray = value => {
    return value && typeof value === 'object' && value.constructor === Array;
};
// export const isArray = value => {
//     return value && typeof value === 'object' && value instanceof Array;
// };
// export const isArray = value => {
//     return Array.isArray(value) || (typeof value === 'object' && Object.prototype.toString.call(value) === '[object Array]');
// };

/**
 * 判断是否为对象 - {}
 * @param value
 * @returns {*|boolean}
 */
export const isObject = value => {
    return value && typeof value === 'object' && Object.prototype.toString.call(value) === '[object Object]';
};

/**
 * 判断浏览器环境 - pc/移动
 * @returns {string}
 */
export const browserType = () => {
    const sUserAgent = navigator.userAgent.toLowerCase();
    const bIsIpad = sUserAgent.match(/ipad/i) === "ipad";
    const bIsIphoneOs = sUserAgent.match(/iphone os/i) === "iphone os";
    const bIsMidp = sUserAgent.match(/midp/i) === "midp";
    const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) === "rv:1.2.3.4";
    const bIsUc = sUserAgent.match(/ucweb/i) === "ucweb";
    const bIsAndroid = sUserAgent.match(/android/i) === "android";
    const bIsCE = sUserAgent.match(/windows ce/i) === "windows ce";
    const bIsWM = sUserAgent.match(/windows mobile/i) === "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return 'app'
    } else {
        return 'pc'
    }
};

/**
 * 判断浏览器环境 - 安卓
 * @returns {boolean}
 */
export const isAndroid = () => {
    return /Android/i.test(navigator.userAgent) || /Linux/i.test(navigator.appVersion);
};

/**
 * 判断浏览器环境 - ios
 * @returns {boolean}
 */
export const isIos = () => {
    return (/ipad|iphone/i.test(navigator.userAgent));
};

/**
 * 判断浏览器环境 - safari
 * @returns {boolean}
 */
export const isSafari = () => {
    return (/msie|applewebkit.+safari/i.test(navigator.userAgent));
};

/**
 * 判断浏览器环境 - 微信
 * @returns {boolean}
 */
export const isWeixin = () => {
    return /MicroMessenger/i.test(navigator.userAgent);
};

/**
 * 对象的深拷贝
 * @param value
 * @returns {any}
 */
export const deepCopy = (value) => {
    return JSON.parse(JSON.stringify(value));
};

/**
 * 判断是否有该类
 * @param dom
 * @param clas
 * @returns {boolean}
 */
export const hasClass = (element, clas) => {
    return (' ' + element.className + ' ').indexOf(' ' + clas + ' ') > -1;
};

/**
 * 百分比转换为小数
 * @param percent -> 值
 * @param num -> 小数位数
 * @returns {string}
 */
export const toPoint = (percent, num) => {
    // 如果没传小数位，则默认保留两位小数
    if (!num) {
        num = 2;
    }
    let str = percent.replace("%", "");
    str = str/100;
    return str.toFixed(num);
};