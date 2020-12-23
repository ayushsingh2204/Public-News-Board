import { render, fireEvent, screen } from "@testing-library/react";
import MostReadNewsStat from "./MostReadNewsStat"
import { BrowserRouter } from "react-router-dom";

it("FullNewsHeader", () => {
  render(
    <BrowserRouter>
      <MostReadNewsStat></MostReadNewsStat>
    </BrowserRouter>
  );
  
  expect(screen.queryByText("Most Read News Statistic")).toBeInTheDocument();


 
});
