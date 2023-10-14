import {fireEvent, render, screen} from "@testing-library/react";
import MOCK_DATA from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";
import RestroCard from "./RestroCard";
it("should render restro card component with data", ()=>{
    //mock data for resData 
    render(<RestroCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Kannur Food Point");
    expect(name).toBeInTheDocument()
})