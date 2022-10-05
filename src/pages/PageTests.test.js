import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Rules from "./Rules";
import QuestionsHeader from "../components/Questions-header/QuestionsHeader";
import { MemoryRouter } from "react-router-dom";

describe("Tests for pages", () => {
  test("checks if Quiz Page renders questions", () => {
    //arrenge
    render(Rules, { wrapper: MemoryRouter });

    //act
    const buttonElement = screen.getByText("Take Quiz", { exact: false });
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.getByText("Welcome", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
});
