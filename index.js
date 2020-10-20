const { 
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
} = require("./sorts");

const randomNumber = (min, max) => Math.floor((Math.random() * max - min) + min);

const generateRandomLengthNumberArray = (lengthOfNewArray, minimumNumber, maximumNumber) => {
  const newArray = [];
  for (let i = 0; i < lengthOfNewArray; i++) {
    newArray.push(randomNumber(minimumNumber, maximumNumber));
  }
  return newArray;
};

const SAMPLE_SIZES = [
  ["Ten", 10],
  ["Three Hundred", 300],
  ["One Thousand", 1000],
  ["Two Thousand", 2000],
  ["Five Thousand", 5000],
  ["Ten Thousand", 10000],
  ["Thirty Thousand", 30000],
  ["Fifty Thousand", 50000],
];

const benchmarkSortingFunction = (sortingFunction) => {

  const sortReports = SAMPLE_SIZES.map(([label, size]) => {
    const sample = generateRandomLengthNumberArray(size, 1, 100000);
    const start = Date.now();
    sortingFunction(sample);
    const end = Date.now();
    return `${label}: ${end - start}ms`;
  });

  return sortReports.join("\n");

};

console.log(benchmarkSortingFunction(sorts.quickSort));