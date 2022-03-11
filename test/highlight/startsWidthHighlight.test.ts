import { telHighlight } from "../../src";
import { test, expect, it } from "vitest";

test("startsWith - string tel and string highlight", () => {
  const input = {
    tel: "12345678910",
    highlight: "123",
  };
  const output = [
    {
      num: "123",
      isHighlight: true,
    },
    {
      num: "45678910",
      isHighlight: false,
    },
  ];
  expect(telHighlight(input)).toEqual(output);
});

test("startsWith - number tel and number highlight", () => {
  const input = {
    tel: 12345678910,
    highlight: 123,
  };
  const output = [
    {
      num: "123",
      isHighlight: true,
    },
    {
      num: "45678910",
      isHighlight: false,
    },
  ];
  expect(telHighlight(input)).toEqual(output);
});

test("startsWith - number tel and string highlight", () => {
  const input = {
    tel: 12345678910,
    highlight: "123",
  };
  const output = [
    {
      num: "123",
      isHighlight: true,
    },
    {
      num: "45678910",
      isHighlight: false,
    },
  ];
  expect(telHighlight(input)).toEqual(output);
});

test("startsWith - string tel and number highlight", () => {
  const input = {
    tel: "12345678910",
    highlight: 123,
  };
  const output = [
    {
      num: "123",
      isHighlight: true,
    },
    {
      num: "45678910",
      isHighlight: false,
    },
  ];
  expect(telHighlight(input)).toEqual(output);
});
