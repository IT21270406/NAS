import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

test("renders Footer component with NASA API information", () => {
  render(<Footer />);

  // Check title is rendered
  const title = screen.getByText(/NASA API/i, { selector: "h4" });
  expect(title).toBeInTheDocument();

  // Check paragraph
  const paragraph = screen.getByText(/Explore the Cosmos/i);
  expect(paragraph).toBeInTheDocument();

  // Check Useful Links
  const usefulLinksTitle = screen.getByText(/Useful Links/i);
  expect(usefulLinksTitle).toBeInTheDocument();

  // Check Our Services
  const ourServicesTitle = screen.getByText(/Our Services/i, {
    selector: "h4",
  });
  expect(ourServicesTitle).toBeInTheDocument();

  // Check Join Our Community
  const joinCommunityTitle = screen.getByText(/Join Our Community/i);
  expect(joinCommunityTitle).toBeInTheDocument();
});
