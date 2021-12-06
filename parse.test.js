import parse from "./parse.js";

describe("#parse", () => {
  test("It works with -", () => {
    expect(parse("3-1")).toBe(2);
  });
  test("It works with +", () => {
    expect(parse("3+1")).toBe(4);
  });
  test("It works with *", () => {
    expect(parse("3*3")).toBe(9);
  });
  test("It works with /", () => {
    expect(parse("10/2")).toBe(5);
  });
  test("It works with ^", () => {
    expect(parse("5^2")).toBe(25);
  });
  test("It works with parenthesis", () => {
    expect(parse("(10+2)*2")).toBe(24);
  });

  describe("With very large number", () => {
    test("It return result in scientific notation", () => {
      expect(parse("10 ^ 30")).toBe(1e30);
    });
  });

  describe("With very small number", () => {
    test("It return result in scientific notation", () => {
      expect(parse("10 ^ -30")).toBe(1e-30);
    });
  });

  describe("With malformed equation", () => {
    test("It return NaN", () => {
      expect(parse("abc")).toBeNaN();
    });
  });
});
