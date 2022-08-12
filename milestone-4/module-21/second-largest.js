const theArray = [1,2,3,4,5,6,7,8,9];

function secondLargest(array) {
    let currentLargest = 0;
    let secondLargest = 0;
    for(let i=0; i<array.length; i++) {
        if(array[i] > currentLargest) {
            currentLargest = array[i];
        }
    }
    for(let j=0; j<array.length; j++) {
        if(array[j] > secondLargest) {
            if(array[j] === currentLargest) {
                continue;
            }
            secondLargest = array[j];
        }
    }
    return secondLargest;
}

console.log(secondLargest(theArray));