export default [
  {
    desc: '0 change provided. should return 0 coins',
    coinList: [1, 2, 5, 10, 20, 50, 100, 200],
    change: 0,
    result: 0
  },
  {
    desc: 'undefined change provided. should return 0 coins',
    coinList: [1, 2, 5, 10, 20, 50, 100, 200],
    change: undefined,
    result: 0
  },
  {
    desc: 'no coin list provided. should return 0 coins',
    coinList: [],
    change: 50,
    result: 0
  },
  {
    desc: 'undefined coin list provided. should return 0 coins',
    coinList: undefined,
    change: 50,
    result: 0
  },
  // {
  //   desc: '50p change should return 1 coin',
  //   coinList: [1, 2, 5, 10, 20, 50, 100, 200],
  //   change: 50,
  //   result: 1
  // },
  {
    desc: '1.50p change should return 2 coin',
    coinList: [1, 2, 5, 10, 20, 50, 100, 200],
    change: 150,
    result: 2
  }
];
