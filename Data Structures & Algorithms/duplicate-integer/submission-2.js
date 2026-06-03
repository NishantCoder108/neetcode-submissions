class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
     
     let hash = {};

     for (let i=0; i< nums.length; i++){
        if (hash[nums[i]] !== undefined){
            hash[nums[i]] += 1;
        }else{
            hash[nums[i]] = 0;
        }
     }

     console.log("Hash:", hash);

     for (let i=0; i<nums.length; i++) {
        if (hash[nums[i]] > 0 ){
            return true;
        }
     }

     return false;
    }

}
