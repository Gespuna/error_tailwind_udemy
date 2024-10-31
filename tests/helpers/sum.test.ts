import { expect, test } from "vitest";
import { sum } from "../../src/helpers/sum";
import { addArray } from "../../src/helpers/sum";

test("adds 1 + 2 res 3", () => {
  const a = 1;
  const b = 4;

  const result = sum(1, b);

  expect(result).toBe(a + b);

  //   if (sum(1, 2) !== 3) {
  //     throw new Error("");
  //   }
});

test("does addArray mutate original array?", () => {
  const arrayOfNumbers = [1, 2, 3];
  addArray(arrayOfNumbers);
  expect(arrayOfNumbers).toStrictEqual([1, 2, 3]);
});
test("does addArray return the proper value?", () => {
  const arrayOfNumbers = [1, 2, 3];
  const resultAddArray = addArray(arrayOfNumbers);
  expect(arrayOfNumbers).not.toBe(resultAddArray);
});
test("does addArray return a number?", () => {
  const arrayOfNumbers = addArray([1, 2, 3]);
  expect(typeof arrayOfNumbers).toBe("number");
});
