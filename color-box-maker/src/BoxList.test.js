import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

const addBox = (boxList, width="5", height="5", color="blue") => {
  const boxWidth = boxList.getByLabelText("Width:")
  const boxHeight = boxList.getByLabelText("Height:")
  const boxColor = boxList.getByLabelText("Color:")
  fireEvent.change(boxWidth, { target: { value: width } });
  fireEvent.change(boxHeight, { target: { value: height } });
  fireEvent.change(boxColor, { target: { value: color } });

  const btn = boxList.getByText("Add Color Box")
  fireEvent.click(btn);
}

it(`renders without crashing`, () => {
  render(<BoxList />);
});

it(`matches snapshop`, () => {
  const {asFragment} = render(<BoxList /> );
  expect(asFragment()).toMatchSnapshot();
})

it(`adds a new box to the page`, () => {
  const boxList = render(<BoxList />);

  expect(boxList.queryByText("Remove Box")).not.toBeInTheDocument();


  addBox(boxList);

  const rmvBtn = boxList.getByText("Remove Box");
  expect(rmvBtn).toBeInTheDocument();
  expect(rmvBtn.previousSibling).toHaveStyle(`
    width: 5em;
    height: 5em;
    background-color: blue`)
})