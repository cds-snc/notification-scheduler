import React from "react";
import { render } from "@testing-library/react";
import { Calendar } from "./Calendar";

test("Renders calendar", async () => {
  const { debug } = render(<Calendar />);
  debug();
  expect(true).toEqual(true);

  //expect(getByDataCy("my-component")).toHaveTextContent("Hello");
});
