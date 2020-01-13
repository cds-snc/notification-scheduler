import React from "react";
import { StateProvider } from "../store";
import { I18nProvider } from "../i18n";
import { render } from "@testing-library/react";
import { Calendar } from "./Calendar";

test("Renders calendar", async () => {
  const { debug } = render(
    <I18nProvider>
      <StateProvider>
        <Calendar />
      </StateProvider>
    </I18nProvider>
  );
  debug();
  expect(true).toEqual(true);

  //expect(getByDataCy("my-component")).toHaveTextContent("Hello");
});
