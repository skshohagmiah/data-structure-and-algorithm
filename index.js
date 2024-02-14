// problem 1 : zero sum broblem

// function zeroSumSolutionOne(arr) {
//   for (let num of arr) {
//     for (let j = 1; j < arr.length; j++) {
//       const element = arr[j];
//       if (element + num === 0) {
//         return [element, num];
//       }
//     }
//   }
// }

// console.log(zeroSumSolutionOne([-6, -4, -3.1, 2, 3, 4, 5]));

// function zeroSumSolutionTwo(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while(left < right){
//         let sum = arr[left] + arr[right]
//         if(sum === 0){
//             return [arr[left], arr[right]]
//         }else if(sum > 0){
//             right--
//         }else{
//             left++
//         }
//     }
// }

// console.log(zeroSumSolutionTwo([-6, -4, -3, 1, 2, 3, 4, 5]))

// problem 2 : find string anagram

// function findAnagram(str,anagram){

//     if(str.length !== anagram.length) return 'not valid anagram';

//     const counts = {};

//     for (const alp of str) {
//         if(counts[alp]){
//             counts[alp]  = counts[alp] + 1;
//         }else{
//             counts[alp] = 1
//         }
//     }

//     for (const item of anagram) {
//         if(counts[item] === 0) return 'not anagram';
//         if (counts[item]){
//             counts[item] = counts[item] - 1;
//         }
//     }

//     return 'it is anagram'

// }

// console.log(findAnagram('hello','llleh'))

// problem 3 : counting unique number

// function countUniqueNumber(arr){
//     const uniqueArr = [];
//     for (const num of arr) {
//         if(!uniqueArr.includes(num)){
//             uniqueArr.push(num)
//         }
//     }

//     return uniqueArr
// }

// console.log(countUniqueNumber([1,1,2,3,3,4,4,54,5,6,7,87,8,89,6,5,]))

// solutions two for problem 3

// function countUniqueNumber(arr){
//     let i = -1
//     let uniqueArr = [];
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[i] !== arr[j]){
//             i = j
//             uniqueArr.push(arr[i])
//         }

//     }

//     return uniqueArr
// }

// console.log(countUniqueNumber([1,2,3,4,5,5,5,6,7,8,8,]))

// problem 4 : find largest consecutive sum by 4

// function largestConsecutiveSum(arr, num){

//     let max = 0;

//     for(let i = 0; i< arr.length; i++){
//         if((i + 4) > arr.length) return max
//         const slice = arr.slice(i,i+num).reduce((accu,item) => accu + item)
//         console.log(slice, 'iteration', i)
//         if(slice > max){
//             max = slice
//         }
//     }

// }

// console.log(largestConsecutiveSum([1,2,4,4,6,6,8,3,5,5,6,3,7,8,2,4],4))

// problem 5 : binary Search

// function iteratibBinarySearch(arr,target){
//     let left = 0;
//     let right = arr.length -1;

//     while(left <= right){
//         let mid = Math.floor((left + right) / 2);

//         if(arr[mid] === target){
//             return mid;
//         }else if(target > arr[mid]){
//             left = mid
//         }else{
//             right = mid
//         }
//     }
// }

// console.log(iteratibBinarySearch([1,3,5,6,7,8,9,23,34,35,67],7));

// function recursiveBinarySearch(arr, target) {
//   const mid = Math.floor(arr.length / 2);

//   if (arr[mid] === target) {
//     return mid;
//   } else if (target > arr[mid]) {
//     return mid + recursiveBinarySearch(arr.slice(mid), target);
//   } else {
//     return recursiveBinarySearch(arr.slice(0, mid), target);
//   }
// }

// console.log(recursiveBinarySearch([1, 3, 5, 6, 7, 8, 9, 23, 34, 35, 67], 3));



// problem 6 : sort array recursively

// let newArr = []

// function chechSorted(arr){
//     for(let i = 0; i< arr.length; i++ ){
//         if(arr[i] > arr[i + 1]){
//             return false
//         }
//     }
//     return true
// }

// function sortRecursively(arr){


//     if(chechSorted(arr)){
//         newArr = arr
//         return 
//     }

//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] < arr[i + 1]){
//             i++
//         }else if(arr[i] > arr[i + 1]){
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];;
//             i = 0
//             sortRecursively(arr)
//         }
//     }

// }

// sortRecursively([2,3,1,4,5,4])
// console.log(newArr)



// problem 7 : find the maximum occuring charecter in a 

// function findMaximumCharacter(str){
//     const counts = {};
//     let max = 0
//     let charecter = ''

//     str.split('').forEach(element => {
//         if(counts[element]){
//             counts[element] = counts[element] + 1
//         }else{
//             counts[element] = 1
//         }
//     });

//     for (const key in counts) {
//         if(counts[key] > max){
//             max = counts[key]
//             charecter = key
//            }
//     }

//     return charecter
// }

// console.log(findMaximumCharacter('hello worldddd'))


// Longest Substring Without Repeating Characters 

function findLongestSubstring(str){
    let start = 0;
    let end = 0 ;
    let maxCharecter = 0;

    const uniqueSet = new Set();

    while(end < str.length){
        if(!uniqueSet.has(str[end])){
            uniqueSet.add(str[end])
            end++
            maxCharecter = Math.max(maxCharecter,uniqueSet.size)
        }else{
            uniqueSet.delete(str[start])
            start++
        }
    }

    console.log(end - start)
    return maxCharecter;
}

console.log(findLongestSubstring('abcabcbbe'))