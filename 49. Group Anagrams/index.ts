function groupAnagrams(strs: string[]): string[][] {
  let res = {};

  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");

    if (!res[sortedStr]) {
      res[sortedStr] = [];
    }

    res[sortedStr].push(str);
  }

  return Object.values(res);
}
