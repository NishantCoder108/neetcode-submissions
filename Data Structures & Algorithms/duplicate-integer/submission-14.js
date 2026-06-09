class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

      //By hash
      let hash = {};

      for (let i=0; i< nums.length;i++){
        //Here, we can use proper name conventions
        let ele = nums[i];
        let hashEle = hash[ele];
        if(hashEle === undefined) hash[ele] = 1;
        else return true;
      }

      return false;
    }
}

// T = O(N) , S = O(N)
// Not in hash -> store inside
// IF in hash -> return its have duplicate