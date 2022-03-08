// 防抖
export function comDebounce(func, waitTime) {
    // if (debounceTimer) {
    //     clearTimeout(debounceTimer);
    // }
    // debounceTimer = setTimeout(() => {
    //     func.apply(this)
    // }, waitTime);
    let debounceTimer = null;
    return function () {
        const argu = arguments;
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }
        debounceTimer = setTimeout(function () {
            func.apply(this, argu);
        }, waitTime);
    }
}

// 节流
let throttleTimer = null;
export function comThrottle(func, waitTime) {
    return function () {
        const argu = arguments;
        if (throttleTimer) {
            // do nothing
        } else {
            throttleTimer = setTimeout(function () {
                throttleTimer = null;
                func.apply(this, argu);
            }, waitTime);
        }
    }
}