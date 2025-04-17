function* fibonacci(limit) {
  let a = 0, b = 1, count = 0;
  while (count < limit) {
    yield a;
    [a, b] = [b, a + b];
    count++;
  }
}

// Test the generator
for (let num of fibonacci(10)) {
  console.log(num);
}