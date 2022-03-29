import { render, fireEvent, screen } from "@testing-library/react";

// Components
import { App } from "../App";

// Fixture
import { direct, weather, oneCall } from "./App.fixture";

describe("Test for mergeObject function", () => {
  let originalFetch: any;

  beforeEach(() => {
    originalFetch = global.fetch;
    // @ts-ignore
    global.fetch = jest.fn((query) => {
      let dataToSend = {};

      if (query.toString().indexOf("/direct") > -1) {
        dataToSend = direct;
      } else if (query.toString().indexOf("/weather") > -1) {
        dataToSend = weather;
      } else if (query.toString().indexOf("/onecall") > -1) {
        dataToSend = oneCall;
      }

      return Promise.resolve({
        json: () => Promise.resolve(dataToSend),
      });
    });
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });
  test("When user types in the input field network call should go and get the weather data", async () => {
    render(<App />);

    const inputField = screen.getByPlaceholderText("Enter City Name");

    expect(inputField).toBeDefined();

    fireEvent.change(inputField, { target: { value: "Spain" } });

    await screen.findByText("Clear");

    expect(screen.getByText("Clear")).toBeInTheDocument();
  });
});
