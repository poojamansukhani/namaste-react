import {render, screen} from "@testing-library/react";
import React from 'react';
import "@testing-library/jest-dom";
import About from "../About";
test("Should load About component", ()=>{
    render(<About/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});