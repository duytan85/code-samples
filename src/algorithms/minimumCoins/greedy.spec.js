import greedy from './greedy';
import scenarios from './greedy-scenarios';

describe('greedy algorithm: ', () => {
  scenarios.forEach(({
    desc, coinList, change, result
  }) => {
    it(desc, () => {
      expect(greedy(coinList, change)).toEqual(result);
    });
  });
});
