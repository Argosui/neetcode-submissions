class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const arr = [];
        let counter = 0;
        

        for(let i = 0; i < strs.length; i++){

            let num;
            const ordenada = strs[i]
                .split("")
                .sort()
                .join("")
            
            if(map.has(ordenada)){
                num = map.get(ordenada)
            } else {
                
                num = counter;
                map.set(ordenada,num);
                counter++;
            }

            if(!arr[num]){
                arr[num] = [];
                
            }
            
            arr[num].push(strs[i]);
            
        }
        return arr;
    }
}
