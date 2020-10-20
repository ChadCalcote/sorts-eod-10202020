function swap(array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

function bubbleSort(array) {
  let swapped = false;

  while (!swapped) {
    swapped = true;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = false;
      }
    }
  }
  return array;
}

function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let min = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }

    if (min !== i) {
      swap(list, i, min);
    }
  }
  return list;
}


function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let value = list[i];
    let hole = i;

    while (hole > 0 && list[hole - 1] > value) {
      list[hole] = list[hole - 1];
      hole--;
    }

    list[hole] = value;
  }
  return list;
}

function merge(array1, array2) {
  let result = [];
  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }

  return [...result, ...array1, ...array2];
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();

  let left = array.filter((x) => x < pivot);
  let right = array.filter((x) => x >= pivot);

  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
}

module.exports = {
    bubbleSort: bubbleSort,
    quickSort: quickSort,
    selectionSort: selectionSort,
    mergeSort: mergeSort,
    insertionSort: insertionSort,
};
