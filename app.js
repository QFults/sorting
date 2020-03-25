
let arr = [
  16, 82, 88, 37, 96, 2, 87, 7, 62, 74, 19, 55,
  33, 12, 38, 15, 34, 28, 63, 32, 27, 45, 4, 60,
  42, 67, 0, 9, 52, 90, 65, 58, 8, 59, 29, 14,
  77, 53, 31, 66, 49, 94, 70, 83, 44, 23, 72, 98,
  41, 43, 5, 81, 85, 30, 76, 56, 25, 35, 26, 54,
  10, 80, 17, 89, 61, 69, 93, 46, 64, 71, 91, 97,
  22, 13, 57, 40, 36, 18, 79, 68, 6, 78, 1, 50,
  86, 75, 51, 92, 11, 39, 95, 48, 21, 3, 47, 20,
  84, 24, 99, 73
]

const selectionSort = arr => {
  
  let min

  for (let i = 0; i < arr.length; i++) {
    min = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    if (i !== min) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }

  return arr
}

const insertionSort = arr => {

  let value, j

  for (let i = 0; i < arr.length; i++) {

    value = arr[i]

    for (j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j]
    }

    arr[j + 1] = value
  }

  return arr
}

const quickSort = arr => {
  if (arr.length < 2) {
    return arr
  }

  const pivot = arr[Math.floor(Math.random() * arr.length)]

  return [...quickSort(arr.filter(x => x <= pivot)), ...quickSort(arr.filter(x => x > pivot))]
}


arr.sort((a, b) => a - b)
