from collections import defaultdict
from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)

        for s in strs:
            count = [0]*26

            for c in s:
                count[ord(c)-ord("a")] += 1
            res[tuple(count)].append(s)
        print(res)
        return res.values()
    
strs = [""]
strs1 = ["act","pots","tops","cat","stop","hat"]
strs2 = ["x"]

result = Solution().groupAnagrams(strs=strs1)
print(result)

