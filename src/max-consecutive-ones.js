const findMaxConsecutiveOnes = (numbers, windowSize) => {
  if (!numbers) {
    return 0;
  }

  let count = 0;
  let maxCount = 0;

  let indexA = 0;
  let indexB = 0;

  let currentWindow = windowSize;

  while (indexB < numbers.length) {
    const numA = numbers[indexA];
    const numB = numbers[indexB];

    if (currentWindow < 0) {
      if (numA === 0) {
        currentWindow = currentWindow + 1;
      }

      count = count - 1;
      indexA = indexA + 1;
    } else {
      if (numB === 0) {
        currentWindow = currentWindow - 1;
      }

      if (count > maxCount) {
        maxCount = count;
      }

      count = count + 1;
      indexB = indexB + 1;
    }
  }

  return maxCount;
};

export { findMaxConsecutiveOnes };
