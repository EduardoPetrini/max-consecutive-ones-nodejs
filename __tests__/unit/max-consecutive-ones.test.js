import { findMaxConsecutiveOnes } from "../../src/max-consecutive-ones";

describe("test max consecutive ones function ", () => {
  it("should return zero from undefined array of numbers", () => {
    const results = findMaxConsecutiveOnes();

    expect(results).toBeDefined();
    expect(results).toBe(0);
  });

  it("should return zero from empty array", () => {
    const results = findMaxConsecutiveOnes([]);

    expect(results).toBeDefined();
    expect(results).toBe(0);
  });

  it("should return 6", () => {
    const numbers = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
    const windowSize = 2;

    const results = findMaxConsecutiveOnes(numbers, windowSize);

    expect(results).toBe(6);
  });

  it("should return 10", () => {
    const numbers = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
    const windowSize = 3;

    const results = findMaxConsecutiveOnes(numbers, windowSize);

    expect(results).toBe(10);
  });
});
