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

        if(!hashMap.has(remain)){
          hashMap.set(nums[i], i);
        }else{

          let res =  [i,hashMap.get(remain)]

          return res;
        }
      }
    }
}
//Time: o(n) , Space: O(n)