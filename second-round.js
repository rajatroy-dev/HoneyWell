/**
Given an Array A and a number N, find the pair of numbers in Array
whose sum is equal to N. Example: A - [ 1, 5, 2, 6, 8, 9, 10 ] N - 7
Output - [1, 6], [5, 2], [2, 5], [6, 1]
*/

let array = [1, 5, 2, 6, 8, 9, 10];
let n = 7;

for (let i = 0; i < array.length; i++) {
    if (array[i] < n) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < n && array[i] + array[j] === n) {
                console.log("[", array[i], ",", array[j], "], ");
            }
        }
    }
}