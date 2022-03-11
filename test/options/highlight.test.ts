import { telHighlight } from "../../src";
import { test, expect, it } from "vitest";

test("null", () => {
  const input = {
    tel: "12345678910",
    highlight: null,
  };
  const output = [
    {
      num: "12345678910",
      isHighlight: false,
    },
  ];
  expect(telHighlight(input)).toEqual(output);
});
