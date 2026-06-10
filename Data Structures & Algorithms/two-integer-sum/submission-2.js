class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let hashMap = new Map();

      for(let i=0; i< nums.length; i++){
        const remain = target - nums[i];

        if(hashMap.has(remain)) return [i,hashMap.get(remain)];
          
         hashMap.set(nums[i], i);
      }

      return []
    }
}
//Time: o(n) , Space: O(n)