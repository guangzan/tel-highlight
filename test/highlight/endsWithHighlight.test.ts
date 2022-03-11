import { telHighlight } from "../../src";
import { test, expect, it } from "vitest";

test("highlight endsWith", () => {
  const input = {
    tel: "12345678910",
    highlight: "78910",
  };
  const output = [
    {
      num: "123456",
      isHighlight: false,
    },
    {
      num: "78910",
      isHighlight: true,
    },
  ];
  expect(telHighlight(input)).toEqual(output);
});
