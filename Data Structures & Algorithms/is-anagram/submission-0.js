class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        let result = true;
        //const p = new Map();

        for (let i = 0; i < s.length ; i++){

            if(map.has(s[i])){
                map.set(s[i],map.get(s[i])+ 1);
            } else {
                map.set(s[i],1);
            }
        }

        for (let j = 0; j < t.length; j++){

            if(!map.has(t[j])){
                return false;
            }

            if(map.has(t[j])){
                map.set(t[j],map.get(t[j]) - 1);
                if(map.get(t[j]) == 0){
                    map.delete(t[j]);
                }
            }

            
        }

        if (map.size > 0){
            result = false;
        }
        
        return result;
        
    }
}
