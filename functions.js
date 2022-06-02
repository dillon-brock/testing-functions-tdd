
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

export function petObject(name, type, age, food, toys) {
    return {
        name,
        type,
        age,
        food,
        toys
    };
}

export function factorial(num) {

    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

export function listPets(name1, name2, name3) {

    return [name1, name2, name3];

}

export function countCats(arr) {

    let cats = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'cat') {
            cats++;
        }
    }

    return cats;
}

export function countPetType(arr, petType) {

    let count = 0;

    for (const element of arr) {
        if (element === petType) {
            count++;
        }
    }

    return count;

}