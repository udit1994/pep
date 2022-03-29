import { mergeObjects, getFormattedHourAndMin } from "../index";

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

describe("Test for getFormattedHourAndMin function", () => {
  test("When input is undefined", () => {
    const result = getFormattedHourAndMin(undefined);

    expect(result).toEqual("");
  });

  test("When inputs are defined", () => {
    const result = getFormattedHourAndMin(new Date(0));

    expect(result).toEqual("05.30");
  });
});
