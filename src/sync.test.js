import { compact } from "./sync";

describe("Sync funx", () => {
  let arr = [];
  beforeAll(() => {
    arr = ["", "str", null, 5];
  });
  it("compact should remove falsy values", () => {
    expect(compact(arr)).toEqual(["str", 5]);
    expect(compact(arr)).not.toContain(null);
    expect(compact(arr)).toBeInstanceOf(Array);
  });
});
