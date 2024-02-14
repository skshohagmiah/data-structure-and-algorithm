// sorting algorithm

// bubble sort

// function bubbleSort(arr){
//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i; j++){
//             if(arr[j] > arr[j + 1]){
//                 [arr[j], arr[j + 1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([3,2,1,4,7,5,6]))



// selection sort algorithm

// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let min  = i;
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[min]){
//                 min = j
//             }
//         }
        
//         if(arr[min] < arr[i]){
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
//         }

//     }
//     return arr
// }

// console.log(selectionSort([3,2,4,1,5,7,5,8]))


// insertion sort algorithm

// function insertionSort(arr){
//     for(let i = 1; i<arr.length; i++){
//         let current = arr[i];
//         let j = i-1


//         while(j >= 0 && arr[j] > current){
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j + 1] = current
//     }

//     return arr
// }

// console.log(insertionSort([3,2,5,1,6,4]))