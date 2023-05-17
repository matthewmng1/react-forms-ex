import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import Todo from "./Todo";

it(`renders without crashing`, () => {
  render (<TodoList />);
});

it(`matches snapshop`, () => {
  const {asFragment} = render(<TodoList /> );
  expect(asFragment()).toMatchSnapshot();
})

it(`adds a new task to the todo list`, () => {
  const { queryByText, getByLabelText} = render (<TodoList />);
  const input = getByLabelText("To-do List")
  const btn = queryByText("Add Todo")
  expect(queryByText("Get milk")).not.toBeInTheDocument();;
  fireEvent.change(input, {target: {value: 'Get milk'}});
  fireEvent.click(btn);
  expect(queryByText("Get milk")).toBeInTheDocument();;
})