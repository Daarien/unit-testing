import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";

describe("App testing", () => {
  test("Btn increment counter on click", () => {
    const app = shallow(<App />);
    app.find("button").simulate("click");
    const count = app.find("display-count").text();
    expect(count).toBe(1);
  });
});
