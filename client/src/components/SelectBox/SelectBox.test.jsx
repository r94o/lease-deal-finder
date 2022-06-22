import SelectBox from "./SelectBox";
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';



describe("Select Box for vehicles", () => {
  test("default to correct option", () => {
    render(<SelectBox />)
    expect(screen.getByRole('option', { name: 'Select a car' }).selected).toBe(true);
  })
  test("all cars are loaded on mount", () => {
    render(<SelectBox />)
    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveAttribute("value", "62d220ba1d4e540776a37d0f")
    expect(options[1]).toHaveAttribute("value", "62b220ba1d6e540746a37d11")
    expect(options.length).toBe(2);
  })
})
