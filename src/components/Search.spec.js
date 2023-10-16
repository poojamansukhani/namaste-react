import {fireEvent, render, screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "./Body";
import MOCK_DATA from "./mocks/mockRestroListsData.json";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";
//Tests can not make a network call actual call. because it does not run on browser.
//So that's why 
 //need to add mock fetch function because fetch is given by browser.
    //jest can'not understand fetch so need to mock fetch 
//jest.fn function will give mock function 
//this functiona takes callback where we can mock exactly how my fetrch function works
//fetch function returmns promise so need to return promise here as well
global.fetch = jest.fn(()=>{
    //fetch function resolve with a json 
    return Promise.resolve({
        //json is again a function which returns a promise.resolve which contains data
        json: () => {
            return Promise.resolve(MOCK_DATA); 
        }
    })
})
it("should search reslist for burger text input", async ()=>{
    //whenever using fetch, state update etc wrap component in act 
    //we have to await this act . it return promise. when act wiake async function which will return compoonent
    await act(async ()=>{
        render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
        );
    })
    const searchBtn = screen.getByRole("button", {name: "Search"});
    const searchInput = screen.getByTestId("searchInput");
    //mocking e.target.value onchange method
    fireEvent.change(searchInput, {target:{value:"burger"}});
    //Click the search
    fireEvent.click(searchBtn);
    //screen shold load cards with burgers give all elemetnt with resCard test id 
    const cards = screen.getAllByTestId("resCard")
    expect(cards.length).toBe(1);
    expect(searchBtn).toBeInTheDocument();
});

it("Should filter Top Rated Restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
   // const cardsBeforeFilter = screen.getAllByTestId("resCard");
  
   // expect(cardsBeforeFilter.length).toBe(9);
  
    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurents",
    });
    fireEvent.click(topRatedBtn);
  
   // const cardsAfterFilter = screen.getAllByTestId("resCard");
    //expect(cardsAfterFilter.length).toBe(1);
  });
