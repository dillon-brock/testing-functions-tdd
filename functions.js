
export function add(x, y) {
    return x + y;
}

export function subtract(a, b) {
    return a - b;
}

export function convertToSeconds(minutes) {
    return minutes * 60;
}

export function triangleArea(b, h) {
    return 0.5 * b * h;
}

export function sumLessThan100(a, b) {
    return add(a, b) < 100;
}

export function oddOrEven(num) {
    return num % 2 === 0 ? 'even' : 'odd';
}