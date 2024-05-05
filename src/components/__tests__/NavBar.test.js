import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "../NavBar";
import { SiNasa } from "react-icons/si";

test("renders NavBar component with NASA logo", () => {
  render(<NavBar />);

  const nasaLogo = screen.getByTestId("nasa-logo");
  expect(nasaLogo).toBeInTheDocument();
  expect(nasaLogo).toHaveClass("text-8xl text-white");
});
