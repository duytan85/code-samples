import listDiff from '../';
import scenarios from './scenarios';

describe('should return a new list from list A if preset in list B: ', () => {
  scenarios.forEach(({
    desc, value1, value2, result
  }) => {
    it(desc, () => {
      expect(listDiff(value1, value2)).toEqual(result);
    });
  });
});
