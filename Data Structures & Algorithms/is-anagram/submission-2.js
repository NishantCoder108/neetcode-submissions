class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //check both len -> No-> false
        //create map and store every char -> 
        if (s.length !== t.length)return false;

        let sMap = new Map();
        let tMap = new Map();

        for (let i=0; i < s.length; i++){
            let sEle = s[i];
            let tEle = t[i];

            if(!sMap.has(s[i])){
                sMap.set(sEle, 1);
            }else{
                sMap.set(sEle, sMap.get(sEle) + 1);
            }

            if(!tMap.has(t[i])){
                tMap.set(tEle,1)
            }else{
                tMap.set(tEle, tMap.get(tEle) + 1);
            }
        }

        //compare with other one

        for (let [sKey, sValue] of sMap){
            if(tMap.get(sKey) !== sValue) return false;
        }

        return true;
    }
}


//