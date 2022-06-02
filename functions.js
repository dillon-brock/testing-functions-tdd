
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
    return a + b < 100;
}

export function oddOrEven(num) {
    return num % 2 === 0 ? 'even' : 'odd';
}

export function rockPaperScissors(throw1, throw2) {
    let winner = '';
    if (throw1 === throw2) {
        winner = 'draw';
    }
    else {
        switch (throw1) {
            case 'rock':
                switch (throw2) {
                    case 'paper':
                        winner = 'player 2';
                        break;
                    case 'scissors':
                        winner = 'player 1';
                        break;
                }
                break;
            case 'paper':
                switch (throw2) {
                    case 'rock':
                        winner = 'player 1';
                        break;
                    case 'scissors':
                        winner = 'player 2';
                        break;
                }
                break;
            case 'scissors':
                switch (throw2) {
                    case 'rock':
                        winner = 'player 2';
                        break;
                    case 'paper':
                        winner = 'player 1';
                        break;
                }
                break;
        }
    }
    return winner;
}

export function formatName(first, last, middle = '') {

    if (typeof first === 'string' && typeof last === 'string' && typeof middle === 'string') {
        if (middle) {
            return `${first} ${middle} ${last}`;
        }
        else {
            return `${first} ${last}`;
        }
    }
    else {
        return 'invalid name';
    }
}