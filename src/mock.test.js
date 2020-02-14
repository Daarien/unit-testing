import { filterMap } from "./mock";

describe("Mocks", () => {
  let arr = [];
  let fn;
  beforeAll(() => {
    fn = jest.fn(x => x * 2);
  });
  beforeEach(() => {
    arr = [1, 2, 3, 4, 5];
  });
  it("should work", () => {
    expect(filterMap(arr, fn)).toBeInstanceOf(Array);
    expect(fn).toBeCalled();
    expect(filterMap(arr, fn)).toContain(8);
    expect(fn).toBeCalledTimes(10);
    expect(fn.mock.results[7].value).toBe(6);
    expect(
      filterMap(arr, i => {
        if (i === 3) return false;
        if (i === 5) return 0;
        return i + 1;
      })
    ).toEqual([2, 3, 5, 0]);
  });
});
