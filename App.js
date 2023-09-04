const parent = React.createElement("div", {id:"parent"},
        [
            React.createElement("div", {id:"child"}, 
                [
                    React.createElement("h1", {},"I am heading from parent"),
                    React.createElement("h2", {},"I am heading 2 from parent")
                ],
            ),
            React.createElement("div", {id:"child2"}, 
                [
                    React.createElement("h1", {},"I am heading 2 from parent"),
                    React.createElement("h2", {},"I am heading 3 from parent")
                ],
            )
        ]
)

const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent)