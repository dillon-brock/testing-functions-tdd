// IMPORT MODULES under test here:
import {
    add,
    subtract,
    convertToSeconds,
    triangleArea,
    sumLessThan100,
    oddOrEven,
    rockPaperScissors,
    formatName,
    petObject
} from './functions.js';

const test = QUnit.test;

/* 
    Write a function that takes in two numbers
    and returns their sum (add)

    2, 5 --> 7

    Uses: Math operator
*/

test('adds two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 2;
    const y = 5;
    const expected = 7;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

/* 
    Write a function that takes in two numbers
    and returns their difference (subtract)

    12, 8 --> 4

    Uses: Math operator
*/

test('subtracts two numbers', (expect) => {

    const a = 12;
    const b = 8;
    const expected = 4;

    const actual = subtract(a, b);

    expect.equal(actual, expected);
});

/* 
    Write a function that takes in number of minutes
    and returns the number of seconds

    10 --> 600

    Uses: Math operator(s)
*/

test('converts minutes to seconds', (expect) => {

    const minutes = 10;
    const expected = 600;

    const actual = convertToSeconds(minutes);

    expect.equal(actual, expected);
});

/* 
    Write a function that takes in the base and height
    of a triangle and returns its area (google it)

    5, 10 --> 25

    Uses: Math operator(s)
*/

test('finds area of a triangle', (expect) => {

    const b = 10;
    const h = 5;
    const expected = 25;

    const actual = triangleArea(b, h);

    expect.equal(actual, expected);
});

/* 
    Write a function that takes in two 2 numbers
    and returns true if their sum is less than 100 or 
    false if it is greater than 100
    (feel free to use your add function from this function!)

    25, 13 --> true
    88, 60 --> false

    Uses: Comparison operator(s), if/else control flow
*/

test ('finds if sum of two numbers is less than 100', (expect) => {

    const trueNum1 = 25;
    const trueNum2 = 13;
    const expectedTrue = true;

    const actualTrue = sumLessThan100(trueNum1, trueNum2);

    expect.equal(actualTrue, expectedTrue);

    const falseNum1 = 88;
    const falseNum2 = 60;
    const expectedFalse = false;

    const actualFalse = sumLessThan100(falseNum1, falseNum2);

    expect.equal(expectedFalse, actualFalse);
});

/* 
    Write a function that takes a number and
    and returns 'even' if number is even, otherwise 'odd'.

    3 --> 'odd'
    6 --> 'even'

    Uses: modulo operator (remainder), comparison operator, if/else control flow
*/

test('finds if a number is odd or even', (expect) => {

    const oddNum = 3;
    const expectedOdd = 'odd';

    const actualOdd = oddOrEven(oddNum);

    expect.equal(expectedOdd, actualOdd);

    const evenNum = 6;
    const expectedEven = 'even';

    const actualEven = oddOrEven(evenNum);

    expect.equal(expectedEven, actualEven);
});

/* 
    Write a function that takes two rock-paper-scissors throws
    and returns 'player 1' if first throw wins, 
    'player 2' if second throw wins, otherwise 'draw'.

    'rock', 'scissors' --> 'player 1'
    'rock', 'paper' --> 'player 2'
    'rock', 'rock' --> 'draw'
    
    Test all possible cases, but you can combine into tests like
    'player 1 wins', 'player 2 wins', 'players draw'

    Uses: comparison operator, if/else control flow
*/

test('player 1 wins', (expect) => {
    expect.equal(rockPaperScissors('rock', 'scissors'), 'player 1');
    expect.equal(rockPaperScissors('paper', 'rock'), 'player 1');
    expect.equal(rockPaperScissors('scissors', 'paper'), 'player 1');
});

test('player 2 wins', (expect) => {
    expect.equal(rockPaperScissors('rock', 'paper'), 'player 2');
    expect.equal(rockPaperScissors('paper', 'scissors'), 'player 2');
    expect.equal(rockPaperScissors('scissors', 'rock'), 'player 2');
});

test('players draw', (expect) => {
    expect.equal(rockPaperScissors('rock', 'rock'), 'draw');
    expect.equal(rockPaperScissors('paper', 'paper'), 'draw');
    expect.equal(rockPaperScissors('scissors', 'scissors'), 'draw');
});

/* 
    Write a function that takes in a first, last, and a third optional
    middle name parameter and returns a correctly formatted name

    'Ruth', 'Ginsburg' --> 'Ruth Ginsburg'
    'Ruth', 'Ginsburg', 'Bader' --> 'Ruth Bader Ginsburg'

    Uses: let variable with reassignment, string concatenation, 
    existence comparison operator, if control flow
*/

test('formats a name', (expect) => {
    
    expect.equal(formatName('Ruth', 'Ginsburg'), 'Ruth Ginsburg');
    expect.equal(formatName('Ruth', 'Ginsburg', 'Bader'), 'Ruth Bader Ginsburg');
    expect.equal(formatName(27, 'Ginsburg'), 'invalid name');
    expect.equal(formatName('Ruth', 'Ginsburg', 42), 'invalid name');
});

/* 
    Write a function that takes a name, type, age, food, and a toys array
    and returns an object like:

    {
        name: 'felix',
        type: 'cat',
        age: 6,
        food: 'tuna',
        toys: ['feather chaser', 'laser pointer', 'ball of yarn']
    }

    Uses: object literal syntax, deepEqual assertion
*/

test('object factory function', (expect) => {

    expect.deepEqual(petObject('felix', 'cat', 6, 'tuna', ['feather chaser', 'laser pointer', 'ball of yarn']), { name: 'felix', type: 'cat', age: 6, food: 'tuna', toys: ['feather chaser', 'laser pointer', 'ball of yarn'] });

});

/*
    Write a function that takes a number
    and returns the total of all counting numbers from 1 to the supplied number

    4 --> 10 (1 + 2 + 3 + 4)

    Uses: let variable with reassignment, math operator, for...i loop
*/

/*
    Write a function that takes name of three pets
    and returns an array of those names

    'felix', 'fido', 'alex' --> ['felix', 'fido', 'alex']

    Uses: array literal syntax, deepEqual assertion 
*/

/*
    Write a function that takes an array of pet types ('cat', 'dog', 'bird')
    and returns the count of cats

    ['cat', 'dog', 'bird', 'cat', 'cat'] --> 3

    Uses: let variable with reassignment, math operator, for...of loop
*/

/*
    BONUS: Write a function that takes an array of pet types ('cat', 'dog', 'bird')
    and the pet type to count and returns the count of that type

    ['cat', 'dog', 'bird', 'cat', 'cat'], 'cat' --> 3
    ['cat', 'dog', 'bird', 'cat', 'cat'], 'bird' --> 1

    Uses: let variable with reassignment, math operator, for...of loop, if control flow
*/

/*
    Write a function takes in a month as input (represented as a 
    number between 1 and 12) and returns the number of days in that month. 
    For now, assume there are always 28 days in Feb.
    
    1 --> 31
    2 --> 28
    4 --> 30

    Uses: if/else control flow

    Bonus 1: Check the value of the number passed into the function and
    print a message to the user if the value is not between 1 and 12
    
    Bonus 2: Update the function to accept an optional parameter year
    that checks if the year is a leap year, and returns the correct
    number of days for Feb. The default value for the year should be
    the current year
*/
