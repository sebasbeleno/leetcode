from heapq import heappop, heapify, heappush

class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        freq = {}

        for num in nums:
            freq[num]= 1 + freq.get(num, 0)


        heap = []

        for num in freq:
            frequency = freq[num]
            heappush(heap, [frequency * -1, num])


        ans = []

        for i in range(k):
            ans.append(heappop(heap)[1])

        return ans
