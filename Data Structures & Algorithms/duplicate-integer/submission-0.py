class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        #logic
        # set does not take duplicates. we see if value is in set
        # if no, we add it in set, if yes, we found the duplciate
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False