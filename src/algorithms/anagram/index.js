export const normalise = string =>
  string.toLowerCase().split('').sort().join('')
    .trim();

const isAnagram = (string1, string2) =>
  normalise(string1) === normalise(string2);

export default isAnagram;
