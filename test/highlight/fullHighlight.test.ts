import { telHighlight } from "../../src";
import { test, expect, it } from "vitest";

test("all string", () => {
  const input = {
    tel: "12345678910",
    highlight: "12345678910",
  };
  const output = [
    {
      num: "12345678910",
      isHighlight: true,
    },
  ];
  expect(telHighlight(input)).toEqual(output);
});

test("all number", () => {
  const input = {
    tel: 12345678910,
    highlight: 12345678910,
  };
  const output = [
    {
      num: "12345678910",
      isHighlight: true,
    },
  ];
  expect(telHighlight(input)).toEqual(output);
});

test("number tel and string highlight", () => {
  const input = {
    tel: 12345678910,
    highlight: "12345678910",
  };
  const output = [
    {
      num: "12345678910",
      isHighlight: true,
    },
  ];
  expect(telHighlight(input)).toEqual(output);
});

test("string tel and number highlight", () => {
  const input = {
    tel: "12345678910",
    highlight: 12345678910,
  };
  const output = [
    {
      num: "12345678910",
      isHighlight: true,
    },
  ];
  expect(telHighlight(input)).toEqual(output);
});
