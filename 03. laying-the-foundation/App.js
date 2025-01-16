import React from "react";
import ReactDOM from "react-dom/client";

// Jsx (transpiled before  it reaches the JS )- PARCEL- Babel
//JSX => Babel transpiles it to React.createElement =>ReactElement -JS Object=> HTMLElement(render)

// React Element
const Title = () => (
  <h1 id="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// React Component
// Functional Components - returns React Element // JSX

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h2 className="heading">Namaste React Functional Component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
