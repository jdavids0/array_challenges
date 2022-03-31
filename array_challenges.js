// 1. Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

var appetite = [3.14, "food", "pie", true, "food"]

function alwaysHungry(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        // initially got "yummy", "yummy", undefined - 
        if (arr[i] == 'food') {
            console.log('yummy');
        }
    }
}

console.log(alwaysHungry(appetite));

var appetite2 = [4, 1, "food", 5, 7, 2, "food"];

function alwaysHungry(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] == 'food') {
            console.log('yummy');
        }

    } return "I'm hungry"
}

console.log(alwaysHungry(appetite2));


/* alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry" */

// 2. Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// 3. Given an array of numbers return a count of how many of the numbers are larger than the average.

var array = [6, 8, 3, 10, -2, 5, 9]

function betterThanAverage(arr) {
    var sum = 0;
    var avg = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        // for loop that iterates through all array values
        sum += arr[i];
        /* console.log(sum); */
        // adds all arr[i] to create sum of array values
        /* console.log(avg); */
        avg = sum / arr.length;
    }
    for (var i = 0; i < arr.length; i++) {

       
         if (arr[i] > avg) {
/*             console.log('inside if');
 */            count++;
        }
    }
        return count;
    }

    var result = betterThanAverage(array)
    console.log(result);
    /* console.log(result); we expect back 4 */

    // 4. Write a function that will reverse the values an array and return them - so you need to swap the elements until you reach the middle

    var arr = ["a", "b", "c", "d", "e"]

    function reverse(arr) {
        var start = 0;
        var end = arr.length - 1;
        // store the first index at 0 and the the last index using array.length -1
        while (start < end) {
            // create a while loop that runs as long as start < end
            var temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            // use a temp variable to temporarily store one of the values as you swap them
            start++;
            end--;
            // increment start and decrement end until start >= end, so loop will stop when there are no more elements to reverse
        }
    }

    reverse(arr);
    console.log(arr);


    // 5. Fibonacci numbers have been studied for years and appear often in nature. Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

    // Had to look @ solutions for this one

    function fibonacciArray(n) {
        // the [0, 1] are the starting values of the array to calculate the rest from
        var fibArr = [0, 1];
        while(fibArr.length > n) {
            // while fibArr.length is greater than the given value
            var prev = fibArr[fibArr.length-1];
            var prevprev = fibArr[fibArr.length-2];
            fibArr.push(prev + prevprev);
            // so you're running through loop while arr.length > 10, add the last 2 array index positions together
        }
        // your code here
        return fibArr;
    }

    var result = fibonacciArray(10);
    console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
