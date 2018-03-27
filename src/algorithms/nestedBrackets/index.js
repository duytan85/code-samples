const isNestedBracket = (string) => {
  let count = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '{') {
      count += 1;
    } else if (string[i] === '}') {
      count -= 1;
    }
    // TODO: need to check if count goes down and then up
    if (count < 0) {
      break;
    }
  }

  return count >= 0;
};

export default isNestedBracket;
