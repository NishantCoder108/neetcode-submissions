class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
     
     const Alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321";

     let lIdx = 0;
     let rIdx = s.length - 1;

     while (lIdx < rIdx){
         
         const iSleftEle = Alphanumeric.includes(s[lIdx]);
         const isRightEle = Alphanumeric.includes(s[rIdx]);

         if(iSleftEle && isRightEle  && s[lIdx].toLowerCase() !== s[rIdx].toLowerCase()) return false;
         else if(iSleftEle && isRightEle  && s[lIdx].toLowerCase() === s[rIdx].toLowerCase()) {
            lIdx++;
            rIdx--;
         }
         else if(!iSleftEle) lIdx++;
         else rIdx--;
     }

     return true;
  
    }
}
/*

- Use two pointer approach
- We can move from left and right and try to move towards to center
- and check every left and right is match and make sure that is alphanumeric if not 
- we can move left and right accordingly

*/