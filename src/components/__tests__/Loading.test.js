import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "../Loading";

test("renders loading component with image", () => {
  render(<Loading />);

  // Check image is rendered
  const image = screen.getByAltText("BlackCart");
  expect(image).toBeInTheDocument();

  // Check image has the correct source
  expect(image).toHaveAttribute("src", "loading.webp");

  // Check image has the correct width and height
  expect(image).toHaveStyle({ width: "200px", height: "200px" });
});
