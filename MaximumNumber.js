function findMaximumNumber(nums) {
    let maxnum = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > maxnum){
            maxnum = nums[i];
        }
    }
    return maxnum;
}

// console.log(findMaximumNumber([5, 1, 9, 3]));