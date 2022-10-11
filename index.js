import { findMaxConsecutiveOnes } from "./src/max-consecutive-ones.js";
import { stringToArrayOfNumbers, toNumber } from "./src/helpers/helpers.js";


// node index 1,1,0,0,1,1 1
const run = () => {
  const stringArray = process.argv[2];
  const stringWindow = process.argv[3];

  const array = stringToArrayOfNumbers(stringArray) ||  [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
  const windowSize = toNumber(stringWindow) || 2;

  const results = findMaxConsecutiveOnes(array, windowSize);

  console.log(results);

  return results;
}

const [, executableFile] = process.argv;

if (!executableFile.endsWith("jest.js")) {
  run();
}
