import { calculate } from "../src/calculate";

describe('calculate function', () => {
  it.each([
    {
      d:10,
      n: 50,
      f: 1,
      c: 50,
      expected: 40
    },
    {
      d:10,
      n: 100,
      f: 1,
      c: 50,
      expected: 70
    },
    {
      d:5,
      n: 125,
      f: 2,
      c: 50,
      expected: 85
    }
  ])(
    'Delivered food', ({d, n, f, c, expected}) => {
      const result = calculate(d, n, f, c);
      expect(result).toBe(expected);
    }
  )
});