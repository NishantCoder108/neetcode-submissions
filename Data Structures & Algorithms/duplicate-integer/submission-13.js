class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

      //By hash
      let hash = {};

      for (let i=0; i< nums.length;i++){
        if(hash[nums[i]] === undefined) hash[nums[i]] = 1;
        else return true;
      }

      return false;
    }
}

// T = O(N) , S = O(N)
// Not in hash -> store inside
// IF in hash -> return its have duplicate