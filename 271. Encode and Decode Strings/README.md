# [Encode and Decode Strings](https://leetcode.com/problems/encode-and-decode-strings/)

The aproach for the encode function is to iterate over the list of strings and for each string we add the length of the string followed by a '#' and then the string itself.

The decode function is a bit more complex. We will use the sliding window technique to iterate over the string and extract the length of the string. We will then use the length to extract the string itself and add it to the result list.