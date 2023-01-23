function selectionSort(arr) {
  // type your code here
  let newArr = []
  let arr1 = [...arr]


  for (let j = 0; j < arr.length; j++) {

    let minNum = arr1[0]
    for (let i = 1; i < arr1.length; i++) {
      if (arr1[i] < minNum) {
        minNum = arr1[i]
      }
    }
    newArr.push(minNum)
    arr1.splice((arr1.indexOf(minNum)), 1)
  }

  return newArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [2, 4, 5, 7, 9, 10]");
  console.log("=>", selectionSort([5, 7, 9, 2, 10, 4]));

  console.log("");

  console.log("Expecting: [-32, -27, -2, 0, 2, 4, 5, 7, 9, 10]");
  console.log("=>", selectionSort([5, 7, 9, 2, 10, 4, 45, -32, 0, -2, -27]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 1000; ++i) {
    longInput.push(Math.random());
  }
  let startTime = Date.now()
  console.log(startTime)

  for (let i = 0; i < 10000; i++) {
    selectionSort([5, 2, 9])
    selectionSort(longInput)
  }

  const avgTime = (Date.now() - startTime) / 2000;

  console.log(avgTime);
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Rewrite a given array from smallest number to largest number

// Initialize an empty array to find the smallest value
// Pull that value off of the array and push it to the empty array
// Repeat until the initial array is empty
// return the new array