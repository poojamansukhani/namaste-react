import React from "react";
import ReactDOM from "react-dom/client";
//React Element Normal JS variable which is containing object at the end
const ele = <span>React</span>
const jsxHeading = (
    <h1 className="heading">{ele} Hi from React Element</h1>
    );
    //Components
const TitleComponent = () => {
    return <h1>Hi coming fromm Title Functional Component</h1>
}
const HeadingComponent = () => (
    <div className="container">
        {/*Using react element in react component*/}
        {jsxHeading}
        <TitleComponent/>
        {/*You can call functional componenet becasue at the end it is JS function */}
        {TitleComponent()}
        <TitleComponent></TitleComponent>
        <h1>Hi coming fromm Functional Component</h1>
        {1+1}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
//React element rendering
// root.render(jsxHeading)
//React component rendering
root.render(<HeadingComponent/>)