class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const map = new Map();

        for(let i = 0; i < nums.length; i++){
            let num1 = target - nums[i];
            if(map.has(num1)){
                let num2 = map.get(num1);
                return([num2, i]);
            }
            map.set(nums[i],i);
        }
    }
}
