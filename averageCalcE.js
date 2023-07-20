
  var calculateAverage = (nums) => {
    // Check if collection is empty 
    if (nums.length === 0) {
        return 'Please provide a non-empty collection of numbers.';
      }
    // Initialize a variable `total` to 0. This variable will store the sum of all the numbers in the array.
    let total = 0;
    // Iterate through each number in the array and add them to the total
    for ( let i = 0; i < nums.length; i++) {
        // Check each element to make sure there are only numbers in collection
        if (typeof nums[i] !== 'number') {
            throw new Error('Array should only contain numbers.');
          }
        total += nums[i]
    }
    // after loop finishes divide the total by the number of numbers to get the
    return total / nums.length
}
