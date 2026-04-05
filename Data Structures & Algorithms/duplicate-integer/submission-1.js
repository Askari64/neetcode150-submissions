class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /*
        1. Iterate over nums array
        2. Check if num in set. Yes ? duplicate found : add in set
        3. return true/false
         */

        let seen = new Set() // Created set seen
        for ( let num of nums) {
            if (seen.has(num)) {
                return true
            }
            seen.add(num)
        }
        return false
    }
}
