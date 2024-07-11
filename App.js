const parent1 = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, [React.createElement("h1", {}, "I am h1!"),React.createElement("h2", {}, "I am h2!")]));

const parent = React.createElement("div",{id:"parent"},[React.createElement("div", {id:"child1"}, React.createElement("h1",{},"H1")),React.createElement("div", {id:"child2"}, React.createElement("h2",{},"H2"))]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
