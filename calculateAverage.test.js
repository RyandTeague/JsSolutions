// Import the function to be tested
const calculateAverage = require('./averageCalc.js');

// Test case 1: Calculate average of an collection with positive numbers
test('Calculates average of an collection with positive numbers', () => {
    const nums = ([2, 4, 6, 8, 10]);
    const expectedAverage = 6;

    const result = calculateAverage(nums);

    expect(result).toBe(expectedAverage);
});

// Test case 2: Calculate average of an collection with negative numbers
test('Calculates average of an collection with negative numbers', () => {
    const nums = ([-5, -3, -1, 1, 3, 5]);
    const expectedAverage = 0;

    const result = calculateAverage(nums);

    expect(result).toBe(expectedAverage);
});

// Test case 3: Calculate average of an empty collection
test('Calculates average of an empty collection', () => {
    const nums = ('');
    const expectedAverage = NaN;

    const result = calculateAverage(nums);

    expect(result).toBe(expectedAverage);
});

// Test case 4: Calculates average of an collection containing non-numbers
test('Calculates average of an collection containing non-numbers', () => {
    const nums = ('carrots','tomatoes','apples');
    const expectedAverage = NaN;

    const result = calculateAverage(nums);

    expect(result).toBe(expectedAverage);
});