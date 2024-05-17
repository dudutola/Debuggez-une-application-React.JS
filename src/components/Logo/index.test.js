import { cleanup, render, screen } from "@testing-library/react";
import Logo from "./index";

describe("Logo component", () => {
  afterEach(cleanup);
  const sizes = ["small", "medium", "large"];
  sizes.forEach(size => {
   it("renders the logo with the correct size", () => {
      render(<Logo size={size}/>);
      const logo = screen.getByTestId("logo-testid");
      expect(logo).toBeInTheDocument();
    });
  })
  it("renders the logo with the correct width and height for large size", () => {
    render(<Logo size="large"/>);
    const logoWidth = screen.getByTestId("logo-testid");
    expect(logoWidth.querySelector("svg")).toHaveAttribute("width", "160");
    expect(logoWidth.querySelector("svg")).toHaveAttribute("height", "60");
  });
  it("contains the correct class names", () => {
    render(<Logo size="large"/>);
    const logoElement = screen.getByTestId("logo-testid");
    expect(logoElement.classList.contains("Logo")).toBe(true);
  });
})
