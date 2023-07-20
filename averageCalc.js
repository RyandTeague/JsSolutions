// Define a function that takes an array of numbers: 'nums' and calculates the average
var calculateAverage = (nums) => {
    // Initialize a variable `total` to 0. This variable will store the sum of all the numbers in the array.
    let total = 0;
    // Iterate through each number in the array and add them to the total
    for ( let i = 0; i < nums.length; i++) {
        total += nums[i]
    }
    // after loop finishes divide the total by the number of numbers to get the
    return total / nums.length
}

module.exports = calculateAverage