import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Render app headings", () => {
	render(<App />);
	const headings = screen.getAllByRole("heading");
	expect(headings[0]).toHaveTextContent("Fiona's To-Do App");
	expect(headings[1]).toHaveTextContent("Add Task");
	expect(headings[2]).toHaveTextContent("Current Tasks");
});

test("Render list item from input field and submit", () => {
	render(<App />);
	const input = screen.getByRole("textbox");
	fireEvent.change(input, { target: { value: "Hello" } });
	fireEvent.click(screen.getByRole("button"));
	const item = screen.getByRole("listitem");
	expect(item).toHaveTextContent("Hello");
});

test("Mark an item complete when clicked", () => {
	render(<App />);
	fireEvent.click(screen.getByRole("button"));
	const item = screen.getByRole("listitem");
    fireEvent.click(item)
    expect(item).toHaveStyle({ textDecoration: 'line-through' })
});
