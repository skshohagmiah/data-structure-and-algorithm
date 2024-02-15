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


// quick sort algorithm

// function quickSort(arr){
//     console.log('inside function call')
//     if(arr.length <= 1){
//         return arr
//     }

//     let pivot = arr[0];
//     let left = [];
//     let right = [];

//     for(let i = 1; i<arr.length; i++){
//         console.log('inside the loop', i)
//         if(arr[i] > pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)]

// }

// console.log(quickSort([4,3,2,5,1,7,6]))


// merge sort algorithm

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftSlice = arr.slice(0, mid);
    let rightSlice = arr.slice(mid);

    let sortedLeft = mergeSort(leftSlice);
    let sortedRight = mergeSort(rightSlice);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right){
    mergeIndex++
    let result = []
    let leftIndex = 0;
    let rightIndex = 0;
    

    while(leftIndex < left.length && rightIndex < right.length ){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    while( leftIndex < left.length){
        result.push(left[leftIndex])
        leftIndex++
    }

    while(rightIndex < right.length){
        result.push(right[rightIndex])
        rightIndex++
    }

    return result
}

console.log(mergeSort([3,2,5,1,5,6,8,7]))