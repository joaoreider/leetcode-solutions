
# My solution
class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = 1
        arrResult = []
        copyNums = nums[:]

        for i in range(len(nums)):
            temp = copyNums.pop(i)
            for j in copyNums:
                result *=j
            arrResult.append(result)
            copyNums.insert(i, temp)
            result = 1

        return arrResult

# Best solution (O (n)). There is a solution in  o(1)

class Solution(object):
    def productExceptSelf(self, nums):
        res = [1] * (len(nums))
        prefix = 1
        for i in range(len(nums)):
            res[i] = prefix 
            prefix *= nums[i]
        postfix = 1
        for i in range(len(nums)-1, -1, -1):
            res[i] *= postfix 
            postfix  *= nums[i] 

        return res