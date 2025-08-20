function removeDuplicates(arr) {
    let seen = new Set();
    let idx = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!seen.has(arr[i])) {
            seen.add(arr[i]);
            arr[idx] = arr[i];
            idx++;
        }
    }

    
    return arr.slice(0, idx);
}

const arr = [1, 2, 2, 3, 4, 4, 5];
const newArr = removeDuplicates(arr);

console.log(newArr); 