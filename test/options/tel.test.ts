import { telHighlight } from "../../src";
import { test, expect, it } from "vitest";

test("options.highlight null", () => {
  const input = {
    tel: "12345678910",
  };
  const output = [
    {
      num: "12345678910",
      isHighlight: false,
    },
  ];
  expect(telHighlight(input)).toEqual(output);
});
