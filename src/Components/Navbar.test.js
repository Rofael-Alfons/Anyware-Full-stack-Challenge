import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { createStore } from "redux";
import rootReducer from "../Store/Store";

describe("Navbar component", () => {
  let store;

  beforeEach(() => {
    store = createStore(rootReducer, {
      user: { email: "test@example.com", loggedIn: true },
    });
  });

  test("renders the welcome message with the user email", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText("Welcome back test@example.com")
    ).toBeInTheDocument();
  });
});
