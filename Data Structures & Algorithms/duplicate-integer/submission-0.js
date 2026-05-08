class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const number = new Map();

        for(let i = 0; i < nums.length; i++){

            if(number.has(nums[i])){
                return true;
            }

            number.set(nums[i],true);
        }
        return false;
    }
}
