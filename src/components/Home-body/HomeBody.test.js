import { render, screen } from "@testing-library/react";
import HomeBody from "./HomeBody";
import { MemoryRouter } from "react-router-dom";

test("renders Quiz Setting as a text on the home page", () => {
  //arrange
  render(<HomeBody />, { wrapper: MemoryRouter });

  //act ... nothing

  //assert
  const quizSettingTest = screen.getByText("Choose A Category", {
    exact: false,
  });
  expect(quizSettingTest).toBeInTheDocument();
});
