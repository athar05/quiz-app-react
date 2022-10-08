import { render, screen } from "@testing-library/react";
import HomeBody from "../components/Home-body/HomeBody";
import Quiz from "./Quiz";
import RulesText from "../components/Rules-Text/RulesText";
import handleShuffle from "../components/Questions/Questions";
import { MemoryRouter } from "react-router-dom";

describe("This test suite for pages checks if", () => {
  test("home page renders the test Choose Category", () => {
    //arrange
    render(<HomeBody />, { wrapper: MemoryRouter });

    //act ... nothing

    //assert
    const chooseCategoryTest = screen.getByText("Choose A Category", {
      exact: false,
    });
    expect(chooseCategoryTest).toBeInTheDocument();
  });

  test("Rules Page display the rules", () => {
    render(<RulesText />, { wrapper: MemoryRouter });

    const rulesTest = screen.getByText(
      "You are given 4 options for each question, choose 1 option from given options.",
      { exact: false }
    );
    expect(rulesTest).toBeInTheDocument();
  });
});
