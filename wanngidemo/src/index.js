import { StrictMode } from "react";
import ReactDOM from "react-dom";
import RadioColour from "./RadioColour";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
ReactDOM.render(<RadioColour />, document.getElementById('colorpicker'));
