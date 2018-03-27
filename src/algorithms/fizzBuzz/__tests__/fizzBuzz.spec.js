import fizzBuzz from '../';
import scenarios from './scenarios';

describe('output "fizz", "buzz" and "fizzBuzz" in array: ', () => {
  scenarios.forEach(({
    desc, length, value1, value2, result
  }) => {
    it(desc, () => {
      expect(fizzBuzz(length, value1, value2)).toEqual(result);
    });
  });
});
