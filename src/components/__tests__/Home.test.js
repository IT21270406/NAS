import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../Home";
import "intersection-observer";

test("renders Home component with NASA API information", () => {
  render(<Home />);

  // Check title
  const title = screen.getByText(/NASA API/i, { selector: "h4" });
  expect(title).toBeInTheDocument();

  // Check subtite
  const subtitle = screen.getByText(/BEYOND THE EARTH/i);
  expect(subtitle).toBeInTheDocument();

  // Check paragraph
  const paragraph = screen.getByText(
    /NASA API, provided by NASA \(National Aeronautics and Space Administration\), offers access to a wealth of space-related data, including images, videos, mission details, and more./i
  );
  expect(paragraph).toBeInTheDocument();

  // Check Contact is rendered
  const contactButton = screen.getByRole("button", { name: /contact us/i });
  expect(contactButton).toBeInTheDocument();

  // Check NASA API is rendered
  const apisButton = screen.getByRole("button", { name: /nasa apis/i });
  expect(apisButton).toBeInTheDocument();

  // Check main image
  const mainImage = screen.getByAltText(/mainPic/i);
  expect(mainImage).toBeInTheDocument();
  expect(mainImage).toHaveAttribute("src", "nasa-5.png");
});
