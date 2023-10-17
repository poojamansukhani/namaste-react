import Contact from "./Contact"
import {render, screen} from "@testing-library/react";
import React from 'react';
import "@testing-library/jest-dom";
describe("should test contact", ()=>{
    //Before running all test case
    // beforeAll(()=>{
    //     console.log("Before all");
    // })
    // // Before each test case whatever want to do Helpful  in cleanup task
    // beforeEach(()=>{
    //     console.log("Before each");
    // })
    // //After completing all test 
    // afterAll(()=>{
    //     console.log("After all");
    // })
    // //After each test this will get call
    // afterEach(()=>{
    //     console.log("After each")
    // })
    it("Should load contact us component", ()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    it("Should load button inside contact component", ()=>{
        render(<Contact/>);
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument();
    });
    it("Submit text should be there in component", ()=>{
        render(<Contact/>);
        const submit = screen.getByText("Submit")
        expect(submit).toBeInTheDocument();
    });
    it("should load input name placeholder text", ()=>{
        render(<Contact/>);
        const name = screen.getByPlaceholderText("Name")
        expect(name).toBeInTheDocument();
    });
    it("should load input message placeholder text", ()=>{
        render(<Contact/>);
        const msg = screen.getByPlaceholderText("Message")
        expect(msg).toBeInTheDocument();
    });
    test("should load 2 input box in contact component", ()=>{
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox")
        expect(inputBoxes.length).toBe(2)
    });
})
