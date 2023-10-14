import Header from "./Header";
import {fireEvent, render, screen} from "@testing-library/react";
import React from 'react';
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("should test header component", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
    );
    //button but with specific Login text if so many buttons are there then we can pass extra param
    const loginButton = screen.getByRole("button", {name:"Login"});
    expect(loginButton).toBeInTheDocument();
});
it("should render header component with cart item 0", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cartItem = screen.getByText("Cart (0 - items)");
    expect(cartItem).toBeInTheDocument();
});
it("should render Header component with a cart item", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
    );
    //Get role by regex
    const loginButton = screen.getByText(/Cart/);
    expect(loginButton).toBeInTheDocument();
});
it("should changed to login button to logout on click", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>
    );
    //click samulate click button from code use fireEvent 
    const loginButton = screen.getByRole("button", {name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
});