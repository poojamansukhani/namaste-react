import { act } from "react-dom/test-utils";
import Restaurant from "./Restaurant"
import {fireEvent, render, screen} from "@testing-library/react";
import {MOCK_DATA} from "./mocks/mockResMenu.json";
import React from 'react';
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "./Cart";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("should Load Restaurant Menu Component", async () => {
    await act(async () =>
      render(
          <BrowserRouter>
          <Provider store={appStore}>
              <Header/>
            <Restaurant />
            <Cart/>
          </Provider>
          </BrowserRouter>
      )
    ); 
     const accordionHeader = screen.getByText("desserts (14)");
     fireEvent.click(accordionHeader);
     const items= screen.getAllByTestId("foodItems")
     expect(items.length).toBe(14);
     const addBtns = screen.getAllByRole("button", {name:"Add +"});
       expect(addBtns.length).toBe(14);
       //click on first button
       fireEvent.click(addBtns[0]);
        //on click in header cart item should change
        expect(screen.getByText("Cart - (1)")).toBeInTheDocument();
        expect(screen.getAllByTestId("foodItems").length).toBe(7);
});