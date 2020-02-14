import { sum } from "./simple";

describe("Sum function", () => {
  test("should calculate", () => {
    expect(sum(2, 2)).toBe(4);
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
