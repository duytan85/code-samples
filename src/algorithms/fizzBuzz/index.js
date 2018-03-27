const fizzBuzz = (x, a, b) => {
  const results = [];

  for (let num = 1; num < (x + 1); num += 1) {
    switch (true) {
      case (num % a === 0 && num % b === 0): {
        results.push('fizzBuzz');
        break;
      }
      case (num % a === 0): {
        results.push('fizz');
        break;
      }
      case (num % b === 0): {
        results.push('buzz');
        break;
      }
      default: {
        results.push(num);
      }
    }
  }

  return results;
};

export default fizzBuzz;
