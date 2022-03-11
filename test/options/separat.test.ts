import { telHighlight } from "../../src";
import { test, expect, it } from "vitest";

test("true", () => {
  const input = {
    tel: "12345678910",
    separat: true,
  };
  const output = [
    {
      num: "123",
      isHighlight: false,
    },
    {
      num: " ",
      isHighlight: false,
    },
    {
      num: "4567",
      isHighlight: false,
    },
    {
      num: " ",
      isHighlight: false,
    },
    {
      num: "8910",
      isHighlight: false,
    },
  ];
  console.log(telHighlight(input).length);

  expect(telHighlight(input)).toEqual(output);
});
