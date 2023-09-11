import React from "react";
import ReactDOM from "react-dom/client";
//React Element Normal JS variable which is containing object at the end
const jsxHeading = (
    <h1 className="heading">Hi</h1>
    );
    const TitleComponent = () => {
        return <h1>Hi coming fromm Title Functional Component</h1>
    }
const HeadingComponent = () => (
    <div className="container">
        <TitleComponent/>
        <h1>Hi coming fromm Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
//React element rendering
// root.render(jsxHeading)
//React component rendering
root.render(<HeadingComponent/>)
