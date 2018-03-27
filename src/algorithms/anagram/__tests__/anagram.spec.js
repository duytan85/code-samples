import isAnagram, { normalise } from '../';
import { normaliseScenarios, isAnagramScenarios } from './scenarios';

describe('normalise and return a given string:', () => {
  normaliseScenarios.forEach(({ desc, value, result }) => {
    it(desc, () => {
      expect(normalise(value)).toEqual(result);
    });
  });
});

describe('check if two given strings are anagrams:', () => {
  isAnagramScenarios.forEach(({
    desc, value1, value2, result
  }) => {
    it(desc, () => {
      expect(isAnagram(value1, value2)).toEqual(result);
    });
  });
});
