import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import UseState from "./components/UseState.jsx";
import TwoWayBinding from "./components/TwoWayBinding.jsx";
import TwoWayBindingFormSubmit from "./components/TwoWayBindingFormSubmit.jsx";
import TwoWayBindingFormSubmit2 from "./components/TwoWayBindingFormSubmit2.jsx";
import TwoWayBindingFormSubmit3 from "./components/TwoWayBindingFormSubmit3.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
        <TwoWayBindingFormSubmit3 />
    </StrictMode>
);
