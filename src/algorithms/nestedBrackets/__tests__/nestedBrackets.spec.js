import isNestedBracket from '../';
import scenarios from './scenarios';

describe('return bool if string has correctly nested brackets:', () => {
  scenarios.forEach(({ desc, value, result }) => {
    it(desc, () => {
      expect(isNestedBracket(value)).toEqual(result);
    });
  });
});
