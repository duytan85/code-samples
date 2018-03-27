function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i <= 1000; i++) {
  console.log('%sth fibonacci is %s', i, fibonacci(i));
}
