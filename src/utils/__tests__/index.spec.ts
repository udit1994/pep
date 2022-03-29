import { mergeObjects } from "../index";

describe("Test for mergeObject function", () => {
  test("When inputs are undefined", () => {
    const result = mergeObjects(undefined, undefined);

    expect(result).toEqual({});
  });

  test("When inputs are defined", () => {
    const result = mergeObjects({ a: 1 }, { 1: "b" });

    expect(result).toEqual({ a: 1, 1: "b" });
  });
});
