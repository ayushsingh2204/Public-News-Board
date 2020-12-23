import { render, fireEvent, screen } from "@testing-library/react";
import UserRequests from "./UserRequests";
import { BrowserRouter } from "react-router-dom";

it("checkButtonRender", () => {
  render(
    <BrowserRouter>
      <UserRequests />
    </BrowserRouter>
  );
  expect(screen.queryByText("Name")).toBeInTheDocument();

  expect(screen.queryByText("Locality")).toBeInTheDocument();

  expect(screen.queryByText("AadharId")).toBeInTheDocument();

  expect(screen.queryByText("Mob No")).toBeInTheDocument();

  expect(screen.queryByText("Approve")).toBeInTheDocument();

  expect(screen.queryByText("Reject")).toBeInTheDocument();

  //expect(screen.queryByTitle("approve")).toBeInTheDocument();
  //   const btn1 = queryByTitle("approve");
  //   expect(btn1).toBeTruthy();
  //expect the button to be true-function will check what it expects is present
});
