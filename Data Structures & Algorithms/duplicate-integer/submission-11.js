class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        nums.sort((a,b) => a-b); //logn

        for (let i=1; i<nums.length; i++){ //n

            if(nums[i - 1] === nums[i]) return true;
        }

        return false;
    }
}
//we can do this as well - 
// T = O(nlogn) , S = O(1)
