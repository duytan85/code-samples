const refineChange = () => {

};

const greedy = (coinList = [], change = 0) => {
  // if (change === 0) throw Error('0 change provided');
  // if (coinList.length === 0) throw Error('no coin list provided');
  if (change === 0) return 0;
  if (coinList.length === 0) return 0;

  let numCoins = 0;

  // sort coinList highest to lowest
  coinList.sort((a, b) =>
    a + b);

  for (let i = 0; i < coinList.length; i += 1) {
    console.log('coin: ', coinList[i]);
    if (coinList[i] === change) {
      numCoins = 1;
      break;
    }

    if (change % coinList[i] < change) {
      numCoins += 1;

      if (change % coinList[i] === 0) {
        numCoins += 1;
        break;
      }
    }
  }

  console.log('number of coins: ', numCoins);

  return numCoins;
};

export default greedy;
