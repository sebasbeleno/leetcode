# 49. Group Anagram

The aproach for this problem is to map each word of the given array.

First, we create a map response, which will store the anagrams.

For each word, we sort the word and check if the sorted word is in the map.

If it is, we add the word to the list of anagrams. Otherwise, we create a new list with the word.

Finally, we return the values of the map.
