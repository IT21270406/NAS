import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Apod from "../NasaPhoto";

// Mocking fetch
const mockFetch = (data) =>
  jest.fn().mockResolvedValue({ json: () => Promise.resolve(data) });

// Mocked data
const mockedData = {
  title: "Sample Title",
  date: "2024-05-05",
  url: "https://example.com/image.jpg",
  explanation: "Sample explanation for the image.",
};

test("renders Apod component with fetched data", async () => {
  const mockFetchFn = mockFetch(mockedData);
  global.fetch = mockFetchFn;

  render(<Apod />);

  // Wait for the API call to complete
  await waitFor(() => expect(mockFetchFn).toHaveBeenCalledTimes(1));

  // Check if the title, date, and photo are rendered
  const title = screen.getByText(/Sample Title/i);
  expect(title).toBeInTheDocument();

  const date = screen.getByText(/2024-05-05/i);
  expect(date).toBeInTheDocument();

  const photo = screen.getByAltText(/Sample Title/i);
  expect(photo).toBeInTheDocument();
  expect(photo).toHaveAttribute("src", "https://example.com/image.jpg");

  const explanation = screen.getByText(/Sample explanation for the image./i);
  expect(explanation).toBeInTheDocument();
});
