class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        #check both are same length
        if len(s) != len(t):
            return False

        #maps using dicts 
        mapS = {}
        mapT = {}

        # create frequency map
        for i in range(len(s)):
            mapS[s[i]] = mapS.get(s[i], 0) + 1
            mapT[t[i]] = mapT.get(t[i], 0) + 1

        # compare
        for key in mapS:
            if mapS[key] != mapT.get(key):
                return False
        
        return True
