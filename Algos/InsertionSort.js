insertionSort=arr=>{
    for(let i =1; i<arr.length; i++){
        let j = i - 1;
        let value = arr[i]
        while(j >= 0 && arr[j]> value){
            arr[j+1] = arr[j];
            arr[j] = value;
            j--;
        }
    }
    return arr
}
console.log(insertionSort([3,6,4,1,6,1,4,7,9]))

// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
// Array: Insertion Sort


// visualization with playing cards (scroll down):
// https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort

// array / bar visualization:
// https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/


// insertionSort(arr){}


//  - efficient for small data sets
//  - constant memory / space O(1)

// Time Complexity
//   - Best: n when array is already sorted
//   - Average: O(n^2)
//   - Worst: O(n^2) when the array is reverse sorted


// this sort splits the array into two portions (conceptually, not literally)
//
// the left portion will become sorted
// the right portion (that hasn't been iterated over yet) is unsorted

// can shift or swap target element until it reaches desired position
// shifting steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   3. store current item in a temp var (to make this position availale to shift items)
//   4. if item to the left of current is greater than current item,
//      shift the left item to the right
//   5. repeat step 4 as many times as needed
//   6. insert current item
//   7. move to the next item and repeat

//   // swap steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   4. if item to left of current item is less than current, swap
//   5. repeat step 4 until item to left is less than current item
//   6. move to next item and repeat

function insertionSort(arr){
    for(var i=1; i<arr.length; i++){

        // save the current element
        var temp = arr[i];
        // save the previous index
        var j = i - 1;

        while(j >= 0 && arr[j] > temp){
            // shift to the right because it's greater than the item we're holding
            arr[j + 1] = arr[j];
            j--;
        }

        // while loop completes, move the temp into the proper location
        arr[j + 1] = temp;
    }
    return arr;
}



function insertionSortDestructuredSwap(arr){
    for (let i = 1; i < arr.length; i++){
        let targetIdx = i;
        let comparisonIdx = i - 1;

        while(comparisonIdx >= 0 && arr[comparisonIdx] > arr[targetIdx]){
            [arr[comparisonIdx], arr[targetIdx]] = [arr[targetIdx], arr[comparisonIdx]];

            targetIdx = comparisonIdx;
            comparisonIdx--;
        }

        return arr;
    }
}



let example = [9, 7, 4, 2, 1, 8, 44, 3];

console.log(insertionSort(example));
console.log(insertionSortDestructuredSwap(example));