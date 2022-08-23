const firstArray = [32, 54, 63, 65, 23];
const secondArray = [98, 78, 56, 34, 25];

const maxNum = (arr1, arr2) => {
    const combinedArray = [...arr1, ...arr2];
    return Math.max(...combinedArray);
}

console.log(maxNum(firstArray, secondArray))