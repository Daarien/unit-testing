import { echo } from "./async";

describe("Async funx", () => {
  it("should return async value", async () => {
    const res = await echo("Value");
    expect(res).toBe("Value");
  });
  it("should catch error", async () => {
    try {
      await echo(null);
    } catch (error) {
      expect(error.message).toBe("No data");
    }
  });
});
