from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # create a map to store the frequency of each item
        # go through the array and increase the count of the number if it is in the map
        # sort the map values and return the k values from the top

        frequencyMap = {}
        for num in nums:
            frequencyMap[num] = frequencyMap[num] + 1 if num in frequencyMap else 1
        

        sorted_frequencyMap_values = sorted(frequencyMap.values(), reverse=True)
        result_values = sorted_frequencyMap_values[:k]
        result = [key for key, value in frequencyMap.items() if value in result_values]
        return result
    
nums = [1,2,2,3,3,3]
k = 2

result = Solution().topKFrequent(nums, k)
print(result)