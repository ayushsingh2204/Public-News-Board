import { render, fireEvent, screen } from "@testing-library/react";
import FullNews from "./FullNews";
import { BrowserRouter } from "react-router-dom";

it("FullNewsHeader", () => {
  render(
    <BrowserRouter>
      <FullNews />
    </BrowserRouter>
  );

  expect(screen.queryByText("Reported Issues")).toBeInTheDocument();
});
