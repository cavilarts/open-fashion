import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("<Header>", () => {
  it("should render the header elements", () => {
    render(<Header />);
    const menuButton = screen.getByRole("button", { name: /menu/i });
    const logo = screen.getByTitle(/open fashion/i);
    const searchButton = screen.getByRole("button", { name: /search/i });
    const bagButton = screen.getByRole("button", { name: /shopping cart/i });

    expect(menuButton).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(bagButton).toBeInTheDocument();
  });
});
