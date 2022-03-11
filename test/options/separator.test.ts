import { telHighlight } from "../../src";
import { test, expect, it } from "vitest";

test("custom separator", () => {
  const input = {
    tel: "12345678910",
    separat: true,
    separator: "-",
  };
  const output = [
    {
      num: "123",
      isHighlight: false,
    },
    {
      num: "-",
      isHighlight: false,
    },
    {
      num: "4567",
      isHighlight: false,
    },
    {
      num: "-",
      isHighlight: false,
    },
    {
      num: "8910",
      isHighlight: false,
    },
  ];
  expect(telHighlight(input)).toEqual(output);
});
