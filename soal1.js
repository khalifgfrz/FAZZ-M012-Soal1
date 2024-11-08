function countPrimeSetBits(left, right) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  for (let i = left; i <= right; i++) {
    const setBits = i.toString(2).split("1").length - 1;
    if (isPrime(setBits)) {
      count++;
    }
  }

  return count;
}

const left = 8;
const right = 1000;
console.log(countPrimeSetBits(left, right));
