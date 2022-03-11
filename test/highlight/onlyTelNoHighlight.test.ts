import { telHighlight } from "../../src";
import { test, expect, it } from "vitest";

test("only string tel ", () => {
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

test("only number tel ", () => {
  const input = {
    tel: 12345678910,
  };
  const output = [
    {
      num: "12345678910",
      isHighlight: false,
    },
  ];
  expect(telHighlight(input)).toEqual(output);
});
