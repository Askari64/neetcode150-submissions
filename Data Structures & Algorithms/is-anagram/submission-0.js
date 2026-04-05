class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /* LOGIC
        1. We compare length of both strings. If not equal, return false.
        2. we create maps for each string.
        3. we iterate over both string and do frequency mapping.
        4. we loop over map 1 and check if key's value is not equal to key's value in map 2.
        if true, we return false, if false, we let loop finish and return true.
         */

        if (s.length !== t.length) /* not anagram */ {
            return false
        }

        const mapS = {}
        const mapT = {}

        // make frequency map
        for (let i = 0; i < s.length; i++) {
            mapS[s[i]] = (mapS[s[i]] || 0 ) + 1
            mapT[t[i]] = (mapT[t[i]] || 0) + 1
        }

        // compare
        for (let key in mapS) {
            if (mapS[key] !== mapT[key]) {
                return false
            }
        }
        return true
    }
}
